# Changelog

All notable changes to the Fabric design system are recorded here.
The format follows [Keep a Changelog](https://keepachangelog.com/); this project
uses loose [semantic versioning](https://semver.org/) while pre-1.0.

## [0.4.0] — 2026-06-13
### Added
- **Canvas whisper.** New `--season-canvas` token — the page canvas with a ~5–6%
  breath of the active season's accent mixed in (warm in autumn, cool in winter,
  fresh in spring, golden in summer). Derived with `color-mix`, so it adapts to
  Nightfall automatically. Wired into the app workspace canvas + login, with a
  slow cross-fade on season change.

## [0.3.0] — 2026-06-13
### Added
- **Seasons layer** (`tokens/seasons.css`) — an axis orthogonal to light/dark.
  `data-season="spring|summer|autumn|winter"` rotates a seasonal accent
  (`--season-accent` / `--season-accent-soft` / `--season-on-soft`) and a
  signature texture, composing with Nightfall via `color-mix`.
- **New textures** `.fabric-felt` (dense matte wool) and `.fabric-frost`
  (crystalline crosshatch), the signature materials for autumn and winter.
- **Live season switcher** in the app workspace sidebar (sprout / sun / leaf /
  snowflake), each self-tinted to its season; persists to `localStorage`.
- **Seasons** specimen card in the Brand group.

## [0.2.0] — 2026-06-13
### Added
- **Nightfall dark theme** (`tokens/dark.css`) — warm dark-earth surfaces,
  moonlight-on-linen ink, luminous moonlit-moss primary. Auto via
  `prefers-color-scheme`, forceable with `data-theme`. Only the semantic token
  layer changes, so all components flip for free.
- **Texture system** (`tokens/textures.css`) — theme-aware, gradient-built
  utilities: `.fabric-weave`, `.fabric-linen`, `.fabric-grain`, `.fabric-ribbed`,
  `.fabric-stitch`, keyed to the flipping `--texture-ink` token.
- **Theme switcher** (sun/moon) in the app workspace.
- **Nightfall** and **Texture** specimen cards.

## [0.1.0] — 2026-06-13
### Added
- **Foundations.** `styles.css` entry + token files: `colors.css` (OKLCH scales
  stone/sage/terracotta/ochre/marsh/rust + semantic aliases), `typography.css`
  (Newsreader / Hanken Grotesk / IBM Plex Mono, scale, weights), `spacing.css`
  (grid, radii, borders, shadows, motion), `fonts.css`, `base.css`.
- **15 components** across `forms/`, `feedback/`, `layout/`, `navigation/` —
  Button, IconButton, Input, Textarea, Select, Checkbox, Switch, Badge, Tag,
  Tooltip, Toast, Card, Avatar, Divider, Tabs. Each with `.d.ts`, `.prompt.md`,
  and a specimen card.
- **Two UI kits** — `ui_kits/app` (calm workspace: login, today/later/done,
  lists, focus timer) and `ui_kits/site` (marketing landing page).
- **Fabric page template** (`templates/page`).
- **Foundation specimen cards** for the Design System tab (Type, Colors,
  Spacing, Brand) and the bespoke leaf brand mark.
- `SKILL.md` Agent-Skill manifest.

[0.4.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.4.0
[0.3.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.3.0
[0.2.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.2.0
[0.1.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.1.0
