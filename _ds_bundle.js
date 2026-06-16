/* @ds-bundle: {"format":3,"namespace":"FabricDesignSystem_7bb975","components":[{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Avatar","sourcePath":"components/layout/Avatar.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Divider","sourcePath":"components/layout/Divider.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"adapters/shadcn/tailwind.fabric.js":"b78e1dae28c7","compare/compare.jsx":"d6299f1f4766","compare/design-canvas.jsx":"bd8746af6e58","components/feedback/Badge.jsx":"54d350c0a4ed","components/feedback/Tag.jsx":"f89f8aaaa844","components/feedback/Toast.jsx":"d223f07667ab","components/feedback/Tooltip.jsx":"2182ccee551f","components/forms/Button.jsx":"fed507c87f59","components/forms/Checkbox.jsx":"32495e0c9d5f","components/forms/IconButton.jsx":"4740530c149c","components/forms/Input.jsx":"9008436823dd","components/forms/Select.jsx":"e70d795c07a7","components/forms/Switch.jsx":"4ea303fbf982","components/forms/Textarea.jsx":"4a1eb2af57b5","components/layout/Avatar.jsx":"3c4c17a8cd1e","components/layout/Card.jsx":"20b0bb310028","components/layout/Divider.jsx":"056b799da2e6","components/navigation/Tabs.jsx":"286bd20d0ab9","ui_kits/app/App.jsx":"5bccb9494d89","ui_kits/app/FocusRail.jsx":"03dbaa91b35f","ui_kits/app/Login.jsx":"4f38c0bdcf49","ui_kits/app/Sidebar.jsx":"d51366a5c564","ui_kits/app/TaskList.jsx":"653ae710d335","ui_kits/app/data.jsx":"d1ca11835f5f","ui_kits/app/icons.jsx":"a9244e9a2b03","ui_kits/site/Site.jsx":"058f11485291","ui_kits/site/icons.jsx":"a9244e9a2b03"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FabricDesignSystem_7bb975 = window.FabricDesignSystem_7bb975 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// adapters/shadcn/tailwind.fabric.js
try { (() => {
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
try {
  void {
    // ...your existing config (darkMode, content, the shadcn color mapping)...
    theme: {
      extend: {
        fontFamily: {
          // shadcn maps font-sans by default; add the Fabric trio:
          display: ['Newsreader', 'Georgia', 'serif'],
          // font-display → headlines
          sans: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
          // body / UI
          mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'] // data / numerals
        },
        borderRadius: {
          // shadcn already derives lg/md/sm from var(--radius); add the extras:
          xl: '20px',
          // cards, panels
          '2xl': '28px' // hero surfaces
        },
        boxShadow: {
          // Fabric's warm, diffuse shadows (mirror tokens/spacing.css)
          xs: '0 1px 2px hsl(60 22% 30% / 0.06)',
          sm: '0 1px 2px hsl(60 22% 30% / 0.05), 0 2px 6px hsl(60 22% 30% / 0.06)',
          DEFAULT: '0 2px 4px hsl(60 22% 30% / 0.05), 0 6px 16px hsl(60 22% 30% / 0.08)',
          md: '0 2px 4px hsl(60 22% 30% / 0.05), 0 6px 16px hsl(60 22% 30% / 0.08)',
          lg: '0 4px 8px hsl(60 22% 30% / 0.06), 0 16px 32px hsl(60 22% 30% / 0.10)',
          xl: '0 8px 16px hsl(60 22% 30% / 0.08), 0 28px 56px hsl(60 22% 30% / 0.14)'
        },
        colors: {
          // Brand-primary scale — follows --brand-h (set via :root or data-brand).
          // bg-brand-600, text-brand-200, ring-brand-400 etc. rebrand with one token.
          brand: {
            50: 'var(--brand-50)',
            100: 'var(--brand-100)',
            200: 'var(--brand-200)',
            300: 'var(--brand-300)',
            400: 'var(--brand-400)',
            500: 'var(--brand-500)',
            600: 'var(--brand-600)',
            700: 'var(--brand-700)',
            800: 'var(--brand-800)',
            900: 'var(--brand-900)'
          },
          // The directional finance axis → text-fin-gain, bg-fin-loss-soft
          'fin-gain': 'var(--fin-gain)',
          'fin-loss': 'var(--fin-loss)',
          'fin-flat': 'var(--fin-flat)',
          'fin-gain-soft': 'var(--fin-gain-soft)',
          'fin-loss-soft': 'var(--fin-loss-soft)'
        },
        // Fabric's named motion personalities — calm, material-based easing.
        // duration-fast / ease-settle etc. → prefix with `transition-` or `animate-`.
        transitionDuration: {
          fast: 'var(--duration-fast)',
          // 120ms — micro interactions
          base: 'var(--duration-base)',
          // 200ms — default transitions
          slow: 'var(--duration-slow)',
          // 320ms — panel / overlay open
          slower: 'var(--duration-slower)' // 480ms — page-level motion
        },
        transitionTimingFunction: {
          // Each named after a Fabric material:
          'ease-out': 'var(--ease-out)',
          // neutral decel
          'ease-in-out': 'var(--ease-in-out)',
          // symmetric
          'settle': 'var(--ease-settle)',
          // linen draping to rest — gentle give
          'flutter': 'var(--ease-flutter)',
          // dried grass — snappy release
          'press': 'var(--ease-press)',
          // clay — weighted, damped, no bounce
          'drift': 'var(--ease-drift)' // lichen — ambient loops only
        },
        fontVariantNumeric: {
          // pair with .tabular-nums for ledgers; lining is on via the figure utility
        }
      }
    }
  };
} catch {}
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "adapters/shadcn/tailwind.fabric.js", error: String((e && e.message) || e) }); }

// compare/compare.jsx
try { (() => {
/* Visual comparison of the open design decisions. Each artboard overrides the
   real design tokens locally, so you're seeing the actual proposed change. */

// Full Nightfall semantic set, so a plain <div> subtree reads as dark
// (the dark.css block is scoped to :root, so we apply it inline here).
const DARK = {
  '--surface-canvas': 'oklch(0.205 0.012 58)',
  '--surface-card': 'oklch(0.246 0.013 57)',
  '--surface-raised': 'oklch(0.288 0.014 56)',
  '--surface-sunken': 'oklch(0.172 0.010 58)',
  '--text-strong': 'oklch(0.955 0.008 85)',
  '--text-body': 'oklch(0.882 0.008 82)',
  '--text-muted': 'oklch(0.712 0.012 76)',
  '--text-faint': 'oklch(0.566 0.013 70)',
  '--text-on-sage': 'oklch(0.205 0.014 56)',
  '--border-subtle': 'oklch(0.305 0.012 58)',
  '--border-default': 'oklch(0.368 0.013 58)',
  '--primary': 'var(--sage-400)',
  '--primary-soft': 'oklch(0.318 0.034 147)',
  '--on-primary-soft': 'oklch(0.838 0.040 147)',
  '--control-track': 'oklch(0.368 0.013 58)',
  '--control-thumb': 'oklch(0.860 0.010 82)',
  '--texture-ink': 'hsl(48 24% 82% / 0.055)',
  '--texture-ink-strong': 'hsl(48 24% 82% / 0.11)'
};
const S = {
  fill: extra => ({
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    ...extra
  }),
  eyebrow: {
    fontFamily: 'var(--font-data)',
    fontSize: 10,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--text-faint)'
  }
};
function Btn({
  children,
  soft
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      padding: '9px 16px',
      borderRadius: 'var(--radius-md)',
      whiteSpace: 'nowrap',
      background: soft ? 'var(--primary-soft)' : 'var(--primary)',
      color: soft ? 'var(--on-primary-soft)' : 'var(--text-on-sage)'
    }
  }, children);
}
function Track({
  pct = 62
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--surface-sunken)',
      borderRadius: 999,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-inset)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: 'var(--primary)',
      borderRadius: 999
    }
  }));
}

/* ---------- Decision 1: Nightfall contrast ---------- */
function ContrastPanel({
  vars
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: S.fill({
      ...DARK,
      ...vars,
      background: 'var(--surface-canvas)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    })
  }, /*#__PURE__*/React.createElement("span", {
    style: S.eyebrow
  }, "// canvas"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--text-strong)'
    }
  }, "Card surface"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      boxShadow: 'var(--shadow-md)'
    }
  }, "Raised popover \u2014 sits above the card"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-faint)'
    }
  }, "Sunken track"), /*#__PURE__*/React.createElement(Track, {
    pct: 58
  }))));
}

