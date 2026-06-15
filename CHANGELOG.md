# Changelog

All notable changes to the Fabric design system are recorded here.
The format follows [Keep a Changelog](https://keepachangelog.com/); this project
uses loose [semantic versioning](https://semver.org/) while pre-1.0.

## [0.6.1] — 2026-06-14
### Changed
- **Catalog works without a local server.** `index.html` now carries an embedded
  snapshot of the manifest, so double-clicking the file renders every tile
  straight off disk — no terminal needed. When served over HTTP it still fetches
  the live `_ds_manifest.json` and auto-syncs; the embedded copy is the fallback.
  Added an honest `file://` note explaining the Theme/Season toggles can’t reach
  into previews when opened directly (each tile follows the OS appearance there).
### Added
- **One-click sharing via GitHub Pages.** Ships `.github/workflows/pages.yml`
  (push-to-`main` deploy) plus setup steps in the catalog’s “How to use” panel
  and the README, so reviewers can open the catalog at a URL — no clone, no
  terminal.

## [0.6.0] — 2026-06-14
### Added
- **Visual catalog** (`index.html` at the repo root) — a single, self-contained
  browse page so anyone who clones the repo can review the system the way the
  design tooling shows it, no special environment needed. It reads
  `_ds_manifest.json` at runtime (so it stays in sync on every rebuild) and
  renders every foundation card, component, UI kit and template as a live,
  auto-scaled `<iframe>` tile, grouped (Type · Colors · Spacing · Components ·
  Brand · Finance · App · Website · Templates). Header **Theme** (Auto / Light /
  Nightfall) and **Season** toggles propagate into every preview at once;
  each tile has an **Open** link to the full file. Includes a built-in
  "How to use" panel (clone → serve locally → browse → adopt) and a friendly
  `file://` banner telling reviewers to serve over HTTP. Built entirely from
  Fabric's own tokens — the catalog dogfoods the system.

## [0.5.0] — 2026-06-14
### Added
- **Finance extension** (`tokens/finance.css`) — an opt-in layer for financial
  apps. Introduces a **directional color axis** (`--fin-gain` / `--fin-loss` /
  `--fin-flat` + soft + on-soft pairs) kept deliberately SEPARATE from the
  evaluative status axis, so a losing position never borrows `--danger`. Gain
  is sage-lineage lifted off `--success`; loss is a warm clay-red, calmer than
  `--danger`, so "negative" reads distinct from "error". Chroma nudged a hair
  above status greens/reds for at-a-glance scanning; adapts to Nightfall and the
  light/dark toggles.
- **Accounting figure utilities** — `.fabric-figure` / `.fabric-figure-sans`
  (tabular + lining numerals in the IBM Plex Mono data voice), `.fabric-num-col`
  (right-aligned numeric columns), `.fabric-figure-slashed`, `.fabric-total-row`
  (single rule above / double under grand totals), and directional helpers
  (`.fin-gain/-loss/-flat`, `[data-fin]`, `.fin-pill`).
- House conventions: US/EU green-up, **signed** negatives, color + glyph as
  redundant reinforcement (never the only channel).
- **Finance — directional axis** specimen card in the Colors group.
- **Invest — portfolio** template (`templates/portfolio`) — a worked
  consumer-fintech dashboard on the finance extension: balance hero with a
  signed day-change pill, a gain/loss sparkline, a holdings table (signed
  tabular figures, directional color, allocation bars), accounts, and an
  activity feed that intentionally withholds directional color from cash flow
  (a buy is neutral, not a loss). Nightfall toggle included.
- **Account statement** template (`templates/statement`) — the typography
  counterpart: an accounting-grade monthly statement. Columnar money-out /
  money-in (direction by column, so the ledger stays neutral ink), a
  data-driven running balance, a totals row under a single rule and a closing
  balance under a double rule (`--fin-rule-strong`), and one genuine directional
  figure — the signed net. Filterable, with a Nightfall toggle.
- **Transaction detail** template (`templates/transaction`) — a single-purchase
  receipt that proves the two axes coexist: the **evaluative** status badge
  (Completed → success) sits beside the **directional** amount (a debit → loss)
  without collision. Merchant hero, payment metadata, and a fee breakdown
  (subtotal / tax / shipping) totalled under a single rule. Nightfall toggle.
- **Finance conventions** written guideline (`guidelines/finance-conventions.html`)
  — a long-form doc folding the whole finance layer into one place: the two-axis
  principle (directional vs evaluative), the `--fin-*` token reference, accounting
  figure rules (tabular/lining, signed, never Newsreader), ledger conventions
  (direction by column, total rules), and a do/don't. Pure HTML on the finance
  utilities — self-demonstrating, printable. Shows in the Design System tab under
  a new **Finance** group, alongside the directional-axis specimen card.
- **shadcn/ui adapter** (`adapters/shadcn/`) — a token bridge for adopting Fabric
  in apps already on shadcn/ui + Tailwind without rewriting components. Maps
  shadcn's CSS-variable contract onto Fabric's semantic tokens: `fabric-shadcn.css`
  (Tailwind v4 / raw-var, with `.dark` + `data-theme` paths), `fabric-shadcn-hsl.css`
  (Tailwind v3, Fabric's OKLCH palette pre-converted to HSL triplets),
  `tailwind.fabric.js` (fonts / radii / warm shadows / `text-fin-*` finance colors),
  a `README.md` decision guide, and a `demo.html` proving stock shadcn markup
  renders in Fabric's voice (incl. Nightfall) through the bridge alone.

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

[0.6.1]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.6.1
[0.6.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.6.0
[0.5.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.5.0
[0.4.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.4.0
[0.3.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.3.0
[0.2.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.2.0
[0.1.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.1.0
