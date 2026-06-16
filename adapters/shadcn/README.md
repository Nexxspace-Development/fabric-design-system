# Fabric → shadcn/ui adapter

Adopt Fabric in an app already built on **shadcn/ui + Tailwind** without rewriting
your components. shadcn reads all its color/radius from a small set of CSS
variables; Fabric *is* a set of CSS variables. So you adopt Fabric by **pointing
shadcn's variable contract at Fabric's tokens** — one stylesheet, no component
surgery.

```
adapters/shadcn/
├─ fabric-shadcn.css       ← modern bridge (Tailwind v4 / raw var() values)   ★ preferred
├─ fabric-shadcn-hsl.css   ← legacy bridge (Tailwind v3 / hsl(var(--x)) wrapper)
├─ tailwind.fabric.js      ← fonts · radii · shadows · brand scale · motion · finance axis
└─ README.md
```

## Which bridge do I use?

Open your `globals.css` and look at how a shadcn variable is defined:

| What you see | Tailwind / shadcn era | Use |
|---|---|---|
| `--primary: oklch(...)` or `--primary: <hex/rgb>`, referenced as `var(--primary)` | v4 / recent (CSS-first) | **`fabric-shadcn.css`** |
| `--primary: 222 47% 11%` (bare HSL triplet), referenced as `hsl(var(--primary))` | v3 / classic | **`fabric-shadcn-hsl.css`** |

> On v3 and want the truest color? The best long-term move is to migrate the
> config to consume variables raw (`var(--primary)` not `hsl(var(--primary))`)
> and use the modern bridge — that keeps Fabric's OKLCH values intact. The HSL
> file is the zero-config option; its values are an sRGB approximation of the
> OKLCH source.

> ⚠️ **`fabric-shadcn-hsl.css` is frozen at sage.** HSL channel triplets are
> static values — they cannot express `calc()` or CSS custom property
> references, so brand-hue parameterization (`--brand-h`, `data-brand`) does
> **not** work with this file. Migrate to `fabric-shadcn.css` to get a rebrand
> down to one line.

## Install

1. **Get Fabric's stylesheet into your app.** Copy the design system's `styles.css`
   and its `tokens/` (and `_ds_bundle.js` if you'll use Fabric's own React
   components) into your project — e.g. under `src/fabric/`.
2. **Copy this folder** (`adapters/shadcn/`) alongside it.
3. **Import in order** in your global stylesheet:
   ```css
   @import "./fabric/styles.css";          /* Fabric tokens, fonts, base */
   @import "./fabric/tokens/finance.css";  /* optional: directional axis + figures */
   @import "./adapters/shadcn/fabric-shadcn.css";  /* the bridge */
   /* …your app styles / shadcn layer last… */
   ```
4. **Load the fonts.** Add Newsreader, Hanken Grotesk and IBM Plex Mono (Fabric's
   `tokens/fonts.css` pulls them from Google Fonts; self-host for production).
5. **Wire Tailwind.** Fold `tailwind.fabric.js` into your config (v3) or `@theme`
   block (v4) for `font-display`, the extra radii, Fabric's warm shadows, and the
   `text-fin-*` finance colors.

That's it — your `<Button>`, `<Card>`, `<Input>` now render in sage, warm stone
and Newsreader/Hanken, with Fabric's diffuse shadows.

## Brand theming (v0.8.0+)

Fabric generates its full 50–900 primary ramp from a single hue token.
A rebrand is one line — no new scale to author, no dark-mode work:

```css
/* globals.css — after the Fabric import */
:root { --brand-h: 274; }   /* indigo. sage default = 145 */
```

Or scope it to a subtree with a preset attribute:

```html
<html data-brand="indigo">    <!-- indigo primary sitewide -->
<section data-brand="plum">  <!-- plum only in this section -->
```

Six presets ship: `sage` (default) · `indigo` · `ocean` · `teal` · `plum` · `crimson`.

`--brand-c` is an optional chroma multiplier (default `1` = Fabric-muted;
cap ~`1.6`). Louder brands can push it slightly without breaking Fabric's
recessive character:

```css
:root { --brand-h: 274; --brand-c: 1.5; }  /* vivid indigo */
```