/* ---------- Decision 2: Dark primary ---------- */
function PrimaryPanel({
  vars
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: S.fill({
      ...DARK,
      ...vars,
      background: 'var(--surface-card)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      justifyContent: 'center'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Btn, null, "Begin focus"), /*#__PURE__*/React.createElement(Btn, {
    soft: true
  }, "Later")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      background: 'var(--primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    width: "12",
    height: "12",
    fill: "none",
    stroke: "var(--text-on-sage)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "3.5 8.5 6.5 11.5 12.5 4.5"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-body)'
    }
  }, "Checked \u2014 primary fill")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: 22,
      color: 'var(--text-strong)',
      letterSpacing: '0.02em'
    }
  }, "24:00"), /*#__PURE__*/React.createElement(Track, {
    pct: 70
  })));
}

/* ---------- Decision 3: Texture intensity ---------- */
function TexturePanel({
  ink,
  strong,
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: S.fill({
      '--texture-ink': ink,
      '--texture-ink-strong': strong,
      background: 'var(--surface-card)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "fabric-weave",
    style: {
      flex: 1,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: S.eyebrow
  }, "// woven canvas"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      color: 'var(--text-strong)',
      lineHeight: 1.1,
      marginTop: 4
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    className: "fabric-grain",
    style: {
      height: 44,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12,
      fontFamily: 'var(--font-data)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "grain \xB7 paper tooth"));
}
function Comparison() {
  const {
    DesignCanvas,
    DCSection,
    DCArtboard,
    DCPostIt
  } = window;
  return /*#__PURE__*/React.createElement(DesignCanvas, null, /*#__PURE__*/React.createElement(DCSection, {
    id: "contrast",
    title: "Nightfall contrast",
    subtitle: "How much the dark surfaces separate from each other"
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "c-a",
    label: "A \xB7 Calm  (current)",
    width: 340,
    height: 300
  }, /*#__PURE__*/React.createElement(ContrastPanel, {
    vars: {}
  })), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "c-b",
    label: "B \xB7 Lifted",
    width: 340,
    height: 300
  }, /*#__PURE__*/React.createElement(ContrastPanel, {
    vars: {
      '--surface-canvas': 'oklch(0.180 0.012 58)',
      '--surface-card': 'oklch(0.258 0.014 57)',
      '--surface-raised': 'oklch(0.320 0.015 56)',
      '--surface-sunken': 'oklch(0.150 0.010 58)',
      '--border-subtle': 'oklch(0.330 0.013 58)'
    }
  })), /*#__PURE__*/React.createElement(DCPostIt, null, "Calm keeps the page quiet and flat; Lifted makes cards and popovers read more distinctly (better for dense screens / accessibility).")), /*#__PURE__*/React.createElement(DCSection, {
    id: "primary",
    title: "Dark primary",
    subtitle: "The Nightfall primary button & accents"
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "p-a",
    label: "A \xB7 Moonlit moss  (current)",
    width: 300,
    height: 260
  }, /*#__PURE__*/React.createElement(PrimaryPanel, {
    vars: {}
  })), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "p-b",
    label: "B \xB7 White on deep sage",
    width: 300,
    height: 260
  }, /*#__PURE__*/React.createElement(PrimaryPanel, {
    vars: {
      '--primary': 'oklch(0.520 0.044 145)',
      '--text-on-sage': '#f4f8f1'
    }
  })), /*#__PURE__*/React.createElement(DCPostIt, null, "Moss (light button, dark label) feels organic and luminous \u2014 moonlit. Deep sage (darker button, white label) is more conventional and slightly higher-contrast for the label.")), /*#__PURE__*/React.createElement(DCSection, {
    id: "texture",
    title: "Texture intensity",
    subtitle: "How tactile the woven / grained surfaces are"
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "t-a",
    label: "A \xB7 Whisper  (current)",
    width: 250,
    height: 240
  }, /*#__PURE__*/React.createElement(TexturePanel, {
    ink: "hsl(56 16% 28% / 0.05)",
    strong: "hsl(56 16% 28% / 0.10)",
    name: "Whisper"
  })), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "t-b",
    label: "B \xB7 Linen",
    width: 250,
    height: 240
  }, /*#__PURE__*/React.createElement(TexturePanel, {
    ink: "hsl(56 16% 28% / 0.09)",
    strong: "hsl(56 16% 28% / 0.17)",
    name: "Linen"
  })), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "t-c",
    label: "C \xB7 Canvas",
    width: 250,
    height: 240
  }, /*#__PURE__*/React.createElement(TexturePanel, {
    ink: "hsl(56 16% 28% / 0.14)",
    strong: "hsl(56 16% 28% / 0.24)",
    name: "Canvas"
  })), /*#__PURE__*/React.createElement(DCPostIt, null, "Whisper is felt more than seen (today's setting). Linen is clearly tactile up close. Canvas is openly textured \u2014 characterful, but louder under text.")));
}
window.Comparison = Comparison;
})(); } catch (e) { __ds_ns.__errors.push({ path: "compare/compare.jsx", error: String((e && e.message) || e) }); }

