#!/usr/bin/env bash
#
# One Circle Solutions - Linux Server Baseline Hardening (Debian/Ubuntu)
# Version : 1.0.0
# Author  : One Circle Solutions (https://onecs.net)
# License : MIT. Provided as-is, without warranty. TEST BEFORE USE.
#
# Applies a conservative baseline to a Debian/Ubuntu server:
#   - SSH daemon hardening (root login off, sane auth limits)
#   - UFW default-deny inbound firewall (SSH allowed)
#   - Kernel/network sysctl hardening
#   - auditd with a starter rule set
#   - Unattended security updates
#
# Usage:
#   sudo bash onecircle-linux-hardening.sh --report-only   # audit, no changes
#   sudo bash onecircle-linux-hardening.sh                 # apply
#
# Notes:
#   - Keep an active SSH session open while applying; verify you can
#     open a NEW session before disconnecting.
#   - Password authentication is left ENABLED by default; disable it
#     yourself once key-based access is confirmed (see FOLLOW-UPS).

set -u

REPORT_ONLY=0
[[ "${1:-}" == "--report-only" ]] && REPORT_ONLY=1

CHANGES=0
FAILURES=0

log()   { printf '  [%s] %s\n' "$1" "$2"; }
would() { log "WOULD" "$1"; CHANGES=$((CHANGES+1)); }
ok()    { log "OK" "$1"; }
done_() { log "DONE" "$1"; CHANGES=$((CHANGES+1)); }
fail()  { log "FAILED" "$1"; FAILURES=$((FAILURES+1)); }
section(){ printf '\n== %s ==\n' "$1"; }

require_root() {
  if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root (sudo)." >&2
    exit 1
  fi
}

apt_install() {
  local pkg="$1"
  if dpkg -s "$pkg" >/dev/null 2>&1; then
    ok "$pkg already installed"
    return 0
  fi
  if [[ $REPORT_ONLY -eq 1 ]]; then
    would "install $pkg"
    return 0
  fi
  if DEBIAN_FRONTEND=noninteractive apt-get install -y "$pkg" >/dev/null 2>&1; then
    done_ "installed $pkg"
  else
    fail "install $pkg"
    return 1
  fi
}

# Set "Key value" in sshd_config via a drop-in file.
SSHD_DROPIN="/etc/ssh/sshd_config.d/90-onecircle-hardening.conf"
declare -a SSHD_LINES=()
sshd_set() { SSHD_LINES+=("$1 $2"); }

require_root
echo "One Circle Solutions - Linux Server Baseline Hardening v1.0.0"
echo "Mode: $([[ $REPORT_ONLY -eq 1 ]] && echo 'REPORT ONLY (no changes will be made)' || echo APPLY)"

if ! grep -qiE 'debian|ubuntu' /etc/os-release; then
  echo "WARNING: this script targets Debian/Ubuntu. Detected:" >&2
  grep PRETTY_NAME /etc/os-release >&2 || true
  echo "Review each section before applying elsewhere." >&2
fi

# --- 1. SSH daemon ----------------------------------------------------------

section "SSH daemon"
sshd_set PermitRootLogin no
sshd_set MaxAuthTries 4
sshd_set LoginGraceTime 30
sshd_set PermitEmptyPasswords no
sshd_set X11Forwarding no
sshd_set ClientAliveInterval 300
sshd_set ClientAliveCountMax 2

if [[ $REPORT_ONLY -eq 1 ]]; then
  for line in "${SSHD_LINES[@]}"; do would "sshd: $line"; done
else
  mkdir -p /etc/ssh/sshd_config.d
  {
    echo "# One Circle Solutions baseline - $(date -u +%Y-%m-%d)"
    printf '%s\n' "${SSHD_LINES[@]}"
  } > "$SSHD_DROPIN"
  if sshd -t 2>/dev/null; then
    systemctl reload ssh 2>/dev/null || systemctl reload sshd 2>/dev/null
    done_ "sshd hardened via $SSHD_DROPIN (config validated, service reloaded)"
  else
    rm -f "$SSHD_DROPIN"
    fail "sshd config validation failed - drop-in removed, no changes kept"
  fi
fi

# --- 2. Firewall (UFW) ------------------------------------------------------

section "Firewall (UFW)"
apt_install ufw
if [[ $REPORT_ONLY -eq 1 ]]; then
  would "ufw: default deny incoming, allow outgoing, allow OpenSSH, enable"
