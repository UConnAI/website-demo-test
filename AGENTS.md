# Agent Guidelines for Canvas Template

Welcome, Agent. This repository has **Matt Pocock's Engineering Skills** installed under [`.agents/skills/`](.agents/skills/). You MUST adhere to these flows when assisting users or modifying this codebase.

---

## The Mandatory Engineering Flow: Idea → Ship

All feature work and scaffolding in this repository follows the **Main Flow**:

1. **Sharpen the idea with `/grill-with-docs`**:
   - Always start here before making substantial code modifications.
   - Run the interview loop to uncover hidden requirements and constraints.
   - Maintain the ubiquitous language in [`CONTEXT.md`](CONTEXT.md) and record hard-to-reverse architectural decisions as ADRs in [`docs/adr/`](docs/adr/).

2. **Need an exploratory answer? `/prototype`**:
   - If a layout, state interaction, or design decision requires a visual check before committing to the main spec, detour through `/prototype`.
   - Keep prototype work isolated and throwaway.

3. **Breakdown & Execution**:
   - For multi-step builds: Run **`/to-spec`** to formalize the discussion, then **`/to-tickets`** to produce tracer-bullet tasks with explicit blocking edges.
   - For implementation: Run **`/implement`**, driving **`/tdd`** (test-first red/green slices where applicable) and closing out with **`/code-review`** (standards + spec review).

---

## On-Ramps & Upkeep

- **Bugs or regressions**: Do NOT guess or theory-craft. Run **`/diagnosing-bugs`** to lock down a tight, reproducible feedback loop before fixing.
- **Triage queue**: Incoming issues and feature requests run through **`/triage`** using the canonical label vocabulary.
- **Lost or unsure?**: Invoke **`/ask-matt`** as the universal router to determine which skill or flow fits the current task.

---

## Agent Skills Configuration

### Issue tracker
GitHub Issues via `gh` CLI. See [`docs/agents/issue-tracker.md`](docs/agents/issue-tracker.md).

### Triage labels
Canonical five-role triage vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See [`docs/agents/triage-labels.md`](docs/agents/triage-labels.md).

### Domain docs
Single-context repository layout. All agents must read and honor [`CONTEXT.md`](CONTEXT.md) and [`docs/adr/`](docs/adr/). See [`docs/agents/domain.md`](docs/agents/domain.md).
