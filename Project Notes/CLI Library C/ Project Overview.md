---
sticker: emoji//1f9e0
color: "Red"
tags:
  - CLI-Library-C
  - Index
  - ProjectNotes
abbr:
  - "UI : User Interface"
  - "UIs : User Interfaces"
  - "CLI : Command Line Interface"
  - "TUI : Terminal User Interface"
---

## 📌 Project Overview: TUI Framework

### 🎯 Goal

To create a modern, modular **Terminal User Interface (TUI) Framework** in C (optionally C++) that brings the flexibility and developer experience of web frameworks like **React**, **Next.js**, and **Vite** to the terminal world — including features like:
- Virtual DOM for efficient rendering
- Hot reloading of modules and UI
- Component-based architecture
- State management and animations
- Developer-friendly tooling
### 🧱 Vision

> "Build rich terminal apps with the ease and joy of web frameworks, while staying close to the metal."

This framework is meant to become the backbone for tools like:
- Terminal dashboards
- Shell UIs (like `btop`, `htop`)
- Developer tools
- Interactive CLI apps
- Embedded debugging consoles
### 🔧 Architecture Overview
The TUI framework is built in a **layered architecture** to separate concerns and promote modular design. Each layer builds on the services of the one below it:

#### 1. **Application Entry Point**

This is where users define their app logic — typically by implementing a `main()` function and a `render()` function. It uses the framework's API to register components, handle input, and trigger re-renders.

#### 2. **Core Runtime Layer**

Handles:

- The main loop (timing and frame rate)
    
- Event dispatching (e.g., keyboard input)
    
- Initialization and graceful shutdown
    
- Integration with `libtui` core components
    

This is the "engine room" of the framework.

#### 3. **Component Engine**

(Coming soon — Virtual DOM layer)

Manages:

- Component hierarchy (parent/child UI blocks)
    
- Mount/unmount lifecycle hooks
    
- Prop/state passing
    
- Reconciliation via diffing a virtual DOM tree
    

This mirrors React's behavior in a terminal environment.

#### 4. **Rendering Backend**

Responsible for:

- Low-level terminal drawing (using ANSI escape codes)
    
- Layout (rows, columns, spacing)
    
- Styling (colors, bold, underline, etc.)
    
- Buffering and batched rendering
    

This abstracts the terminal details away from the component logic.

#### 5. **State Management**

Provides:

- Local and global state stores
    
- Hook-like APIs (e.g., `use_state`, `use_effect`)
    
- Optional context passing (tree-level state sharing)
    

State is persistent across hot reloads.

#### 6. **Hot Reloading System**

Supports:

- `dlopen`/`dlsym`-based reloading of `.so` modules
    
- File watchers (in dev mode) to auto-reload on change
    
- Seamless context/state retention between reloads
    

This enables fast iteration during development.

#### 7. **Plugins & Dev Examples**

- Located in `plugins/` and `examples/`
    
- Used for internal debugging tools, demos, testing features
    
- Separate from the core, dynamically loadable
### 📦 Key Modules

|Module|Purpose|
|---|---|
|`core/`|Framework lifecycle, loop control, CLI init, exit, and timing|
|`render/`|Rendering backend (screen, windowing, layout, VDOM diffing)|
|`state/`|Global/local component state manager, context|
|`plugins/`|Hot-reloadable modules (e.g., dev tools, demos, UI extensions)|
|`examples/`|Real-world usage demos (e.g., counters, dashboards)|

---

### 🚀 Milestone Road map

|Milestone|Goal|
|---|---|
|✅ Base framework|Screen handling, render loop, core setup|
|⏳ Hot Reloading|Compile-on-change `.so` reloading with state persistence|
|⏳ Virtual DOM Engine|Tree diffing, patching, efficient re-rendering|
|⏳ Component System|Encapsulated UI blocks with props/state|
|⏳ Dev Tooling|Logging, debug panels, interactive reload toggle|
|⏳ Animation API|Interpolation, easing, tick-based transition system|

---

### 👤 Target Developer Experience

- Drop in a `.c` file, define a `render()` and you're live
    
- Optional `cli_config.h` or `app_config.toml`
    
- Use hooks like `use_state()`, `use_effect()` (mirroring React)
    
- CLI flag to start in "dev mode" with auto-reload