else
  ufw default deny incoming >/dev/null 2>&1 \
    && ufw default allow outgoing >/dev/null 2>&1 \
    && ufw allow OpenSSH >/dev/null 2>&1 \
    && ufw --force enable >/dev/null 2>&1 \
    && done_ "ufw enabled: deny inbound by default, OpenSSH allowed" \
    || fail "ufw configuration"
fi

# --- 3. Kernel and network sysctls -----------------------------------------

section "Kernel and network sysctls"
SYSCTL_FILE="/etc/sysctl.d/90-onecircle-hardening.conf"
read -r -d '' SYSCTLS <<'EOF' || true
# One Circle Solutions baseline
# -- network
net.ipv4.tcp_syncookies = 1
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.rp_filter = 1
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.default.accept_source_route = 0
net.ipv4.icmp_echo_ignore_broadcasts = 1
net.ipv6.conf.all.accept_redirects = 0
net.ipv6.conf.default.accept_redirects = 0
# -- kernel
kernel.kptr_restrict = 2
kernel.dmesg_restrict = 1
kernel.unprivileged_bpf_disabled = 1
fs.protected_hardlinks = 1
fs.protected_symlinks = 1
EOF

if [[ $REPORT_ONLY -eq 1 ]]; then
  would "write $SYSCTL_FILE and apply $(echo "$SYSCTLS" | grep -c '=') sysctls"
else
  echo "$SYSCTLS" > "$SYSCTL_FILE"
  if sysctl -p "$SYSCTL_FILE" >/dev/null 2>&1; then
    done_ "sysctl hardening applied via $SYSCTL_FILE"
  else
    fail "applying sysctls (file written; run 'sysctl -p $SYSCTL_FILE' to see errors)"
  fi
fi

# --- 4. auditd --------------------------------------------------------------

section "Audit daemon"
apt_install auditd
AUDIT_RULES="/etc/audit/rules.d/90-onecircle.rules"
if [[ $REPORT_ONLY -eq 1 ]]; then
  would "install starter audit rules to $AUDIT_RULES"
else
  cat > "$AUDIT_RULES" <<'EOF'
## One Circle Solutions starter audit rules
# identity changes
-w /etc/passwd -p wa -k identity
-w /etc/group -p wa -k identity
-w /etc/shadow -p wa -k identity
-w /etc/sudoers -p wa -k identity
-w /etc/sudoers.d/ -p wa -k identity
# auth configuration
-w /etc/ssh/sshd_config -p wa -k sshd
-w /etc/ssh/sshd_config.d/ -p wa -k sshd
-w /etc/pam.d/ -p wa -k pam
# privilege use
-a always,exit -F arch=b64 -S execve -C uid!=euid -F euid=0 -k privilege_escalation
# scheduled tasks
-w /etc/crontab -p wa -k cron
-w /etc/cron.d/ -p wa -k cron
-w /var/spool/cron/ -p wa -k cron
EOF
  if augenrules --load >/dev/null 2>&1 && systemctl enable --now auditd >/dev/null 2>&1; then
    done_ "auditd enabled with starter rule set"
  else
    fail "loading audit rules"
  fi
fi

# --- 5. Automatic security updates ------------------------------------------

section "Automatic security updates"
apt_install unattended-upgrades
if [[ $REPORT_ONLY -eq 1 ]]; then
  would "enable unattended security upgrades"
else
  cat > /etc/apt/apt.conf.d/20auto-upgrades <<'EOF'
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
EOF
  done_ "unattended security upgrades enabled"
fi

# --- Summary ----------------------------------------------------------------

echo
echo "============================================================"
if [[ $REPORT_ONLY -eq 1 ]]; then
  echo "Report complete. $CHANGES change(s) would be applied."
else
  echo "Hardening complete. $CHANGES change(s) applied, $FAILURES failure(s)."
  echo
  echo "FOLLOW-UPS (manual, once key-based SSH access is verified):"
  echo "  1. Disable SSH password auth:"
  echo "       echo 'PasswordAuthentication no' >> $SSHD_DROPIN && sshd -t && systemctl reload ssh"
  echo "  2. Consider fail2ban for SSH brute-force throttling."
  echo "  3. VERIFY A NEW SSH SESSION WORKS BEFORE LOGGING OUT."
fi
echo "Baseline reference: CIS Distribution Independent Linux (subset)."
echo "Questions or a managed rollout? https://onecs.net"
echo "============================================================"
