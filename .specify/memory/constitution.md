# Portfolio Constitution

## Core Principles

### I. Laziest-That-Works (Ponytail, NON-NEGOTIABLE)
The best code is code never written. Climb the ladder every time and stop at the
first rung that holds: does it need to exist (YAGNI) → already in this codebase →
stdlib → native platform feature → already-installed dependency → one line → only
then minimum new code. No unrequested abstractions, no scaffolding "for later".
Shortest working diff wins — but only after the problem is fully understood.

### II. Spec Before Code (Spec-Kit)
Real features are specced before they are built: `/speckit-specify` → `/speckit-plan`
→ `/speckit-tasks` → `/speckit-implement`. The spec owns `tasks.md`. Trivial fixes
skip this — do not spec a one-liner.

### III. Dependencies Are Visible (Graphify)
Any non-trivial task (>3 steps, multi-file, real dependencies, or spanning sessions)
maintains a live dependency graph in `.graphify/` and surfaces what is unblocked
next at checkpoints. Graphify layers on top of `tasks.md` only for cross-task deps —
never double-track the same list by hand.

### IV. Root Cause, Not Symptom
A bug report names a symptom. Fix it once, in the shared function all callers route
through — a single guard is a smaller diff than a guard in every caller, and it
leaves no sibling caller broken.

### V. Every Non-Trivial Change Leaves One Runnable Check
Branches, loops, parsers, and money/security paths ship exactly one smallest check
that fails if the logic breaks (an assert-based self-check or one `test_*`). No
frameworks or fixtures unless asked. Trivial one-liners need no test.

## Non-Negotiables (never simplified away)
Input validation at trust boundaries, error handling that prevents data loss,
security measures, accessibility basics, and anything the user explicitly requested.
Deliberate corners that cut a real ceiling are marked with a `ponytail:` comment
naming the ceiling and the upgrade path.

## Governance
This constitution supersedes ad-hoc practice. Amendments are committed with a version
bump and a one-line rationale. Versioning is MAJOR.MINOR.PATCH: MAJOR for a
principle removed/redefined, MINOR for a new principle, PATCH for wording.

**Version**: 1.0.0 | **Ratified**: 2026-07-16 | **Last Amended**: 2026-07-16
