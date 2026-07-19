# Incident Response Plan — Template

> **One Circle Solutions** · Version 1.0.0 · License: CC BY 4.0
> Replace every `[bracketed]` field. Delete guidance blockquotes (like this
> one) once filled in. Review this plan quarterly and after every incident.

---

## 1. Purpose & Scope

This plan defines how **[Company]** detects, responds to, and recovers from
information security incidents affecting **[systems / data / facilities in
scope]**.

It applies to: all employees, contractors, and third parties with access to
[Company] systems.

## 2. Definitions & Severity Levels

| Severity | Definition | Examples | Target response |
|----------|------------|----------|-----------------|
| SEV-1 | Confirmed compromise with active business impact | Ransomware executing, confirmed data exfiltration | Immediate, all-hands |
| SEV-2 | Confirmed compromise, impact contained or unclear | Single compromised account, malware on one host | Within [1 hour] |
| SEV-3 | Suspicious activity requiring investigation | Credible phishing report, anomalous sign-in | Within [4 hours] |
| SEV-4 | Policy violation or near miss, no compromise | Blocked malware, lost (encrypted) device | Next business day |

> Adjust targets to what you can actually meet. An honest 4-hour target
> beats a fictional 15-minute one.

## 3. Roles & Contacts

| Role | Name | Backup | Contact (24/7) |
|------|------|--------|----------------|
| Incident Commander | [name] | [name] | [phone / channel] |
| Technical Lead | [name] | [name] | [phone / channel] |
| Communications Lead | [name] | [name] | [phone / channel] |
| Executive Sponsor | [name] | [name] | [phone / channel] |
| Legal Counsel | [name / firm] | — | [phone] |
| Cyber Insurance | [carrier] | Policy #[number] | [hotline] |
| MSSP / IR Retainer | [provider] | — | [hotline] |

**Rules of engagement**
- The Incident Commander directs the response; they may be outranked in the
  org chart but not in the incident.
- One person speaks for the incident externally: the Communications Lead.
- Nobody communicates with an attacker, pays, or negotiates without Legal
  and the Executive Sponsor.

## 4. Response Phases

### 4.1 Detect & Triage
- [ ] Record: time detected, source of detection, initial observations
- [ ] Assign severity (Section 2) — re-assess as facts change
- [ ] Open an incident channel: **[#incident-YYYYMMDD convention]**
- [ ] Start the incident log (Appendix A) — every action, timestamped

### 4.2 Contain
- [ ] Isolate affected hosts (EDR isolation / network quarantine — do NOT
      power off unless instructed; memory is evidence)
- [ ] Disable or reset compromised identities; revoke active sessions
- [ ] Block attacker infrastructure (IPs, domains) at boundary controls
- [ ] Preserve evidence before altering systems: disk/memory images,
      relevant logs, screenshots

### 4.3 Eradicate & Recover
- [ ] Identify and close the initial access vector
- [ ] Remove persistence (accounts, scheduled tasks, services, tokens)
- [ ] Rebuild or restore affected systems from known-good sources
- [ ] Rotate credentials and secrets that were, or may have been, exposed
- [ ] Heightened monitoring on recovered systems for [14] days

### 4.4 Notify

> Complete this table with counsel BEFORE an incident. Notification clocks
> (e.g., 72 hours) often start at "awareness," not at "investigation done."

| Obligation | Trigger | Deadline | Owner |
|------------|---------|----------|-------|
| Cyber insurance carrier | Any SEV-1/SEV-2 | [per policy] | [role] |
| [Regulator, e.g., state AG / HHS / etc.] | [data types affected] | [deadline] | Legal |
| Affected customers / partners | [contractual triggers] | [per contract] | Comms Lead |
| Law enforcement | [criteria] | discretionary | Legal |

### 4.5 Post-Incident
- [ ] Blameless review within [5] business days (Appendix B)
- [ ] Root cause and contributing factors documented
- [ ] Hardening actions with owners and due dates
- [ ] Update this plan and detection content with lessons learned

## 5. Communication Templates

**Internal holding statement**
> We are investigating a security event affecting [system]. [System] should
> not be used until further notice. Updates in [channel] every [cadence].
> Do not discuss outside this channel.

**Customer notification skeleton** *(review with counsel)*
> On [date] we identified [summary]. We took immediate steps including
> [containment actions]. Based on our investigation, [impact statement].
> We are [current status] and will provide updates by [date/cadence].

## Appendix A — Incident Log Format

| Time (UTC) | Who | Action / Observation | Evidence ref |
|------------|-----|----------------------|--------------|
| | | | |

## Appendix B — Post-Incident Review Agenda

1. Timeline walkthrough (facts only, no blame)
2. What went well / what was luck
3. Root cause and contributing factors
4. Detection gaps: what should have fired and didn't
5. Action items: owner, due date, verification method

---

*Template by One Circle Solutions — managed detection & response,
incident readiness, and vCISO services. https://onecs.net*
