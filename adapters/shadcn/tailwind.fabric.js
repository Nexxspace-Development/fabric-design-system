/* ============================================================
 * Fabric × Tailwind — config snippets
 * Wire Fabric's fonts, radii, shadows and the finance axis into Tailwind so
 * utilities (font-display, shadow-md, text-fin-loss, …) resolve to Fabric.
 * The color SLOTS (bg-background, text-primary, …) come from the bridge CSS;
 * this file adds the pieces shadcn's default config doesn't cover.
 * ============================================================ */

/* ------------------------------------------------------------------
 * TAILWIND v3 — extend your existing tailwind.config.{js,ts}
 * Copy the `theme.extend` keys you need into your own config.
 * ------------------------------------------------------------------ */
export default {
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
        // Brand-primary scale — follows --brand-h (set via :root or data-brand).
        // bg-brand-600, text-brand-200, ring-brand-400 etc. rebrand with one token.
        brand: {
          50:  'var(--brand-50)',
          100: 'var(--brand-100)',
          200: 'var(--brand-200)',
          300: 'var(--brand-300)',
          400: 'var(--brand-400)',
          500: 'var(--brand-500)',
          600: 'var(--brand-600)',
          700: 'var(--brand-700)',
          800: 'var(--brand-800)',
          900: 'var(--brand-900)',
        },
        // The directional finance axis → text-fin-gain, bg-fin-loss-soft
        'fin-gain':      'var(--fin-gain)',
        'fin-loss':      'var(--fin-loss)',
        'fin-flat':      'var(--fin-flat)',
        'fin-gain-soft': 'var(--fin-gain-soft)',
        'fin-loss-soft': 'var(--fin-loss-soft)',
      },
      // Fabric's named motion personalities — calm, material-based easing.
      // duration-fast / ease-settle etc. → prefix with `transition-` or `animate-`.
      transitionDuration: {
        fast:   'var(--duration-fast)',    // 120ms — micro interactions
        base:   'var(--duration-base)',    // 200ms — default transitions
        slow:   'var(--duration-slow)',    // 320ms — panel / overlay open
        slower: 'var(--duration-slower)', // 480ms — page-level motion
      },
      transitionTimingFunction: {
        // Each named after a Fabric material:
        'ease-out':     'var(--ease-out)',     // neutral decel
        'ease-in-out':  'var(--ease-in-out)',  // symmetric
        'settle':       'var(--ease-settle)',  // linen draping to rest — gentle give
        'flutter':      'var(--ease-flutter)', // dried grass — snappy release
        'press':        'var(--ease-press)',   // clay — weighted, damped, no bounce
        'drift':        'var(--ease-drift)',   // lichen — ambient loops only
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
 *     // Brand primary scale
 *     --color-brand-50:  var(--brand-50);
 *     --color-brand-100: var(--brand-100);
 *     --color-brand-200: var(--brand-200);
 *     --color-brand-300: var(--brand-300);
 *     --color-brand-400: var(--brand-400);
 *     --color-brand-500: var(--brand-500);
 *     --color-brand-600: var(--brand-600);
 *     --color-brand-700: var(--brand-700);
 *     --color-brand-800: var(--brand-800);
 *     --color-brand-900: var(--brand-900);
 *
 *     // Finance axis
 *     --color-fin-gain:      var(--fin-gain);
 *     --color-fin-loss:      var(--fin-loss);
 *     --color-fin-flat:      var(--fin-flat);
 *     --color-fin-gain-soft: var(--fin-gain-soft);
 *     --color-fin-loss-soft: var(--fin-loss-soft);
 *
 *     // Motion — Fabric's material personalities
 *     --ease-settle:  var(--ease-settle);   // linen
 *     --ease-flutter: var(--ease-flutter);  // dried grass
 *     --ease-press:   var(--ease-press);    // clay
 *     --ease-drift:   var(--ease-drift);    // lichen — ambient only
 *     --duration-fast:   var(--duration-fast);
 *     --duration-base:   var(--duration-base);
 *     --duration-slow:   var(--duration-slow);
 *     --duration-slower: var(--duration-slower);
 *   }
 *
 * Then: <span class="font-mono tabular-nums text-fin-loss">−$48.17</span>
 * Or:   <div class="transition duration-base ease-settle">…</div>
 */
