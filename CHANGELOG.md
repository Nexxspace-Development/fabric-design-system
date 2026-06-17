# Changelog

All notable changes to the Fabric design system are recorded here.
The format follows [Keep a Changelog](https://keepachangelog.com/); this project
uses loose [semantic versioning](https://semver.org/) while pre-1.0.

## [0.8.3] — 2026-06-16
### Changed
- **Fluid type scale** (`tokens/typography.css`) — all `--text-*` tokens
  replaced with `clamp(min, intercept + slope·vw, max)` values. Body text
  shifts ~2 px between 360–1440 vw; display sizes shift up to 36 px, so
  `--text-5xl` is 40 px on mobile and 76 px on desktop with no overflow.
  Min values (capped at 360 vw) and max values (capped at 1440 vw) are
  unchanged from the old fixed scale — consumers pinning to the max already
  see identical output on wide viewports.
- **Variable webfonts** (`tokens/fonts.css`) — Hanken Grotesk and IBM Plex
  Mono switched from discrete weight lists (`400;500;600;700` / `400;500`)
  to full variable-axis ranges (`ital,wght 100..900` / `ital,wght 100..700`).
  Newsreader's weight range widened to `100..900` (both axes). One URL loads
  the entire weight continuum; intermediate values like `font-weight: 350`
  or `font-weight: 450` now render correctly without browser faux-synthesis.

## [0.8.2] — 2026-06-15
### Added
- **"Daybreak" — official name for the light theme.** The API attribute value
  `data-theme="light"` is unchanged (CSS/consumer contract intact). Daybreak is
  the display name used everywhere a human reads it: UI labels, docs, comments,
  SKILL.md, badges. Pairs intentionally with Nightfall — both atmospheric
  conditions, neither a clock time.
### Changed
- `index.html` catalog: "Light" button label → "Daybreak".
- `ui_kits/app/App.jsx`: theme-toggle tooltip "Daylight" → "Daybreak" (also
  corrects a pre-existing typo).
- `adapters/shadcn/demo.html`: toggle label updated.
- `tokens/dark.css`, `tokens/colors.css`, `tokens/finance.css`,
  `tokens/seasons.css`: inline comments updated to "Daybreak".
- `README.md`: badge, catalog description, Seasons paragraph, dark-theme
  section, `dark.css` / `seasons.css` bullets all updated.
- `SKILL.md`: dark theme orientation line updated.

## [0.8.1] — 2026-06-15
### Changed
- **`adapters/shadcn/fabric-shadcn.css`** — `.dark` block re-points `--primary`
  and `--ring` from `--sage-400` to `--brand-400`/`--brand-400` so Nightfall
  follows a brand rebrand; `--chart-1` updated to `--brand-500` (primary-only,
  charts 2–5 stay earthen). Header comment updated to document the brand strategy.
- **`adapters/shadcn/tailwind.fabric.js`** — adds the full `brand-50…900`
  color scale as Tailwind utilities (`bg-brand-600`, `text-brand-200` etc.) and
  Fabric's named motion personalities as `transitionDuration` /
  `transitionTimingFunction` extensions (`duration-base`, `ease-settle`,
  `ease-flutter`, `ease-press`, `ease-drift`). v4 `@theme` block updated to match.
- **`adapters/shadcn/README.md`** — new **Brand theming** section documenting
  `--brand-h`, `--brand-c`, `data-brand` presets and the primary-only strategy;
  new **Motion** section documenting the material easing personalities and
  duration tokens with Tailwind utility examples; new **Brand × Tailwind
  utilities** section; HSL-bridge freeze warning added; map table updated to
  reflect brand-following primary and ring.

## [0.8.0] — 2026-06-15
### Added
- **Brand versatility — primary-hue parameterization** (`tokens/brand.css`).
  Fabric now adapts to any brand primary without hand-authoring a scale. The
  full 50–900 primary ramp is GENERATED from a single hue token `--brand-h`
  over Fabric's fixed lightness ramp and muted chroma, so a rebrand is one line:
  `:root { --brand-h: 274 }`. A `--brand-c` chroma multiplier (1 = sage-muted,
  ~1.6 ceiling) keeps even loud brands from breaking Fabric's recessive
  character. Ships six `data-brand` presets (sage / indigo / ocean / teal /
  plum / crimson), swappable on any subtree like `data-season` / `data-theme`.
- **`guidelines/color-brand.card.html`** — Colors-group specimen showing the
  same ramp regenerated across five preset hues, with the strategy note.
- **`compare/Brand Strategy — Primary-only vs Harmony.html`** — the decision
  artifact: side-by-side of the two strategies under a live hue slider, presets,
  chroma and a Nightfall toggle. Records WHY we chose primary-only.
### Changed
- **Strategy: primary-only.** Re-pointed the `--primary*` aliases and the focus
  ring at the generated `--brand-*` scale across all three scopes — `:root`
  (`tokens/colors.css`) and Nightfall's media-query / `data-theme="dark"` /
  `data-theme="light"` blocks (`tokens/dark.css`). The terracotta / ochre /
  marsh accents and the sage-lineage status colors (success / warning / info)
  deliberately do NOT chase the brand, so semantic meaning (a green "success",
  a warm "urgent") never drifts when the primary changes. Nightfall lifts the
  brand primary for free.

## [0.7.2] — 2026-06-15
### Added
- **`guidelines/motion-components.card.html`** — a new Motion group card that
  shows every upgraded Fabric component side-by-side, live and interactive:
  Button (clay/linen), Toast (settle entrance), Checkbox + Switch (flutter),
  Tooltip (directional settle), Input (focus bloom), Tabs (spring indicator),
  Badge + Tag (season turn), Card (settle lift). Viewport 700×500.
- **`Badge tone="season"`** — a new opt-in tone that uses `--season-accent-soft`
  / `--season-on-soft`; cross-fades automatically when the season turns.
- **`Tag seasonal` prop** — same pattern for Tag; `data-seasonal="true"` picks
  up the season accent tokens.
### Changed
- **`@property` season tokens** in `tokens/seasons.css`: `--season-accent` and
  `--season-canvas` are now registered as typed `<color>` properties. A `:root`
  transition (`480 ms --ease-drift`) means any element using these variables
  — including derived `color-mix()` chains — automatically cross-fades when
  `data-season` changes. No JS animation needed.
- **Select** — focus-ring `box-shadow` now blooms with `--ease-settle` at
  `--duration-base`, matching the Input upgrade from v0.7.1.
- **Catalog (`index.html`)** — removed the JS crossfade overlay; `@property`
  handles the season turn natively and more smoothly.

## [0.7.1] — 2026-06-15
### Changed
- **Checkbox** — checkmark SVG now springs into place with `--ease-flutter`
  (300 ms, scale 0.5 → 1) instead of a flat linear fade — feels like a physical
  snap.
- **IconButton** — bidirectional clay/linen treatment, matching Button: press-down
  uses `--ease-press` (70 ms), release uses `--ease-settle` (320 ms). Scale
  increased from 0.93 → 0.88 for a more grounded feel.
- **Tooltip** — directional settle entrance: each placement has a 5 px offset in
  the hidden state so the tooltip slides in from its anchor (top rises, bottom
  drops, etc.) using `--ease-settle`. Exit snaps away in 90–110 ms so it never
  lingers.
- **Input** — focus-ring `box-shadow` now blooms outward with `--ease-settle`
  (`--duration-base`) instead of appearing instantly.
- **Tabs** — line-variant `::after` indicator now spring-expands (`scaleX` 0.5 → 1)
  with `--ease-settle` at `--duration-slow`; opacity stays on fast `--ease-out`
  so the bar fades in cleanly before settling.
- **Card** (interactive) — hover lift transitions use `--ease-settle` so the card
  rises with a whisper of give rather than a flat deceleration.
- **Catalog** (`index.html`) — season toggle now crossfades the page background
  over 480 ms (`--ease-drift`), so a season change feels like an event rather
  than a hard cut.

## [0.7.0] — 2026-06-15
### Added
- **Motion system — material personalities.** Five new tokens in
  `tokens/spacing.css`:
  - `--ease-settle` (linen — cloth draping, whisper of give)
  - `--ease-flutter` (dried grass — light spring, snappy release)
  - `--ease-press` (clay — weighted arrival, firm and damped)
  - `--ease-drift` (lichen — barely-there, ambient loops only)
  - `--duration-ambient` 7 200 ms — breathing / idle loops
- **Three motion specimen cards** (`guidelines/motion-*.card.html`), now in
  their own **Motion** group in the catalog:
  - *Material personalities* — interactive demos of all four named easings
  - *Relational — Breeze stagger* — items sweep in sequentially, 60 ms apart
  - *Ambient — Breathing* — the 7.2 s drift loop with ripple + annotation
- **Component upgrades** wired to the new personalities:
  - **Button** — press-down uses `--ease-press` (70 ms clay weight-in);
    release back to rest uses `--ease-settle` (320 ms linen, micro-overshoot)
  - **Switch** thumb — now uses `--ease-flutter` (300 ms spring) so it snaps
    into position with visible, lightweight give
  - **Toast** — entrance animation added: slides up 10 px + fades in using
    `--ease-settle`, gated on `prefers-reduced-motion: no-preference`

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
  terminal.\n### Docs\n- Reframed the README and app-kit README to describe the workspace app and\n  marketing site as **reference implementations** that exercise the system,\n  rather than a \u201cflagship product\u201d \u2014 Fabric is the design system; the kits in\n  `ui_kits/` are demos that prove it out.

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

[0.8.3]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.8.3
[0.8.2]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.8.2
[0.8.1]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.8.1
[0.8.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.8.0
[0.7.2]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.7.2
[0.7.1]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.7.1
[0.7.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.7.0
[0.6.1]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.6.1
[0.6.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.6.0
[0.5.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.5.0
[0.4.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.4.0
[0.3.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.3.0
[0.2.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.2.0
[0.1.0]: https://github.com/Nexxspace-Development/fabric-design-system/releases/tag/v0.1.0
