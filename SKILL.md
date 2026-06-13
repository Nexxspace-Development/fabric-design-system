---
name: fabric-design
description: Use this skill to generate well-branded interfaces and assets for Fabric, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** Fabric — "calm tools for focused work," "made from nature." Muted, organic, humanist, unhurried.
- **Global CSS:** link `styles.css` (it `@import`s everything in `tokens/`).
- **Type:** Newsreader (serif display/quotes), Hanken Grotesk (sans UI/body), IBM Plex Mono (eyebrows/data). Loaded from Google Fonts in `tokens/fonts.css`.
- **Color:** stone neutral, sage primary, terracotta/ochre warm accents, marsh cool, rust danger — all muted OKLCH. Use semantic aliases (`--text-body`, `--surface-card`, `--primary`, …).
- **Dark theme (Nightfall):** warm dark earth, not blue-black. Auto under `prefers-color-scheme: dark`; force with `<html data-theme="dark">` / `data-theme="light">`. Use semantic tokens (incl. `--on-*-soft`, `--control-track`, `--hover-wash`, `--text-on-inverse`) so your UI flips for free; reach for fixed scale steps (`--stone-900`) only for moments meant to stay dark in both themes.
- **Icons:** Lucide (thin rounded stroke), via CDN. Use the inline `<Icon>` helper pattern in `ui_kits/*/icons.jsx`.
- **Texture:** Fabric is cloth — surfaces are woven/grained, not flat, but kept barely-there. Theme-aware utilities in `tokens/textures.css`: `.fabric-weave`, `.fabric-linen`, `.fabric-grain`, `.fabric-ribbed`, `.fabric-felt`, `.fabric-frost`, `.fabric-stitch` (also `Divider variant="stitch"`). One texture per surface; large calm areas only, never on dense UI. Override `--texture-ink` locally for always-dark surfaces.
- **Seasons:** optional layer orthogonal to light/dark — `data-season="spring|summer|autumn|winter"` on `<html>` or any element. Rotates a seasonal accent (`--season-accent` / `--season-accent-soft` / `--season-on-soft`, drawn from sage/ochre/terracotta/marsh) + a signature texture (weave/ribbed/felt/frost). `color-mix`-derived so it composes with Nightfall. A whisper, not a reskin — keep the sage primary constant. See `tokens/seasons.css`.
- **Mark:** `assets/fabric-mark.svg` (leaf).

## Components
Reusable React primitives live in `components/`. In built HTML, load `_ds_bundle.js` and read them off `window.FabricDesignSystem_7bb975` (e.g. `const { Button, Card, Tag } = window.FabricDesignSystem_7bb975`). Each component has a `.prompt.md` with usage. Don't re-implement them — compose them.

## UI kits
`ui_kits/app/` (workspace) and `ui_kits/site/` (landing page) are full, interactive recreations you can lift screens and patterns from.

## Voice
Sentence case. "You" / "we." No emoji, no urgency, no exclamation marks. Short lines. Nature/craft metaphors used sparingly. See README "Content fundamentals."

## Caveat
Fonts are loaded from Google Fonts CDN (not self-hosted binaries). For offline/production, self-host the three families and replace `tokens/fonts.css` with `@font-face` rules.
