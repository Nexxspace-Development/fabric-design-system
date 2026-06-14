/* ============================================================
 * Fabric × Tailwind — config snippets
 * Wire Fabric's fonts, radii, shadows and the finance axis into Tailwind so
 * utilities (font-display, shadow-md, text-fin-loss, …) resolve to Fabric.
 * The color SLOTS (bg-background, text-primary, …) come from the bridge CSS;
 * this file adds the pieces shadcn's default config doesn't cover.
 * ============================================================ */

/* ------------------------------------------------------------------
 * TAILWIND v3 — extend your existing tailwind.config.{js,ts}
 * ------------------------------------------------------------------ */
module.exports = {
  // ...your existing config (darkMode, content, the shadcn color mapping)...
  theme: {
    extend: {
      fontFamily: {
        // shadcn maps font-sans by default; add the Fabric trio:
        display: ['Newsreader', 'Georgia', 'serif'],          // font-display → headlines
        sans:    ['Hanken Grotesk', 'system-ui', 'sans-serif'], // body / UI
        mono:    ['IBM Plex Mono', 'ui-monospace', 'monospace'],// data / numerals
      },
      borderRadius: {
        // shadcn already derives lg/md/sm from var(--radius); add the extras:
        xl:  '20px',   // cards, panels
        '2xl': '28px', // hero surfaces
      },
      boxShadow: {
        // Fabric's warm, diffuse shadows (mirror tokens/spacing.css)
        xs: '0 1px 2px hsl(60 22% 30% / 0.06)',
        sm: '0 1px 2px hsl(60 22% 30% / 0.05), 0 2px 6px hsl(60 22% 30% / 0.06)',
        DEFAULT: '0 2px 4px hsl(60 22% 30% / 0.05), 0 6px 16px hsl(60 22% 30% / 0.08)',
        md: '0 2px 4px hsl(60 22% 30% / 0.05), 0 6px 16px hsl(60 22% 30% / 0.08)',
        lg: '0 4px 8px hsl(60 22% 30% / 0.06), 0 16px 32px hsl(60 22% 30% / 0.10)',
        xl: '0 8px 16px hsl(60 22% 30% / 0.08), 0 28px 56px hsl(60 22% 30% / 0.14)',
      },
      colors: {
        // The directional finance axis as Tailwind colors → text-fin-gain, bg-fin-loss-soft
        // (these read the CSS vars from tokens/finance.css, so they flip in Nightfall)
        'fin-gain':      'var(--fin-gain)',
        'fin-loss':      'var(--fin-loss)',
        'fin-flat':      'var(--fin-flat)',
        'fin-gain-soft': 'var(--fin-gain-soft)',
        'fin-loss-soft': 'var(--fin-loss-soft)',
      },
      fontVariantNumeric: {
        // pair with .tabular-nums for ledgers; lining is on via the figure utility
      },
    },
  },
};

/* ------------------------------------------------------------------
 * TAILWIND v4 — CSS-first, add to your globals.css (no JS config needed)
 * ------------------------------------------------------------------
 *
 *   @import "tailwindcss";
 *   @import "../fabric/styles.css";
 *   @import "../fabric/tokens/finance.css";
 *   @import "./fabric-shadcn.css";
 *
 *   @theme inline {
 *     --font-display: var(--font-serif);
 *     --font-sans:    var(--font-sans);
 *     --font-mono:    var(--font-mono);
 *
 *     --radius-xl:  20px;
 *     --radius-2xl: 28px;
 *
 *     --shadow-xs: 0 1px 2px hsl(60 22% 30% / 0.06);
 *     --shadow-sm: 0 1px 2px hsl(60 22% 30% / 0.05), 0 2px 6px hsl(60 22% 30% / 0.06);
 *     --shadow-md: 0 2px 4px hsl(60 22% 30% / 0.05), 0 6px 16px hsl(60 22% 30% / 0.08);
 *     --shadow-lg: 0 4px 8px hsl(60 22% 30% / 0.06), 0 16px 32px hsl(60 22% 30% / 0.10);
 *     --shadow-xl: 0 8px 16px hsl(60 22% 30% / 0.08), 0 28px 56px hsl(60 22% 30% / 0.14);
 *
 *     --color-fin-gain:      var(--fin-gain);
 *     --color-fin-loss:      var(--fin-loss);
 *     --color-fin-flat:      var(--fin-flat);
 *     --color-fin-gain-soft: var(--fin-gain-soft);
 *     --color-fin-loss-soft: var(--fin-loss-soft);
 *   }
 *
 * Then: <span class="font-mono tabular-nums text-fin-loss">−$48.17</span>
 */