// compare/design-canvas.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Exports (to window): DesignCanvas, DCSection, DCArtboard, DCPostIt.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>
//
// Artboards are static design frames, not scroll regions — never use
// height: 100% + overflow: auto/scroll on inner elements; size each artboard
// to fit its content (explicit pixel height, or let it grow).
/* END USAGE */

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "compare/design-canvas.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'fabric-badge-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-badge {
    display: inline-flex; align-items: center; gap: var(--space-1);
    font-family: var(--font-body); font-size: var(--text-xs);
    font-weight: var(--weight-semibold); line-height: 1;
    padding: 4px 9px; border-radius: var(--radius-pill);
    border: var(--border-hairline) solid transparent; white-space: nowrap;
  }
  .fab-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
  .fab-badge--neutral { background: var(--surface-sunken); color: var(--text-muted); border-color: var(--border-subtle); }
  .fab-badge--primary { background: var(--primary-soft); color: var(--on-primary-soft); }
  .fab-badge--warm    { background: var(--accent-warm-soft); color: var(--on-warm-soft); }
  .fab-badge--gold    { background: var(--accent-gold-soft); color: var(--on-gold-soft); }
  .fab-badge--cool    { background: var(--accent-cool-soft); color: var(--on-cool-soft); }
  .fab-badge--success { background: var(--success-soft); color: var(--on-success-soft); }
  .fab-badge--warning { background: var(--warning-soft); color: var(--on-warning-soft); }
  .fab-badge--danger  { background: var(--danger-soft); color: var(--on-danger-soft); }
  .fab-badge--solid   { background: var(--primary); color: var(--text-on-sage); }
  /* Season-aware badge: cross-fades with the season turn via @property */
  .fab-badge--season  { background: var(--season-accent-soft); color: var(--season-on-soft); border-color: var(--season-accent-soft); }
  `;
  document.head.appendChild(el);
}
function Badge({
  tone = 'neutral',
  dot = false,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['fab-badge', `fab-badge--${tone}`, className].filter(Boolean).join(' ')
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "fab-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'fabric-tag-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-tag {
    display: inline-flex; align-items: center; gap: var(--space-2);
    font-family: var(--font-body); font-size: var(--text-sm); font-weight: var(--weight-medium);
    line-height: 1; padding: 6px var(--space-3); border-radius: var(--radius-pill);
    background: var(--surface-card); color: var(--text-body);
    border: var(--border-hairline) solid var(--border-default);
    transition: border-color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out);
  }
  .fab-tag__dot { width: 8px; height: 8px; border-radius: 50%; flex: none; }
  .fab-tag--selectable { cursor: pointer; }
  .fab-tag--selectable:hover { border-color: var(--border-strong); }
  .fab-tag[data-selected="true"] { background: var(--primary-soft); border-color: var(--sage-300); color: var(--primary-soft-tx); }
  /* Seasonal variant: picks up the current season accent, drifts on season turn */
  .fab-tag[data-seasonal="true"] {
    background: var(--season-accent-soft);
    border-color: color-mix(in oklab, var(--season-accent) 22%, var(--surface-card));
    color: var(--season-on-soft);
  }
  .fab-tag__remove {
    display: inline-flex; border: 0; background: transparent; cursor: pointer;
    color: var(--text-faint); padding: 0; margin-right: -2px; border-radius: var(--radius-pill);
    transition: color var(--duration-fast) var(--ease-out);
  }
  .fab-tag__remove:hover { color: var(--text-body); }
  .fab-tag__remove svg { width: 13px; height: 13px; stroke: currentColor; stroke-width: 2.2; fill: none; stroke-linecap: round; }
  `;
  document.head.appendChild(el);
}
function Tag({
  color,
  selectable = false,
  selected = false,
  seasonal = false,
  onRemove,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['fab-tag', selectable ? 'fab-tag--selectable' : '', className].filter(Boolean).join(' '),
    "data-selected": selected,
    "data-seasonal": seasonal
  }, rest), color && /*#__PURE__*/React.createElement("span", {
    className: "fab-tag__dot",
    style: {
      background: color
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fab-tag__remove",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "4",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "4",
    x2: "4",
    y2: "12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'fabric-toast-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  @keyframes fab-toast-in {
    from { opacity: 0; transform: translateY(10px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0)    scale(1); }
  }
  @media (prefers-reduced-motion: no-preference) {
    .fab-toast { animation: fab-toast-in var(--duration-slow) var(--ease-settle) both; }
  }
  .fab-toast {
    display: flex; align-items: flex-start; gap: var(--space-3);
    background: var(--surface-raised); color: var(--text-body);
    border: var(--border-hairline) solid var(--border-subtle);
    border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
    padding: var(--space-4); min-width: 280px; max-width: 400px;
  }
  .fab-toast__icon {
    flex: none; width: 32px; height: 32px; border-radius: var(--radius-md);
    display: flex; align-items: center; justify-content: center;
  }
  .fab-toast__icon svg { width: 18px; height: 18px; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .fab-toast--info    .fab-toast__icon { background: var(--info-soft); color: var(--on-info-soft); }
  .fab-toast--success .fab-toast__icon { background: var(--success-soft); color: var(--on-success-soft); }
  .fab-toast--warning .fab-toast__icon { background: var(--warning-soft); color: var(--on-warning-soft); }
  .fab-toast--danger  .fab-toast__icon { background: var(--danger-soft); color: var(--on-danger-soft); }
  .fab-toast__body { flex: 1; min-width: 0; padding-top: 2px; }
  .fab-toast__title { font-family: var(--font-body); font-weight: var(--weight-semibold); font-size: var(--text-sm); color: var(--text-strong); }
  .fab-toast__msg { font-size: var(--text-sm); color: var(--text-muted); margin-top: 2px; }
  .fab-toast__close {
    flex: none; border: 0; background: transparent; cursor: pointer; color: var(--text-faint);
    padding: 2px; border-radius: var(--radius-sm); transition: color var(--duration-fast) var(--ease-out);
  }
  .fab-toast__close:hover { color: var(--text-body); }
  .fab-toast__close svg { width: 15px; height: 15px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; }
  `;
  document.head.appendChild(el);
}
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 8h.01M11 12h1v4h1"
  }),
  success: /*#__PURE__*/React.createElement("polyline", {
    points: "5 13 10 18 19 6"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01M10.3 4l-7 12a2 2 0 0 0 1.7 3h14a2 2 0 0 0 1.7-3l-7-12a2 2 0 0 0-3.4 0z"
  }),
  danger: /*#__PURE__*/React.createElement("path", {
    d: "M15 9l-6 6M9 9l6 6"
  })
};
function Toast({
  tone = 'info',
  title,
  children,
  onClose,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    className: ['fab-toast', `fab-toast--${tone}`, className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "fab-toast__icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, ICONS[tone])), /*#__PURE__*/React.createElement("div", {
    className: "fab-toast__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "fab-toast__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "fab-toast__msg"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fab-toast__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "4",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "4",
    x2: "4",
    y2: "12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'fabric-tooltip-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-tip { position: relative; display: inline-flex; }
  .fab-tip__bubble {
    position: absolute; z-index: var(--z-popover); pointer-events: none;
    background: var(--surface-inverse); color: var(--text-on-inverse);
    font-family: var(--font-body); font-size: var(--text-xs); font-weight: var(--weight-medium);
    line-height: 1.4; padding: 6px 9px; border-radius: var(--radius-sm);
    box-shadow: var(--shadow-md); white-space: nowrap; max-width: 240px;
    opacity: 0;
    transform: scale(0.95) translate(var(--_dx, 0px), var(--_dy, 0px));
    /* Appear: settle in from anchor direction */
    transition: opacity 120ms var(--ease-out),
                transform 260ms var(--ease-settle);
  }
  .fab-tip[data-open="true"] .fab-tip__bubble {
    opacity: 1; transform: scale(1) translate(0, 0);
  }
  /* Exit: snap away so it doesn't linger */
  .fab-tip:not([data-open="true"]) .fab-tip__bubble {
    transition: opacity 90ms var(--ease-out),
                transform 110ms var(--ease-out);
  }
  /* Directional offsets: tooltip slides in from its anchor point */
  .fab-tip__bubble--top    { bottom: calc(100% + 7px); left: 50%; transform-origin: bottom center; translate: -50% 0; --_dy: 5px; }
  .fab-tip__bubble--bottom { top: calc(100% + 7px); left: 50%; transform-origin: top center; translate: -50% 0; --_dy: -5px; }
  .fab-tip__bubble--left   { right: calc(100% + 7px); top: 50%; transform-origin: right center; translate: 0 -50%; --_dx: 5px; }
  .fab-tip__bubble--right  { left: calc(100% + 7px); top: 50%; transform-origin: left center; translate: 0 -50%; --_dx: -5px; }
  `;
  document.head.appendChild(el);
}
function Tooltip({
  label,
  placement = 'top',
  delay = 120,
  className = '',
  children,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef(null);
  const show = () => {
    timer.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    clearTimeout(timer.current);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['fab-tip', className].filter(Boolean).join(' '),
    "data-open": open,
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: `fab-tip__bubble fab-tip__bubble--${placement}`
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Fabric Button — injects its own scoped styles once. */
const STYLE_ID = 'fabric-button-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-btn {
    --_bg: var(--primary);
    --_fg: var(--text-on-sage);
    --_bd: transparent;
    display: inline-flex; align-items: center; justify-content: center;
    gap: var(--space-2);
    font-family: var(--font-body);
    font-weight: var(--weight-semibold);
    line-height: 1; white-space: nowrap;
    border: var(--border-thin) solid var(--_bd);
    background: var(--_bg); color: var(--_fg);
    border-radius: var(--radius-md);
    cursor: pointer; user-select: none;
    /* Release uses --ease-settle (linen): micro-overshoot back to rest */
    transition: background var(--duration-fast) var(--ease-out),
                border-color var(--duration-fast) var(--ease-out),
                transform var(--duration-slow) var(--ease-settle),
                box-shadow var(--duration-fast) var(--ease-out);
  }
  .fab-btn:focus-visible { outline: var(--border-thick) solid var(--focus-ring); outline-offset: 2px; }
  .fab-btn:active {
    transform: translateY(1px) scale(0.978);
    /* Press uses --ease-press (clay): weighted, fast, no bounce */
    transition: background 70ms var(--ease-out),
                border-color 70ms var(--ease-out),
                transform 70ms var(--ease-press),
                box-shadow 70ms var(--ease-out);
  }
  .fab-btn[disabled] { opacity: 0.45; cursor: not-allowed; transform: none; }

  /* sizes */
  .fab-btn--sm { font-size: var(--text-sm); padding: 0 var(--space-3); height: 32px; }
  .fab-btn--md { font-size: var(--text-sm); padding: 0 var(--space-4); height: 40px; }
  .fab-btn--lg { font-size: var(--text-base); padding: 0 var(--space-5); height: 48px; }

  /* variants */
  .fab-btn--primary { --_bg: var(--primary); --_fg: var(--text-on-sage); box-shadow: var(--shadow-xs); }
  .fab-btn--primary:hover:not([disabled]) { --_bg: var(--primary-hover); }
  .fab-btn--primary:active:not([disabled]) { --_bg: var(--primary-press); }

  .fab-btn--secondary { --_bg: var(--surface-card); --_fg: var(--text-strong); --_bd: var(--border-default); box-shadow: var(--shadow-xs); }
  .fab-btn--secondary:hover:not([disabled]) { --_bg: var(--surface-raised); --_bd: var(--border-strong); }

  .fab-btn--ghost { --_bg: transparent; --_fg: var(--text-body); }
  .fab-btn--ghost:hover:not([disabled]) { --_bg: var(--hover-wash); }

  .fab-btn--soft { --_bg: var(--primary-soft); --_fg: var(--primary-soft-tx); }
  .fab-btn--soft:hover:not([disabled]) { --_bg: var(--primary-soft-hover); }

  .fab-btn--danger { --_bg: var(--danger); --_fg: var(--text-on-color); box-shadow: var(--shadow-xs); }
  .fab-btn--danger:hover:not([disabled]) { --_bg: var(--danger-hover); }

  .fab-btn--block { display: flex; width: 100%; }
  `;
  document.head.appendChild(el);
}
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  leadingIcon = null,
  trailingIcon = null,
  className = '',
  children,
  ...rest
}) {
  const classes = ['fab-btn', `fab-btn--${variant}`, `fab-btn--${size}`, block ? 'fab-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes
  }, rest), leadingIcon, children != null && /*#__PURE__*/React.createElement("span", null, children), trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'fabric-checkbox-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-check { display: inline-flex; align-items: flex-start; gap: var(--space-3); cursor: pointer; }
  .fab-check[data-disabled="true"] { opacity: 0.5; cursor: not-allowed; }
  .fab-check__box {
    flex: none; width: 20px; height: 20px; margin-top: 1px;
    border: var(--border-thin) solid var(--border-strong);
    border-radius: var(--radius-sm); background: var(--surface-raised);
    display: flex; align-items: center; justify-content: center;
    transition: background var(--duration-fast) var(--ease-out),
                border-color var(--duration-fast) var(--ease-out);
  }
  .fab-check__box svg { width: 13px; height: 13px; stroke: var(--text-on-sage); stroke-width: 3;
    fill: none; stroke-linecap: round; stroke-linejoin: round;
    opacity: 0; transform: scale(0.5);
    /* Spring pop — flutter easing so the checkmark snaps into place */
    transition: opacity var(--duration-fast) var(--ease-out),
                transform var(--duration-slow) var(--ease-flutter); }
  .fab-check input { position: absolute; opacity: 0; width: 0; height: 0; }
  .fab-check input:checked + .fab-check__box { background: var(--primary); border-color: var(--primary); }
  .fab-check input:checked + .fab-check__box svg { opacity: 1; transform: scale(1); }
  .fab-check input:focus-visible + .fab-check__box { outline: var(--border-thick) solid var(--focus-ring); outline-offset: 2px; }
  .fab-check__body { display: flex; flex-direction: column; gap: 2px; }
  .fab-check__label { font-family: var(--font-body); font-size: var(--text-sm); color: var(--text-strong); line-height: var(--leading-snug); }
  .fab-check__desc { font-size: var(--text-xs); color: var(--text-muted); }
  `;
  document.head.appendChild(el);
}
function Checkbox({
  label,
  description,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['fab-check', className].filter(Boolean).join(' '),
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "fab-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "3.5 8.5 6.5 11.5 12.5 4.5"
  }))), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "fab-check__body"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "fab-check__label"
  }, label), description && /*#__PURE__*/React.createElement("span", {
    className: "fab-check__desc"
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'fabric-iconbutton-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-iconbtn {
    display: inline-flex; align-items: center; justify-content: center;
    border: var(--border-thin) solid transparent;
    background: transparent; color: var(--text-body);
    border-radius: var(--radius-md); cursor: pointer;
    /* Release: --ease-settle (linen) */
    transition: background var(--duration-fast) var(--ease-out),
                color var(--duration-fast) var(--ease-out),
                border-color var(--duration-fast) var(--ease-out),
                transform var(--duration-slow) var(--ease-settle);
  }
  .fab-iconbtn:focus-visible { outline: var(--border-thick) solid var(--focus-ring); outline-offset: 2px; }
  .fab-iconbtn:active {
    transform: scale(0.88);
    /* Press: --ease-press (clay) */
    transition: background 70ms var(--ease-out),
                color 70ms var(--ease-out),
                border-color 70ms var(--ease-out),
                transform 70ms var(--ease-press);
  }
  .fab-iconbtn[disabled] { opacity: 0.4; cursor: not-allowed; transform: none; }
  .fab-iconbtn--sm { width: 32px; height: 32px; }
  .fab-iconbtn--md { width: 40px; height: 40px; }
  .fab-iconbtn--lg { width: 48px; height: 48px; }
  .fab-iconbtn--ghost:hover:not([disabled]) { background: var(--hover-wash); color: var(--text-strong); }
  .fab-iconbtn--soft { background: var(--primary-soft); color: var(--primary-soft-tx); }
  .fab-iconbtn--soft:hover:not([disabled]) { background: var(--primary-soft-hover); }
  .fab-iconbtn--outline { border-color: var(--border-default); background: var(--surface-card); }
  .fab-iconbtn--outline:hover:not([disabled]) { border-color: var(--border-strong); background: var(--surface-raised); }
  `;
  document.head.appendChild(el);
}
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  const classes = ['fab-iconbtn', `fab-iconbtn--${variant}`, `fab-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'fabric-input-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-field { display: flex; flex-direction: column; gap: var(--space-2); }
  .fab-field__label {
    font-family: var(--font-body); font-size: var(--text-sm);
    font-weight: var(--weight-medium); color: var(--text-strong);
  }
  .fab-field__req { color: var(--accent-warm); margin-left: 2px; }
  .fab-field__hint { font-size: var(--text-xs); color: var(--text-muted); }
  .fab-field__error { font-size: var(--text-xs); color: var(--danger); }

  .fab-input-wrap { position: relative; display: flex; align-items: center; }
  .fab-input-wrap__icon {
    position: absolute; left: var(--space-3); display: flex;
    color: var(--text-faint); pointer-events: none;
  }
  .fab-input-wrap__icon ~ .fab-input { padding-left: calc(var(--space-3) + 24px); }

  .fab-input {
    width: 100%;
    font-family: var(--font-body); font-size: var(--text-sm);
    color: var(--text-body); background: var(--surface-raised);
    border: var(--border-thin) solid var(--border-default);
    border-radius: var(--radius-md);
    padding: 0 var(--space-3); height: 40px;
    transition: border-color var(--duration-fast) var(--ease-out),
                /* Focus ring blooms outward — settle gives a whisper of give */
                box-shadow var(--duration-base) var(--ease-settle);
  }
  .fab-input::placeholder { color: var(--text-faint); }
  .fab-input:hover:not(:disabled):not(:focus) { border-color: var(--border-strong); }
  .fab-input:focus {
    outline: none; border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-soft);
  }
  .fab-input:disabled { background: var(--surface-sunken); color: var(--text-faint); cursor: not-allowed; }
  .fab-input--invalid { border-color: var(--danger); }
  .fab-input--invalid:focus { box-shadow: 0 0 0 3px var(--danger-soft); }
  .fab-input--sm { height: 32px; font-size: var(--text-sm); }
  .fab-input--lg { height: 48px; font-size: var(--text-base); }
  `;
  document.head.appendChild(el);
}
function Input({
  label,
  hint,
  error,
  required = false,
  size = 'md',
  leadingIcon = null,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `fab-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const input = /*#__PURE__*/React.createElement("div", {
    className: "fab-input-wrap"
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "fab-input-wrap__icon"
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: ['fab-input', size !== 'md' ? `fab-input--${size}` : '', error ? 'fab-input--invalid' : '', className].filter(Boolean).join(' '),
    "aria-invalid": !!error
  }, rest)));
  if (!label && !hint && !error) return input;
  return /*#__PURE__*/React.createElement("div", {
    className: "fab-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "fab-field__label",
    htmlFor: inputId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "fab-field__req"
  }, "*")), input, error ? /*#__PURE__*/React.createElement("span", {
    className: "fab-field__error"
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "fab-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'fabric-select-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-sel-field { display: flex; flex-direction: column; gap: var(--space-2); }
  .fab-sel-field__label {
    font-family: var(--font-body); font-size: var(--text-sm);
    font-weight: var(--weight-medium); color: var(--text-strong);
  }
  .fab-sel-wrap { position: relative; display: flex; align-items: center; }
  .fab-sel-wrap::after {
    content: ""; position: absolute; right: var(--space-3); width: 9px; height: 9px;
    border-right: 1.5px solid var(--text-muted); border-bottom: 1.5px solid var(--text-muted);
    transform: translateY(-2px) rotate(45deg); pointer-events: none;
  }
  .fab-select {
    width: 100%; appearance: none;
    font-family: var(--font-body); font-size: var(--text-sm);
    color: var(--text-body); background: var(--surface-raised);
    border: var(--border-thin) solid var(--border-default);
    border-radius: var(--radius-md);
    padding: 0 calc(var(--space-5) + 4px) 0 var(--space-3); height: 40px;
    cursor: pointer;
    transition: border-color var(--duration-fast) var(--ease-out),
                /* Focus ring blooms outward — settle gives a whisper of give */
                box-shadow var(--duration-base) var(--ease-settle);
  }
  .fab-select:hover:not(:disabled):not(:focus) { border-color: var(--border-strong); }
  .fab-select:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-soft); }
  .fab-select:disabled { background: var(--surface-sunken); color: var(--text-faint); cursor: not-allowed; }
  `;
  document.head.appendChild(el);
}
function Select({
  label,
  id,
  options = [],
  placeholder,
  className = '',
  children,
  ...rest
}) {
  const selId = id || (label ? `fabsel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const sel = /*#__PURE__*/React.createElement("div", {
    className: "fab-sel-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    className: ['fab-select', className].filter(Boolean).join(' ')
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const labelText = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, labelText);
  }), children));
  if (!label) return sel;
  return /*#__PURE__*/React.createElement("div", {
    className: "fab-sel-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "fab-sel-field__label",
    htmlFor: selId
  }, label), sel);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'fabric-switch-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-switch { display: inline-flex; align-items: center; gap: var(--space-3); cursor: pointer; }
  .fab-switch[data-disabled="true"] { opacity: 0.5; cursor: not-allowed; }
  .fab-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
  .fab-switch__track {
    flex: none; width: 40px; height: 24px; border-radius: var(--radius-pill);
    background: var(--control-track); box-shadow: var(--shadow-inset);
    position: relative; transition: background var(--duration-base) var(--ease-out);
  }
  .fab-switch__thumb {
    position: absolute; top: 3px; left: 3px; width: 18px; height: 18px;
    border-radius: var(--radius-pill); background: var(--control-thumb);
    box-shadow: var(--shadow-sm);
    /* Flutter (dried grass): springs past target and settles — snappy and alive */
    transition: transform var(--duration-slow) var(--ease-flutter);
  }
  .fab-switch input:checked + .fab-switch__track { background: var(--primary); }
  .fab-switch input:checked + .fab-switch__track .fab-switch__thumb { transform: translateX(16px); }
  .fab-switch input:focus-visible + .fab-switch__track { outline: var(--border-thick) solid var(--focus-ring); outline-offset: 2px; }
  .fab-switch__label { font-family: var(--font-body); font-size: var(--text-sm); color: var(--text-strong); }
  `;
  document.head.appendChild(el);
}
function Switch({
  label,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['fab-switch', className].filter(Boolean).join(' '),
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "fab-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fab-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "fab-switch__label"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'fabric-textarea-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-ta-field { display: flex; flex-direction: column; gap: var(--space-2); }
  .fab-ta-field__label {
    font-family: var(--font-body); font-size: var(--text-sm);
    font-weight: var(--weight-medium); color: var(--text-strong);
  }
  .fab-ta-field__hint { font-size: var(--text-xs); color: var(--text-muted); }
  .fab-ta-field__error { font-size: var(--text-xs); color: var(--danger); }
  .fab-textarea {
    width: 100%; resize: vertical; min-height: 96px;
    font-family: var(--font-body); font-size: var(--text-sm);
    line-height: var(--leading-normal);
    color: var(--text-body); background: var(--surface-raised);
    border: var(--border-thin) solid var(--border-default);
    border-radius: var(--radius-md);
    padding: var(--space-3);
    transition: border-color var(--duration-fast) var(--ease-out),
                box-shadow var(--duration-fast) var(--ease-out);
  }
  .fab-textarea::placeholder { color: var(--text-faint); }
  .fab-textarea:hover:not(:disabled):not(:focus) { border-color: var(--border-strong); }
  .fab-textarea:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-soft); }
  .fab-textarea:disabled { background: var(--surface-sunken); color: var(--text-faint); cursor: not-allowed; }
  .fab-textarea--invalid { border-color: var(--danger); }
  .fab-textarea--invalid:focus { box-shadow: 0 0 0 3px var(--danger-soft); }
  `;
  document.head.appendChild(el);
}
function Textarea({
  label,
  hint,
  error,
  id,
  className = '',
  ...rest
}) {
  const taId = id || (label ? `fabta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const ta = /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    className: ['fab-textarea', error ? 'fab-textarea--invalid' : '', className].filter(Boolean).join(' '),
    "aria-invalid": !!error
  }, rest));
  if (!label && !hint && !error) return ta;
  return /*#__PURE__*/React.createElement("div", {
    className: "fab-ta-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "fab-ta-field__label",
    htmlFor: taId
  }, label), ta, error ? /*#__PURE__*/React.createElement("span", {
    className: "fab-ta-field__error"
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "fab-ta-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'fabric-avatar-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-avatar {
    flex: none; display: inline-flex; align-items: center; justify-content: center;
    border-radius: var(--radius-pill); overflow: hidden;
    font-family: var(--font-body); font-weight: var(--weight-semibold);
    color: var(--text-on-color); background: var(--sage-500);
    user-select: none; line-height: 1;
  }
  .fab-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .fab-avatar--xs { width: 24px; height: 24px; font-size: 10px; }
  .fab-avatar--sm { width: 32px; height: 32px; font-size: 12px; }
  .fab-avatar--md { width: 40px; height: 40px; font-size: 15px; }
  .fab-avatar--lg { width: 56px; height: 56px; font-size: 20px; }
  .fab-avatar--ring { box-shadow: 0 0 0 2px var(--surface-card), 0 0 0 3.5px var(--border-default); }
  `;
  document.head.appendChild(el);
}
const TONES = ['var(--sage-500)', 'var(--terracotta-500)', 'var(--ochre-600)', 'var(--marsh-500)', 'var(--stone-600)'];
function toneFor(name = '') {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = h * 31 + name.charCodeAt(i) >>> 0;
  return TONES[h % TONES.length];
}
function initials(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  return (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase();
}
function Avatar({
  name = '',
  src,
  size = 'md',
  ring = false,
  className = '',
  style = {},
  ...rest
}) {
  const classes = ['fab-avatar', `fab-avatar--${size}`, ring ? 'fab-avatar--ring' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes,
    style: src ? style : {
      background: toneFor(name),
      ...style
    },
    title: name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'fabric-card-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-card {
    background: var(--surface-card);
    border: var(--border-hairline) solid var(--border-subtle);
    border-radius: var(--radius-xl);
    color: var(--text-body);
    /* Hover lift settles with linen ease; other props stay snappy */
    transition: box-shadow var(--duration-slow) var(--ease-settle),
                border-color var(--duration-base) var(--ease-out),
                transform var(--duration-slow) var(--ease-settle);
  }
  .fab-card--flat { box-shadow: none; }
  .fab-card--raised { box-shadow: var(--shadow-sm); }
  .fab-card--floating { box-shadow: var(--shadow-lg); border-color: transparent; }
  .fab-card--pad-sm { padding: var(--space-4); }
  .fab-card--pad-md { padding: var(--space-5); }
  .fab-card--pad-lg { padding: var(--space-6); }
  .fab-card--interactive { cursor: pointer; }
  .fab-card--interactive:hover { box-shadow: var(--shadow-md); border-color: var(--border-default); transform: translateY(-1px); }
  .fab-card--interactive:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
  `;
  document.head.appendChild(el);
}
function Card({
  elevation = 'raised',
  padding = 'md',
  interactive = false,
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}) {
  const classes = ['fab-card', `fab-card--${elevation}`, `fab-card--pad-${padding}`, interactive ? 'fab-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'fabric-divider-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-divider { border: 0; background: var(--border-subtle); }
  .fab-divider--h { width: 100%; height: 1px; margin: var(--space-5) 0; }
  .fab-divider--v { width: 1px; align-self: stretch; margin: 0 var(--space-4); }
  /* Running-stitch (dashed thread) variant */
  .fab-divider--stitch.fab-divider--h { height: 2px; background: transparent;
    background-image: repeating-linear-gradient(90deg, var(--border-default) 0 6px, transparent 6px 11px); }
  .fab-divider--stitch.fab-divider--v { width: 2px; background: transparent;
    background-image: repeating-linear-gradient(0deg, var(--border-default) 0 6px, transparent 6px 11px); }
  .fab-divider-labeled { display: flex; align-items: center; gap: var(--space-3); margin: var(--space-5) 0; }
  .fab-divider-labeled::before, .fab-divider-labeled::after {
    content: ""; flex: 1; height: 1px; background: var(--border-subtle);
  }
  .fab-divider-labeled--stitch::before, .fab-divider-labeled--stitch::after {
    height: 2px; background: transparent;
    background-image: repeating-linear-gradient(90deg, var(--border-default) 0 6px, transparent 6px 11px);
  }
  .fab-divider-labeled__text {
    font-family: var(--font-data); font-size: var(--text-2xs);
    letter-spacing: var(--tracking-eyebrow); text-transform: uppercase;
    color: var(--text-faint);
  }
  `;
  document.head.appendChild(el);
}
function Divider({
  orientation = 'horizontal',
  variant = 'solid',
  label,
  className = '',
  ...rest
}) {
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ['fab-divider-labeled', variant === 'stitch' ? 'fab-divider-labeled--stitch' : '', className].filter(Boolean).join(' ')
    }, rest), /*#__PURE__*/React.createElement("span", {
      className: "fab-divider-labeled__text"
    }, label));
  }
  const o = orientation === 'vertical' ? 'v' : 'h';
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: ['fab-divider', `fab-divider--${o}`, variant === 'stitch' ? 'fab-divider--stitch' : '', className].filter(Boolean).join(' ')
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Divider.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'fabric-tabs-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-tabs { display: inline-flex; }
  .fab-tabs--line { gap: var(--space-5); border-bottom: var(--border-hairline) solid var(--border-subtle); }
  .fab-tabs--line .fab-tab {
    position: relative; background: none; border: 0; cursor: pointer;
    font-family: var(--font-body); font-size: var(--text-sm); font-weight: var(--weight-medium);
    color: var(--text-muted); padding: var(--space-3) 0; display: inline-flex; align-items: center; gap: var(--space-2);
    transition: color var(--duration-fast) var(--ease-out);
  }
  .fab-tabs--line .fab-tab::after {
    content: ""; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px;
    background: var(--primary); border-radius: 2px 2px 0 0;
    opacity: 0; transform: scaleX(0.5);
    /* Bar snaps in: fast fade, then spring-expand with settle */
    transition: opacity var(--duration-fast) var(--ease-out),
                transform var(--duration-slow) var(--ease-settle);
  }
  .fab-tabs--line .fab-tab:hover { color: var(--text-body); }
  .fab-tabs--line .fab-tab[data-active="true"] { color: var(--text-strong); }
  .fab-tabs--line .fab-tab[data-active="true"]::after { opacity: 1; transform: scaleX(1); }

  .fab-tabs--pill { gap: 3px; background: var(--surface-sunken); padding: 3px; border-radius: var(--radius-md); }
  .fab-tabs--pill .fab-tab {
    background: none; border: 0; cursor: pointer; border-radius: var(--radius-sm);
    font-family: var(--font-body); font-size: var(--text-sm); font-weight: var(--weight-medium);
    color: var(--text-muted); padding: var(--space-2) var(--space-4);
    transition: color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out);
  }
  .fab-tabs--pill .fab-tab:hover { color: var(--text-body); }
  .fab-tabs--pill .fab-tab[data-active="true"] { background: var(--surface-raised); color: var(--text-strong); box-shadow: var(--shadow-xs); }
  .fab-tab__count { font-family: var(--font-data); font-size: var(--text-2xs); color: var(--text-faint); }
  .fab-tab:focus-visible { outline: var(--border-thick) solid var(--focus-ring); outline-offset: 2px; border-radius: var(--radius-sm); }
  `;
  document.head.appendChild(el);
}
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'line',
  className = '',
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: ['fab-tabs', `fab-tabs--${variant}`, className].filter(Boolean).join(' ')
  }, rest), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    type: "button",
    className: "fab-tab",
    "data-active": active === it.value,
    "aria-selected": active === it.value,
    onClick: () => select(it.value)
  }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "fab-tab__count"
  }, it.count))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/App.jsx
try { (() => {
function App() {
  const {
    Tabs,
    IconButton,
    Tooltip
  } = window.FabricDesignSystem_7bb975;
  const {
    Sidebar,
    TaskRow,
    Composer,
    FocusRail,
    Login,
    LISTS,
    SEED_TASKS,
    SEASONS,
    seasonById
  } = window.FabricApp;
  const Icon = window.Icon;
  const [screen, setScreen] = React.useState(() => localStorage.getItem('fabric.screen') || 'login');
  const [theme, setTheme] = React.useState(() => {
    const saved = localStorage.getItem('fabric.theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [view, setView] = React.useState('today');
  const [season, setSeason] = React.useState(() => localStorage.getItem('fabric.season') || 'spring');
  const [activeList, setActiveList] = React.useState(null);
  const [filter, setFilter] = React.useState('all');
  const [tasks, setTasks] = React.useState(SEED_TASKS);
  const [nextId, setNextId] = React.useState(100);
  React.useEffect(() => {
    localStorage.setItem('fabric.screen', screen);
  }, [screen]);
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('fabric.theme', theme);
  }, [theme]);
  React.useEffect(() => {
    document.documentElement.dataset.season = season;
    localStorage.setItem('fabric.season', season);
  }, [season]);
  const toggle = id => setTasks(ts => ts.map(t => t.id === id ? {
    ...t,
    done: !t.done
  } : t));
  const add = title => {
    setTasks(ts => [{
      id: 't' + nextId,
      title,
      list: activeList || 'studio',
      estimate: '25m',
      view: activeList ? 'today' : view,
      done: false
    }, ...ts]);
    setNextId(n => n + 1);
  };
  const counts = {
    today: tasks.filter(t => t.view === 'today' && !t.done).length,
    later: tasks.filter(t => t.view === 'later' && !t.done).length,
    done: tasks.filter(t => t.done).length
  };

  // What to show
  let visible;
  if (activeList) visible = tasks.filter(t => t.list === activeList);else if (view === 'done') visible = tasks.filter(t => t.done);else visible = tasks.filter(t => t.view === view);
  if (filter === 'active') visible = visible.filter(t => !t.done);
  if (filter === 'completed') visible = visible.filter(t => t.done);
  const activeListObj = activeList ? LISTS.find(l => l.id === activeList) : null;
  const TITLES = {
    today: ['Today', longDate()],
    later: ['Later', 'When you have room'],
    done: ['Done', 'Look how far you’ve come']
  };
  const [title, sub] = activeListObj ? [activeListObj.label, `${visible.length} in this list`] : TITLES[view];
  const focusTask = tasks.find(t => t.view === 'today' && !t.done);
  const showComposer = !activeList ? view !== 'done' : true;
  const seasonObj = seasonById(season);
  if (screen === 'login') return /*#__PURE__*/React.createElement(Login, {
    onEnter: () => setScreen('app')
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "fa-shell"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    view: view,
    setView: setView,
    counts: counts,
    lists: LISTS,
    activeList: activeList,
    setActiveList: setActiveList,
    seasons: SEASONS,
    season: season,
    setSeason: setSeason
  }), /*#__PURE__*/React.createElement("main", {
    className: "fa-main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "fa-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fa-head__titles"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "fa-head__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "fa-head__sub"
  }, sub)), /*#__PURE__*/React.createElement("div", {
    className: "fa-head__actions"
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: filter,
    onChange: setFilter,
    items: [{
      value: 'all',
      label: 'All'
    }, {
      value: 'active',
      label: 'Active'
    }, {
      value: 'completed',
      label: 'Done'
    }]
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: theme === 'dark' ? 'Daylight' : 'Nightfall'
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Toggle theme",
    variant: "outline",
    onClick: () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'dark' ? 'sun' : 'moon',
    size: 18
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Search"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Search",
    variant: "outline"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "fa-list"
  }, showComposer && /*#__PURE__*/React.createElement(Composer, {
    onAdd: add
  }), visible.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "fa-empty"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "wind",
    size: 26
  }), /*#__PURE__*/React.createElement("p", null, "Nothing here. Enjoy the quiet.")), visible.map(t => /*#__PURE__*/React.createElement(TaskRow, {
    key: t.id,
    task: t,
    onToggle: toggle
  })))), /*#__PURE__*/React.createElement(FocusRail, {
    focusTask: focusTask,
    seasonTexture: seasonObj.texture,
    seasonLabel: seasonObj.label,
    seasonNote: seasonObj.note
  }));
}
function longDate() {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
}
window.FabricApp.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/FocusRail.jsx
try { (() => {
function FocusRail({
  focusTask,
  seasonTexture,
  seasonLabel,
  seasonNote
}) {
  const {
    Card,
    Button,
    IconButton,
    Divider
  } = window.FabricDesignSystem_7bb975;
  const Icon = window.Icon;
  const TOTAL = 25 * 60;
  const [left, setLeft] = React.useState(TOTAL);
  const [running, setRunning] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (running) {
      ref.current = setInterval(() => {
        setLeft(s => s <= 1 ? (clearInterval(ref.current), setRunning(false), 0) : s - 1);
      }, 1000);
    }
    return () => clearInterval(ref.current);
  }, [running]);
  const mm = String(Math.floor(left / 60)).padStart(2, '0');
  const ss = String(left % 60).padStart(2, '0');
  const pct = (TOTAL - left) / TOTAL * 100;
  return /*#__PURE__*/React.createElement("div", {
    className: 'fa-rail ' + (seasonTexture || '')
  }, /*#__PURE__*/React.createElement(Card, {
    elevation: "raised",
    padding: "lg",
    className: "fa-focus"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fa-focus__eyebrow"
  }, "// Focus session"), /*#__PURE__*/React.createElement("div", {
    className: "fa-focus__task"
  }, focusTask ? focusTask.title : 'Pick something small'), /*#__PURE__*/React.createElement("div", {
    className: "fa-focus__clock"
  }, mm, ":", ss), /*#__PURE__*/React.createElement("div", {
    className: "fa-focus__track"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: pct + '%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fa-focus__controls"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: running ? 'secondary' : 'primary',
    block: true,
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: running ? 'pause' : 'play',
      size: 17
    }),
    onClick: () => setRunning(r => !r)
  }, running ? 'Pause' : 'Begin focus'), /*#__PURE__*/React.createElement(IconButton, {
    label: "Reset",
    variant: "ghost",
    onClick: () => {
      setRunning(false);
      setLeft(TOTAL);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "rotate-ccw",
    size: 18
  })))), /*#__PURE__*/React.createElement(Card, {
    elevation: "flat",
    padding: "lg",
    className: "fa-intention"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fa-intention__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fa-focus__eyebrow"
  }, "// Today\u2019s intention"), /*#__PURE__*/React.createElement("span", {
    className: "fa-season-chip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa-season-chip__dot"
  }), seasonLabel)), /*#__PURE__*/React.createElement("p", {
    className: "fa-intention__text"
  }, "Make one thing well. Leave the rest for tomorrow \u2014 it will keep."), /*#__PURE__*/React.createElement(Divider, {
    variant: "stitch"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fa-streak"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sprout",
    size: 18,
    className: "fa-streak__icon"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "6 days"), " of unhurried mornings"))));
}
window.FabricApp.FocusRail = FocusRail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/FocusRail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Login.jsx
try { (() => {
function Login({
  onEnter
}) {
  const {
    Card,
    Button,
    Input,
    Divider
  } = window.FabricDesignSystem_7bb975;
  const Icon = window.Icon;
  return /*#__PURE__*/React.createElement("div", {
    className: "fa-login fabric-weave"
  }, /*#__PURE__*/React.createElement(Card, {
    elevation: "floating",
    padding: "lg",
    className: "fa-login__card"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/fabric-mark.svg",
    alt: "",
    width: "40",
    height: "40",
    className: "fa-login__mark"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "fa-login__title"
  }, "Welcome back"), /*#__PURE__*/React.createElement("p", {
    className: "fa-login__sub"
  }, "A quiet place to do one thing at a time."), /*#__PURE__*/React.createElement("div", {
    className: "fa-login__form"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@studio.com",
    defaultValue: "wren@aldous.studio"
  }), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: onEnter
  }, "Enter your studio")), /*#__PURE__*/React.createElement(Divider, {
    label: "or",
    variant: "stitch"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    block: true,
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "key-round",
      size: 17
    }),
    onClick: onEnter
  }, "Continue with a passphrase")), /*#__PURE__*/React.createElement("p", {
    className: "fa-login__foot"
  }, "Made from nature \xB7 Fabric"));
}
window.FabricApp.Login = Login;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Sidebar.jsx
try { (() => {
function Sidebar({
  view,
  setView,
  counts,
  lists,
  activeList,
  setActiveList,
  seasons,
  season,
  setSeason
}) {
  const {
    Avatar,
    Tooltip
  } = window.FabricDesignSystem_7bb975;
  const Icon = window.Icon;
  const nav = [{
    id: 'today',
    label: 'Today',
    icon: 'sun'
  }, {
    id: 'later',
    label: 'Later',
    icon: 'moon'
  }, {
    id: 'done',
    label: 'Done',
    icon: 'check-check'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "fa-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fa-side__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/fabric-mark.svg",
    alt: "",
    width: "26",
    height: "26"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fa-side__word"
  }, "Fabric")), /*#__PURE__*/React.createElement("nav", {
    className: "fa-side__nav"
  }, nav.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    className: "fa-navitem",
    "data-active": view === n.id && !activeList,
    onClick: () => {
      setView(n.id);
      setActiveList(null);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n.icon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, n.label), counts[n.id] > 0 && /*#__PURE__*/React.createElement("span", {
    className: "fa-navitem__count"
  }, counts[n.id])))), /*#__PURE__*/React.createElement("div", {
    className: "fa-side__section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fa-side__sectionlabel"
  }, "Lists"), lists.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    className: "fa-navitem fa-navitem--list",
    "data-active": activeList === l.id,
    onClick: () => {
      setActiveList(l.id);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa-dot",
    style: {
      background: l.color
    }
  }), /*#__PURE__*/React.createElement("span", null, l.label)))), /*#__PURE__*/React.createElement("div", {
    className: "fa-side__season"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fa-side__sectionlabel"
  }, "Season"), /*#__PURE__*/React.createElement("div", {
    className: "fa-season"
  }, seasons.map(s => /*#__PURE__*/React.createElement(Tooltip, {
    key: s.id,
    label: `${s.label} · ${s.note}`
  }, /*#__PURE__*/React.createElement("button", {
    className: "fa-season__btn",
    "data-season": s.id,
    "data-active": season === s.id,
    "aria-label": s.label,
    onClick: () => setSeason(s.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 18
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "fa-side__foot"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Wren Aldous",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fa-side__person"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa-side__name"
  }, "Wren Aldous"), /*#__PURE__*/React.createElement("span", {
    className: "fa-side__studio"
  }, "Aldous Studio")), /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 17,
    className: "fa-side__cog"
  })));
}
window.FabricApp.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/TaskList.jsx
try { (() => {
function TaskRow({
  task,
  onToggle
}) {
  const {
    Checkbox,
    Tag
  } = window.FabricDesignSystem_7bb975;
  const Icon = window.Icon;
  const list = window.FabricApp.listById(task.list);
  return /*#__PURE__*/React.createElement("div", {
    className: "fa-task",
    "data-done": task.done
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: task.done,
    onChange: () => onToggle(task.id)
  }), /*#__PURE__*/React.createElement("span", {
    className: "fa-task__title"
  }, task.title), /*#__PURE__*/React.createElement("span", {
    className: "fa-task__meta"
  }, /*#__PURE__*/React.createElement(Tag, {
    color: list.color
  }, list.label), /*#__PURE__*/React.createElement("span", {
    className: "fa-task__est"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 13
  }), task.estimate)));
}
function Composer({
  onAdd
}) {
  const {
    Button
  } = window.FabricDesignSystem_7bb975;
  const Icon = window.Icon;
  const [val, setVal] = React.useState('');
  const submit = () => {
    const v = val.trim();
    if (!v) return;
    onAdd(v);
    setVal('');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fa-composer"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18,
    className: "fa-composer__plus"
  }), /*#__PURE__*/React.createElement("input", {
    className: "fa-composer__input",
    placeholder: "Add a task \u2014 keep it small",
    value: val,
    onChange: e => setVal(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') submit();
    }
  }), val.trim() && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: submit
  }, "Add"));
}
window.FabricApp.TaskRow = TaskRow;
window.FabricApp.Composer = Composer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/TaskList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.jsx
try { (() => {
/* Seed data for the Fabric workspace prototype. */
const LISTS = [{
  id: 'writing',
  label: 'Writing',
  color: 'var(--terracotta-500)'
}, {
  id: 'studio',
  label: 'Studio',
  color: 'var(--sage-500)'
}, {
  id: 'admin',
  label: 'Admin',
  color: 'var(--marsh-500)'
}, {
  id: 'reading',
  label: 'Reading',
  color: 'var(--ochre-600)'
}];
const SEED_TASKS = [{
  id: 't1',
  title: 'Draft the spring field notes',
  list: 'writing',
  estimate: '50m',
  view: 'today',
  done: false
}, {
  id: 't2',
  title: 'Review Mara’s loom studies',
  list: 'studio',
  estimate: '25m',
  view: 'today',
  done: false
}, {
  id: 't3',
  title: 'Reply to the residency invitation',
  list: 'admin',
  estimate: '10m',
  view: 'today',
  done: false
}, {
  id: 't4',
  title: 'Walk — leave the phone at home',
  list: 'reading',
  estimate: '30m',
  view: 'today',
  done: true
}, {
  id: 't5',
  title: 'Sketch three cover directions',
  list: 'studio',
  estimate: '45m',
  view: 'later',
  done: false
}, {
  id: 't6',
  title: 'Gather references for the dye essay',
  list: 'reading',
  estimate: '20m',
  view: 'later',
  done: false
}, {
  id: 't7',
  title: 'Send the quarter close to Theo',
  list: 'admin',
  estimate: '15m',
  view: 'later',
  done: false
}, {
  id: 't8',
  title: 'File the studio lease renewal',
  list: 'admin',
  estimate: '15m',
  view: 'done',
  done: true
}, {
  id: 't9',
  title: 'Finish reading the Morris chapter',
  list: 'reading',
  estimate: '40m',
  view: 'done',
  done: true
}, {
  id: 't10',
  title: 'Outline the natural-dye workshop',
  list: 'writing',
  estimate: '35m',
  view: 'done',
  done: true
}];
window.FabricApp = window.FabricApp || {};
window.FabricApp.LISTS = LISTS;
window.FabricApp.SEED_TASKS = SEED_TASKS;
window.FabricApp.listById = id => LISTS.find(l => l.id === id) || LISTS[0];
const SEASONS = [{
  id: 'spring',
  label: 'Spring',
  icon: 'sprout',
  texture: 'fabric-weave',
  note: 'New growth'
}, {
  id: 'summer',
  label: 'Summer',
  icon: 'sun',
  texture: 'fabric-ribbed',
  note: 'Long light'
}, {
  id: 'autumn',
  label: 'Autumn',
  icon: 'leaf',
  texture: 'fabric-felt',
  note: 'Turning leaves'
}, {
  id: 'winter',
  label: 'Winter',
  icon: 'snowflake',
  texture: 'fabric-frost',
  note: 'Quiet frost'
}];
window.FabricApp.SEASONS = SEASONS;
window.FabricApp.seasonById = id => SEASONS.find(s => s.id === id) || SEASONS[0];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/icons.jsx
try { (() => {
/* Inline-SVG Lucide icon — avoids React/lucide DOM-swap issues by rendering
   the SVG markup directly from lucide's icon node data. */
function Icon({
  name,
  size = 20,
  stroke = 1.75,
  className = '',
  style = {}
}) {
  const L = window.lucide;
  const pascal = name.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
  const node = L && L.icons && L.icons[pascal];
  const inner = node ? node[2].map(([t, a]) => '<' + t + ' ' + Object.entries(a).map(([k, v]) => `${k}="${v}"`).join(' ') + '></' + t + '>').join('') : '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
  return /*#__PURE__*/React.createElement("span", {
    className: 'lic ' + className,
    style: {
      display: 'inline-flex',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Site.jsx
try { (() => {
/* Fabric marketing site — composed from the design-system primitives. */
const {
  Button,
  Badge,
  Card,
  Checkbox,
  Tag,
  Input,
  Avatar
} = window.FabricDesignSystem_7bb975;
const Icon = window.Icon;
function Nav() {
  return /*#__PURE__*/React.createElement("header", {
    className: "st-nav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "st-nav__brand",
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/fabric-mark.svg",
    alt: "",
    width: "28",
    height: "28"
  }), /*#__PURE__*/React.createElement("span", null, "Fabric")), /*#__PURE__*/React.createElement("nav", {
    className: "st-nav__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#craft"
  }, "Craft"), /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, "Product"), /*#__PURE__*/React.createElement("a", {
    href: "#studio"
  }, "Studio"), /*#__PURE__*/React.createElement("a", {
    href: "#journal"
  }, "Journal")), /*#__PURE__*/React.createElement("div", {
    className: "st-nav__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Start free")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "st-hero fabric-weave"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-hero__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fabric-eyebrow"
  }, "// Made from nature"), /*#__PURE__*/React.createElement("h1", {
    className: "st-hero__title"
  }, "Calm tools for focused work."), /*#__PURE__*/React.createElement("p", {
    className: "st-hero__sub"
  }, "Fabric is a quiet workspace for one thing at a time. No streaks to chase, no badges to earn \u2014 just a soft place to do good work and then put it down."), /*#__PURE__*/React.createElement("div", {
    className: "st-hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Begin in the quiet"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 16
    })
  }, "See the craft")), /*#__PURE__*/React.createElement("div", {
    className: "st-hero__note"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sprout",
    size: 16
  }), " Free for makers \xB7 no card, no clock")), /*#__PURE__*/React.createElement(HeroPreview, null));
}
function HeroPreview() {
  const rows = [{
    t: 'Draft the spring field notes',
    list: 'Writing',
    c: 'var(--terracotta-500)',
    done: false,
    est: '50m'
  }, {
    t: 'Review the loom studies',
    list: 'Studio',
    c: 'var(--sage-500)',
    done: false,
    est: '25m'
  }, {
    t: 'Walk — leave the phone at home',
    list: 'Reading',
    c: 'var(--ochre-600)',
    done: true,
    est: '30m'
  }];
  return /*#__PURE__*/React.createElement(Card, {
    elevation: "floating",
    padding: "lg",
    className: "st-preview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-preview__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "st-preview__title"
  }, "Today"), /*#__PURE__*/React.createElement("div", {
    className: "st-preview__date"
  }, "Three small things")), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "On track")), /*#__PURE__*/React.createElement("div", {
    className: "st-preview__rows"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "st-preview__row",
    "data-done": r.done,
    key: i
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: r.done,
    readOnly: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "st-preview__rowtitle"
  }, r.t), /*#__PURE__*/React.createElement(Tag, {
    color: r.c
  }, r.list), /*#__PURE__*/React.createElement("span", {
    className: "st-preview__est"
  }, r.est)))));
}
const FEATURES = [{
  icon: 'target',
  title: 'One thing at a time',
  text: 'A single calm surface. Today holds only what you can actually finish — the rest waits, patiently, in Later.'
}, {
  icon: 'feather',
  title: 'Made to disappear',
  text: 'Muted tones and humanist type let the interface recede so your work, not the tool, holds your attention.'
}, {
  icon: 'leaf',
  title: 'Gentle by default',
  text: 'No streaks, no nagging. Finish what you can, close the laptop, and let tomorrow keep what it keeps.'
}];
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    className: "st-features",
    id: "features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-section__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fabric-eyebrow"
  }, "// The product"), /*#__PURE__*/React.createElement("h2", {
    className: "st-section__title"
  }, "Built to ask less of you.")), /*#__PURE__*/React.createElement("div", {
    className: "st-features__grid"
  }, FEATURES.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.title,
    elevation: "raised",
    padding: "lg",
    className: "st-feature"
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-feature__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    className: "st-feature__title"
  }, f.title), /*#__PURE__*/React.createElement("p", {
    className: "st-feature__text"
  }, f.text)))));
}
function Philosophy() {
  return /*#__PURE__*/React.createElement("section", {
    className: "st-philo fabric-grain",
    id: "craft"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/fabric-mark.svg",
    alt: "",
    width: "44",
    height: "44",
    className: "st-philo__mark"
  }), /*#__PURE__*/React.createElement("blockquote", {
    className: "st-philo__quote"
  }, "\u201CWe made Fabric from the things that calm us \u2014 linen, lichen, clay, the grain of old paper. Software should feel made from nature, too.\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "st-philo__by"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Wren Aldous",
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", null, "Wren Aldous \xB7 founder")));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "st-cta fabric-weave",
    id: "studio"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "st-cta__title"
  }, "Begin in the quiet."), /*#__PURE__*/React.createElement("p", {
    className: "st-cta__sub"
  }, "Your studio is one line away."), /*#__PURE__*/React.createElement("div", {
    className: "st-cta__form"
  }, /*#__PURE__*/React.createElement(Input, {
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 17
    }),
    placeholder: "you@studio.com"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Start free")));
}
function Footer() {
  const cols = [{
    h: 'Product',
    items: ['Overview', 'Focus', 'Lists', 'Changelog']
  }, {
    h: 'Studio',
    items: ['About', 'Craft', 'Journal', 'Careers']
  }, {
    h: 'More',
    items: ['Help', 'Privacy', 'Terms', 'Contact']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "st-foot",
    id: "journal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-foot__brand"
  }, /*#__PURE__*/React.createElement("a", {
    className: "st-nav__brand",
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/fabric-mark.svg",
    alt: "",
    width: "26",
    height: "26"
  }), /*#__PURE__*/React.createElement("span", null, "Fabric")), /*#__PURE__*/React.createElement("p", {
    className: "st-foot__tag"
  }, "Calm tools for focused work.")), /*#__PURE__*/React.createElement("div", {
    className: "st-foot__cols"
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    className: "st-foot__col",
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-foot__h"
  }, c.h), c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#"
  }, i))))), /*#__PURE__*/React.createElement("div", {
    className: "st-foot__fine"
  }, "\xA9 2026 Fabric \xB7 Made from nature"));
}
function Site() {
  return /*#__PURE__*/React.createElement("div", {
    className: "st-page"
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(Philosophy, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.FabricSite = {
  Site
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Site.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/icons.jsx
try { (() => {
/* Inline-SVG Lucide icon — avoids React/lucide DOM-swap issues by rendering
   the SVG markup directly from lucide's icon node data. */
function Icon({
  name,
  size = 20,
  stroke = 1.75,
  className = '',
  style = {}
}) {
  const L = window.lucide;
  const pascal = name.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
  const node = L && L.icons && L.icons[pascal];
  const inner = node ? node[2].map(([t, a]) => '<' + t + ' ' + Object.entries(a).map(([k, v]) => `${k}="${v}"`).join(' ') + '></' + t + '>').join('') : '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
  return /*#__PURE__*/React.createElement("span", {
    className: 'lic ' + className,
    style: {
      display: 'inline-flex',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
