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
├─ tailwind.fabric.js      ← fonts · radii · shadows · finance axis for the Tailwind config
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
| `--primary` | `--primary` (sage-600) | brand |
| `--secondary` / `--muted` | `--surface-sunken` | stone wells |
| `--accent` | `--accent-warm-soft` | terracotta tint |
| `--destructive` | `--danger` (rust) | calm, never alarming |
| `--border` / `--input` | `--border-default` | |
| `--ring` | `--focus-ring` | |
| `--radius` | `--radius-md` (10px) | sm/lg derive from it |

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
