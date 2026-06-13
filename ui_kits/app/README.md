# Fabric — Workspace (App UI kit)

A calm daily workspace for focused work: lists, a quiet task surface, and a focus timer. The flagship Fabric product. Recreated to demonstrate the design system in a real product context.

## Run
Open `index.html`. It boots on the **login** screen ("Enter your studio") and lands on the **Today** view. Try:
- Switch lists/views in the sidebar (Today / Later / Done, and the colored Lists).
- Add a task with the composer; check tasks off (they soften and strike).
- Filter with the pill tabs (All / Active / Done).
- Start the **focus timer** in the right rail.

State (current screen) persists to `localStorage` under `fabric.*`.

## Files
- `index.html` — shell layout CSS + script loader + mount.
- `icons.jsx` — inline-SVG Lucide `<Icon>` helper (`window.Icon`).
- `data.jsx` — seed lists + tasks (`window.FabricApp`).
- `Sidebar.jsx` — brand, nav, lists, profile.
- `TaskList.jsx` — `TaskRow` + `Composer`.
- `FocusRail.jsx` — focus timer + intention card.
- `Login.jsx` — calm entry screen.
- `App.jsx` — shell + state machine.

## Composition
Built from the Fabric primitives via `window.FabricDesignSystem_7bb975`: `Avatar`, `Button`, `IconButton`, `Checkbox`, `Tag`, `Card`, `Tabs`, `Divider`, `Tooltip`. Layout-specific `.fa-*` classes live in `index.html`; everything visual references the design tokens.
