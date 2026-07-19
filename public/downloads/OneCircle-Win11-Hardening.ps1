<#
.SYNOPSIS
    One Circle Solutions - Windows 11 Baseline Hardening Script

.DESCRIPTION
    Applies a conservative security baseline to a standalone Windows 11
    workstation: UAC, SmartScreen, SMB, LSA, RDP, Defender ASR rules,
    PowerShell logging, audit policy, and account policy hardening.

    Designed for machines NOT managed by Group Policy / Intune. If your
    fleet is centrally managed, implement these controls in your
    management plane instead so they don't drift.

.PARAMETER ReportOnly
    Audit mode. Shows what would change without modifying anything.

.PARAMETER DisablePrintSpooler
    Also disables the Print Spooler service (recommended on machines
    that never print; mitigates spooler-based privilege escalation).

.NOTES
    Version : 1.0.0
    Author  : One Circle Solutions (https://onecs.net)
    License : MIT. Provided as-is, without warranty. TEST BEFORE USE.

    - Run from an elevated PowerShell session.
    - A system restore point is created before changes are applied.
    - Some settings take effect after a reboot.
    - Review every section; your environment may need exceptions.

.EXAMPLE
    .\OneCircle-Win11-Hardening.ps1 -ReportOnly
    .\OneCircle-Win11-Hardening.ps1
    .\OneCircle-Win11-Hardening.ps1 -DisablePrintSpooler
#>

[CmdletBinding()]
param(
    [switch]$ReportOnly,
    [switch]$DisablePrintSpooler
)

$ErrorActionPreference = "Continue"
$script:Changes = @()
$script:Failures = @()

# --- Helpers ---------------------------------------------------------------

function Assert-Admin {
    $identity = [Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()
    if (-not $identity.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
        Write-Error "This script must be run from an elevated (Administrator) PowerShell session."
        exit 1
    }
}

function Set-RegValue {
    param(
        [string]$Path,
        [string]$Name,
        $Value,
        [string]$Type = "DWord",
        [string]$Reason
    )
    $current = $null
    if (Test-Path $Path) {
        $current = (Get-ItemProperty -Path $Path -Name $Name -ErrorAction SilentlyContinue).$Name
    }
    if ("$current" -eq "$Value") {
        Write-Host "  [OK]      $Reason" -ForegroundColor DarkGray
        return
    }
    if ($ReportOnly) {
        Write-Host "  [WOULD]   $Reason  ($Name : '$current' -> '$Value')" -ForegroundColor Yellow
        $script:Changes += $Reason
        return
    }
    try {
        if (-not (Test-Path $Path)) { New-Item -Path $Path -Force | Out-Null }
        New-ItemProperty -Path $Path -Name $Name -Value $Value -PropertyType $Type -Force | Out-Null
        Write-Host "  [SET]     $Reason" -ForegroundColor Green
        $script:Changes += $Reason
    } catch {
        Write-Host "  [FAILED]  $Reason : $_" -ForegroundColor Red
        $script:Failures += $Reason
    }
}

function Invoke-Step {
    param([string]$Reason, [scriptblock]$Action)
    if ($ReportOnly) {
        Write-Host "  [WOULD]   $Reason" -ForegroundColor Yellow
        $script:Changes += $Reason
        return
    }
    try {
        & $Action
        Write-Host "  [DONE]    $Reason" -ForegroundColor Green
        $script:Changes += $Reason
    } catch {
        Write-Host "  [FAILED]  $Reason : $_" -ForegroundColor Red
        $script:Failures += $Reason
    }
}

function Write-Section { param([string]$Title)
    Write-Host "`n== $Title ==" -ForegroundColor Cyan
}

# --- Preflight -------------------------------------------------------------

Assert-Admin
Write-Host "One Circle Solutions - Windows 11 Baseline Hardening v1.0.0"
Write-Host ("Mode: " + $(if ($ReportOnly) { "REPORT ONLY (no changes will be made)" } else { "APPLY" }))

if (-not $ReportOnly) {
    Write-Section "Restore point"
    try {
        Enable-ComputerRestore -Drive "$env:SystemDrive\" -ErrorAction SilentlyContinue
        Checkpoint-Computer -Description "Pre OneCircle hardening" -RestorePointType MODIFY_SETTINGS
        Write-Host "  [DONE]    Created system restore point" -ForegroundColor Green
    } catch {
        Write-Host "  [WARN]    Could not create restore point: $_" -ForegroundColor Yellow
        Write-Host "            Continue only if you have another rollback path." -ForegroundColor Yellow
    }
}

# --- 1. User Account Control ----------------------------------------------

Write-Section "User Account Control"
$uac = "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System"
Set-RegValue $uac "EnableLUA" 1 -Reason "UAC enabled"
Set-RegValue $uac "ConsentPromptBehaviorAdmin" 2 -Reason "UAC prompts on the secure desktop for admins"
Set-RegValue $uac "PromptOnSecureDesktop" 1 -Reason "UAC uses secure desktop"
Set-RegValue $uac "InactivityTimeoutSecs" 900 -Reason "Machine locks after 15 minutes of inactivity"

# --- 2. SmartScreen --------------------------------------------------------

Write-Section "SmartScreen"
Set-RegValue "HKLM:\SOFTWARE\Policies\Microsoft\Windows\System" "EnableSmartScreen" 1 -Reason "SmartScreen enabled for apps and files"
Set-RegValue "HKLM:\SOFTWARE\Policies\Microsoft\Windows\System" "ShellSmartScreenLevel" "Block" -Type String -Reason "SmartScreen set to block unrecognized apps"

# --- 3. SMB / legacy name resolution ---------------------------------------

Write-Section "SMB and legacy protocols"
Invoke-Step "SMBv1 removed" {
    Disable-WindowsOptionalFeature -Online -FeatureName "SMB1Protocol" -NoRestart -ErrorAction Stop | Out-Null
}
Set-RegValue "HKLM:\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters" "RequireSecuritySignature" 1 -Reason "SMB server signing required"
Set-RegValue "HKLM:\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters" "RequireSecuritySignature" 1 -Reason "SMB client signing required"
Set-RegValue "HKLM:\SOFTWARE\Policies\Microsoft\Windows NT\DNSClient" "EnableMulticast" 0 -Reason "LLMNR disabled"
Invoke-Step "NetBIOS over TCP/IP disabled on all interfaces" {
    Get-ChildItem "HKLM:\SYSTEM\CurrentControlSet\Services\NetBT\Parameters\Interfaces" |
        ForEach-Object { Set-ItemProperty -Path $_.PSPath -Name "NetbiosOptions" -Value 2 }
}

# --- 4. Credential protection ----------------------------------------------

Write-Section "Credential protection (LSA)"
$lsa = "HKLM:\SYSTEM\CurrentControlSet\Control\Lsa"
Set-RegValue $lsa "RunAsPPL" 1 -Reason "LSA runs as a protected process (RunAsPPL)"
Set-RegValue $lsa "RestrictAnonymous" 1 -Reason "Anonymous enumeration restricted"
Set-RegValue $lsa "LimitBlankPasswordUse" 1 -Reason "Blank passwords limited to console logon"
Set-RegValue $lsa "NoLMHash" 1 -Reason "LM hash storage disabled"
Set-RegValue $lsa "LmCompatibilityLevel" 5 -Reason "NTLMv2 only; LM and NTLMv1 refused"
Set-RegValue "HKLM:\SYSTEM\CurrentControlSet\Control\SecurityProviders\WDigest" "UseLogonCredential" 0 -Reason "WDigest plaintext credential caching disabled"

# --- 5. Autorun / removable media ------------------------------------------

Write-Section "Autorun"
$explorer = "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Explorer"
Set-RegValue $explorer "NoDriveTypeAutoRun" 255 -Reason "Autorun disabled for all drive types"
Set-RegValue $explorer "NoAutorun" 1 -Reason "Autorun commands ignored"

# --- 6. Remote Desktop ------------------------------------------------------

Write-Section "Remote Desktop"
$rdp = "HKLM:\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp"
Set-RegValue $rdp "UserAuthentication" 1 -Reason "RDP requires Network Level Authentication"
Set-RegValue $rdp "SecurityLayer" 2 -Reason "RDP uses TLS security layer"

# --- 7. Windows Firewall ----------------------------------------------------

Write-Section "Windows Firewall"
Invoke-Step "Firewall enabled on all profiles, inbound blocked by default" {
    Set-NetFirewallProfile -Profile Domain,Private,Public -Enabled True `
        -DefaultInboundAction Block -DefaultOutboundAction Allow -ErrorAction Stop
}

# --- 8. Microsoft Defender --------------------------------------------------

Write-Section "Microsoft Defender"
Invoke-Step "Cloud protection, PUA blocking, and network protection enabled" {
    Set-MpPreference -MAPSReporting Advanced `
                     -SubmitSamplesConsent SendSafeSamples `
                     -PUAProtection Enabled `
                     -EnableNetworkProtection Enabled -ErrorAction Stop
}

# Attack Surface Reduction rules (block mode). Review before deploying to
# machines with heavy Office macro / developer tooling use.
$asrRules = @{
    "D4F940AB-401B-4EFC-AADC-AD5F3C50688A" = "Block Office apps from creating child processes"
    "9E6C4E1F-7D60-472F-BA1A-A39EF669E4B2" = "Block credential stealing from LSASS"
    "5BEB7EFE-FD9A-4556-801D-275E5FFC04CC" = "Block execution of potentially obfuscated scripts"
    "92E97FA1-2EDF-4476-BDD6-9DD0B4DDDC7B" = "Block Win32 API calls from Office macros"
    "B2B3F03D-6A65-4F7B-A9C7-1C7EF74A9BA4" = "Block untrusted processes from USB"
    "E6DB77E5-3DF2-4CF1-B95A-636979351E5B" = "Block persistence through WMI event subscription"
}
foreach ($rule in $asrRules.GetEnumerator()) {
    Invoke-Step "ASR: $($rule.Value)" {
        Add-MpPreference -AttackSurfaceReductionRules_Ids $rule.Key `
                         -AttackSurfaceReductionRules_Actions Enabled -ErrorAction Stop
    }
}

# --- 9. PowerShell logging --------------------------------------------------

Write-Section "PowerShell logging"
Set-RegValue "HKLM:\SOFTWARE\Policies\Microsoft\Windows\PowerShell\ScriptBlockLogging" `
    "EnableScriptBlockLogging" 1 -Reason "PowerShell script block logging enabled"
Set-RegValue "HKLM:\SOFTWARE\Policies\Microsoft\Windows\PowerShell\ModuleLogging" `
    "EnableModuleLogging" 1 -Reason "PowerShell module logging enabled"

# --- 10. Audit policy -------------------------------------------------------

Write-Section "Audit policy"
$auditCategories = @(
    "Logon", "Logoff", "Account Lockout", "Special Logon",
    "Security Group Management", "User Account Management",
    "Process Creation", "Audit Policy Change"
)
foreach ($cat in $auditCategories) {
    Invoke-Step "Audit '$cat' (success and failure)" {
        $out = auditpol /set /subcategory:"$cat" /success:enable /failure:enable 2>&1
        if ($LASTEXITCODE -ne 0) { throw ($out | Out-String) }
    }
}
# Include command line in process creation events (pairs with 4688 auditing)
Set-RegValue "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System\Audit" `
    "ProcessCreationIncludeCmdLine_Enabled" 1 -Reason "Command line captured in process creation events"

# --- 11. Account policy -----------------------------------------------------

Write-Section "Account policy"
Invoke-Step "Lockout: 10 attempts / 15 min; minimum password length 14" {
    $out = net accounts /lockoutthreshold:10 /lockoutduration:15 /lockoutwindow:15 /minpwlen:14 2>&1
    if ($LASTEXITCODE -ne 0) { throw ($out | Out-String) }
}
Invoke-Step "Built-in Guest account disabled" {
    $out = net user guest /active:no 2>&1
    if ($LASTEXITCODE -ne 0) { throw ($out | Out-String) }
}

# --- 12. Optional: Print Spooler -------------------------------------------

if ($DisablePrintSpooler) {
    Write-Section "Print Spooler (optional)"
    Invoke-Step "Print Spooler service stopped and disabled" {
        Stop-Service -Name Spooler -Force -ErrorAction Stop
        Set-Service -Name Spooler -StartupType Disabled -ErrorAction Stop
    }
}

# --- Summary ----------------------------------------------------------------

Write-Host ""
Write-Host "============================================================"
if ($ReportOnly) {
    Write-Host ("Report complete. {0} change(s) would be applied." -f $script:Changes.Count)
} else {
    Write-Host ("Hardening complete. {0} change(s) applied, {1} failure(s)." -f $script:Changes.Count, $script:Failures.Count)
    if ($script:Failures.Count -gt 0) {
        Write-Host "Failed items:" -ForegroundColor Red
        $script:Failures | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
    }
    Write-Host "A reboot is recommended for all settings to take effect."
}
Write-Host "Baseline reference: CIS Microsoft Windows 11 Benchmark (subset)."
Write-Host "Questions or a managed rollout? https://onecs.net"
Write-Host "============================================================"
