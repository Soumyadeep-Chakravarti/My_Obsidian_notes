
┌────────────────────────────┐
│     Component System        │
│ ┌────────────────────────┐ │
│ │ Virtual Components      │ │ ← layout + logic
│ │ Reconciliation Engine   │ │ ← DOM diffing (future)
│ └────────────────────────┘ │
└────────────┬───────────────┘
             │
             ▼
┌────────────────────────────┐
│    Rendering Layer          │
│ ┌────────────────────────┐ │
│ │ Terminal Output (ANSI)  │ │ ← cursor, text, color
│ │ Offscreen Buffer        │ │ ← for flickerless draw
│ └────────────────────────┘ │
└────────────┬───────────────┘
             │
             ▼
┌────────────────────────────┐
│     State Management        │
│ ┌────────────────────────┐ │
│ │ Global Framework State │ │
│ │ Component Local State   │ │
│ └────────────────────────┘ │
└────────────┬───────────────┘
             │
             ▼
┌────────────────────────────┐
│     Hot Reloading System    │
│ ┌────────────────────────┐ │
│ │ Watcher / Rebuilder     │ │ ← monitors code changes
│ │ Dynamic Loader (dlopen) │ │ ← loads new .so modules
│ │ State Preserver         │ │ ← keeps user/framework state
│ └────────────────────────┘ │
└────────────┬───────────────┘
             │
             ▼
┌────────────────────────────┐
│      Examples / Demos       │
│ ┌────────────────────────┐ │
│ │ hello_tui, ...         │ │ ← showcase usage
│ └────────────────────────┘ │
└────────────────────────────┘
<p style="text-align:center;">My centered text</p>
<p style="text-align:center;">DOM diffing (future)</p>