**Primary-only strategy.** Only `--primary*` and the focus ring follow the
brand. Terracotta / ochre / marsh accents and the sage-lineage status colors
(success / warning / info) stay Fabric's earthen supporting cast — so
"success" never drifts blue under an indigo brand. Nightfall follows
automatically; no per-brand dark work.

## Motion

Fabric names its easing curves after physical materials — use them instead of
raw `cubic-bezier()` values so the motion language stays legible and tunable:

| Token | Material | Use for |
|---|---|---|
| `--ease-settle` | Linen | most UI transitions — cloth draping to rest |
| `--ease-flutter` | Dried grass | snappy confirmations, micro-interactions |
| `--ease-press` | Clay | press / tap — weighted, damped, no bounce |
| `--ease-drift` | Lichen | ambient idle loops **only** (never interactive) |
| `--ease-out` | — | plain deceleration, no material metaphor |

Durations: `--duration-fast` 120ms · `--duration-base` 200ms ·
`--duration-slow` 320ms · `--duration-slower` 480ms.

With `tailwind.fabric.js` wired in these become Tailwind utilities:

```html
<div class="transition duration-base ease-settle">…</div>
<button class="transition duration-fast ease-flutter active:scale-95">…</button>
```

## Dark mode

Fabric ships a full **Nightfall** theme. Two ways to connect it:

- **Recommended — `data-theme`:** configure next-themes (or your toggle) to set
  `attribute="data-theme"`. Fabric's `[data-theme="dark"]` scope re-resolves every
  mapped token automatically, and it even follows the OS via `prefers-color-scheme`.
  One source of truth, zero duplication.
- **Class-based — `.dark`:** if you keep shadcn's default `.dark` class toggle, both
  bridge files include a `.dark` block that re-points the slots to Fabric's dark
  values, so it works out of the box.

## Map (shadcn slot → Fabric token)

| shadcn | Fabric (light) | notes |
|---|---|---|
| `--background` / `--foreground` | `--surface-canvas` / `--text-body` | warm paper |
| `--card` / `--popover` | `--surface-card` / `--surface-raised` | |
| `--primary` | `--primary` → `--brand-600` | follows `--brand-h`; one line to rebrand |
| `--secondary` / `--muted` | `--surface-sunken` | stone wells |
| `--accent` | `--accent-warm-soft` | terracotta tint |
| `--destructive` | `--danger` (rust) | calm, never alarming |
| `--border` / `--input` | `--border-default` | |
| `--ring` | `--focus-ring` → `--brand-500` | follows brand |
| `--radius` | `--radius-md` (10px) | sm/lg derive from it |

## Brand × Tailwind utilities

With `tailwind.fabric.js` wired in, the explicit brand scale is also available
as Tailwind utilities — useful when you need a brand color outside a shadcn
slot (e.g. a custom illustration tint or a non-shadcn component):

```html
<div class="bg-brand-100 border border-brand-300 text-brand-800">…</div>
```

These update automatically when `--brand-h` changes — no Tailwind config
change needed for a rebrand.

## Tiers — how far to take it

1. **Token bridge only** *(start here)* — keep 100% of your shadcn components; the
   whole app picks up Fabric's look from one file.
2. **Incremental** — bridge the tokens, then drop in Fabric's own React components
   (`window.FabricDesignSystem_7bb975`) only where you want exact Fabric behavior.
   They share the token layer, so the two coexist seamlessly.
3. **Full migration** — replace shadcn with Fabric components over time. Rarely
   necessary.

## Finance layer travels for free

`tokens/finance.css` is pure CSS — the directional axis (`--fin-gain/-loss/-flat`),
the `.fabric-figure` tabular/lining utilities, `[data-fin]` and `.fin-pill` work on
**any** shadcn table or card, no component coupling. With the Tailwind snippet you
also get `text-fin-loss`, `bg-fin-gain-soft`, etc. See `guidelines/finance-conventions.html`
for the full conventions.

```tsx
// a shadcn TableCell, coloured by sign — direction, never status
<TableCell className="text-right font-mono tabular-nums"
           data-fin={v > 0 ? "gain" : v < 0 ? "loss" : "flat"}>
  {v < 0 ? "−" : "+"}${Math.abs(v).toFixed(2)}
</TableCell>
```
