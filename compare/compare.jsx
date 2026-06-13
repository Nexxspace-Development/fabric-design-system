/* Visual comparison of the open design decisions. Each artboard overrides the
   real design tokens locally, so you're seeing the actual proposed change. */

// Full Nightfall semantic set, so a plain <div> subtree reads as dark
// (the dark.css block is scoped to :root, so we apply it inline here).
const DARK = {
  '--surface-canvas': 'oklch(0.205 0.012 58)',
  '--surface-card':   'oklch(0.246 0.013 57)',
  '--surface-raised': 'oklch(0.288 0.014 56)',
  '--surface-sunken': 'oklch(0.172 0.010 58)',
  '--text-strong': 'oklch(0.955 0.008 85)',
  '--text-body':   'oklch(0.882 0.008 82)',
  '--text-muted':  'oklch(0.712 0.012 76)',
  '--text-faint':  'oklch(0.566 0.013 70)',
  '--text-on-sage': 'oklch(0.205 0.014 56)',
  '--border-subtle':  'oklch(0.305 0.012 58)',
  '--border-default': 'oklch(0.368 0.013 58)',
  '--primary': 'var(--sage-400)',
  '--primary-soft': 'oklch(0.318 0.034 147)',
  '--on-primary-soft': 'oklch(0.838 0.040 147)',
  '--control-track': 'oklch(0.368 0.013 58)',
  '--control-thumb': 'oklch(0.860 0.010 82)',
  '--texture-ink': 'hsl(48 24% 82% / 0.055)',
  '--texture-ink-strong': 'hsl(48 24% 82% / 0.11)',
};

const S = {
  fill: (extra) => ({ width: '100%', height: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', ...extra }),
  eyebrow: { fontFamily: 'var(--font-data)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)' },
};

function Btn({ children, soft }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, padding: '9px 16px',
      borderRadius: 'var(--radius-md)', whiteSpace: 'nowrap',
      background: soft ? 'var(--primary-soft)' : 'var(--primary)',
      color: soft ? 'var(--on-primary-soft)' : 'var(--text-on-sage)',
    }}>{children}</span>
  );
}

function Track({ pct = 62 }) {
  return (
    <div style={{ height: 6, background: 'var(--surface-sunken)', borderRadius: 999, overflow: 'hidden', boxShadow: 'var(--shadow-inset)' }}>
      <div style={{ width: pct + '%', height: '100%', background: 'var(--primary)', borderRadius: 999 }} />
    </div>
  );
}

/* ---------- Decision 1: Nightfall contrast ---------- */
function ContrastPanel({ vars }) {
  return (
    <div style={S.fill({ ...DARK, ...vars, background: 'var(--surface-canvas)', padding: 18, display: 'flex', flexDirection: 'column', gap: 12 })}>
      <span style={S.eyebrow}>// canvas</span>
      <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--text-strong)' }}>Card surface</span>
        <div style={{ background: 'var(--surface-raised)', borderRadius: 'var(--radius-md)', padding: '10px 12px', fontSize: 12.5, color: 'var(--text-muted)', boxShadow: 'var(--shadow-md)' }}>
          Raised popover — sits above the card
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontSize: 11, color: 'var(--text-faint)' }}>Sunken track</span>
          <Track pct={58} />
        </div>
      </div>
    </div>
  );
}

/* ---------- Decision 2: Dark primary ---------- */
function PrimaryPanel({ vars }) {
  return (
    <div style={S.fill({ ...DARK, ...vars, background: 'var(--surface-card)', padding: 18, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' })}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Btn>Begin focus</Btn>
        <Btn soft>Later</Btn>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 20, height: 20, borderRadius: 6, background: 'var(--primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="var(--text-on-sage)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
        </span>
        <span style={{ fontSize: 13.5, color: 'var(--text-body)' }}>Checked — primary fill</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontFamily: 'var(--font-data)', fontSize: 22, color: 'var(--text-strong)', letterSpacing: '0.02em' }}>24:00</span>
        <Track pct={70} />
      </div>
    </div>
  );
}

/* ---------- Decision 3: Texture intensity ---------- */
function TexturePanel({ ink, strong, name }) {
  return (
    <div style={S.fill({ '--texture-ink': ink, '--texture-ink-strong': strong, background: 'var(--surface-card)', padding: 16, display: 'flex', flexDirection: 'column', gap: 10 })}>
      <div className="fabric-weave" style={{ flex: 1, background: 'var(--surface-sunken)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <span style={S.eyebrow}>// woven canvas</span>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 21, color: 'var(--text-strong)', lineHeight: 1.1, marginTop: 4 }}>{name}</span>
      </div>
      <div className="fabric-grain" style={{ height: 44, background: 'var(--surface-sunken)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', paddingLeft: 12, fontFamily: 'var(--font-data)', fontSize: 11, color: 'var(--text-muted)' }}>
        grain · paper tooth
      </div>
    </div>
  );
}

function Comparison() {
  const { DesignCanvas, DCSection, DCArtboard, DCPostIt } = window;
  return (
    <DesignCanvas>
      <DCSection id="contrast" title="Nightfall contrast" subtitle="How much the dark surfaces separate from each other">
        <DCArtboard id="c-a" label="A · Calm  (current)" width={340} height={300}>
          <ContrastPanel vars={{}} />
        </DCArtboard>
        <DCArtboard id="c-b" label="B · Lifted" width={340} height={300}>
          <ContrastPanel vars={{
            '--surface-canvas': 'oklch(0.180 0.012 58)',
            '--surface-card':   'oklch(0.258 0.014 57)',
            '--surface-raised': 'oklch(0.320 0.015 56)',
            '--surface-sunken': 'oklch(0.150 0.010 58)',
            '--border-subtle':  'oklch(0.330 0.013 58)',
          }} />
        </DCArtboard>
        <DCPostIt>Calm keeps the page quiet and flat; Lifted makes cards and popovers read more distinctly (better for dense screens / accessibility).</DCPostIt>
      </DCSection>

      <DCSection id="primary" title="Dark primary" subtitle="The Nightfall primary button & accents">
        <DCArtboard id="p-a" label="A · Moonlit moss  (current)" width={300} height={260}>
          <PrimaryPanel vars={{}} />
        </DCArtboard>
        <DCArtboard id="p-b" label="B · White on deep sage" width={300} height={260}>
          <PrimaryPanel vars={{ '--primary': 'oklch(0.520 0.044 145)', '--text-on-sage': '#f4f8f1' }} />
        </DCArtboard>
        <DCPostIt>Moss (light button, dark label) feels organic and luminous — moonlit. Deep sage (darker button, white label) is more conventional and slightly higher-contrast for the label.</DCPostIt>
      </DCSection>

      <DCSection id="texture" title="Texture intensity" subtitle="How tactile the woven / grained surfaces are">
        <DCArtboard id="t-a" label="A · Whisper  (current)" width={250} height={240}>
          <TexturePanel ink="hsl(56 16% 28% / 0.05)" strong="hsl(56 16% 28% / 0.10)" name="Whisper" />
        </DCArtboard>
        <DCArtboard id="t-b" label="B · Linen" width={250} height={240}>
          <TexturePanel ink="hsl(56 16% 28% / 0.09)" strong="hsl(56 16% 28% / 0.17)" name="Linen" />
        </DCArtboard>
        <DCArtboard id="t-c" label="C · Canvas" width={250} height={240}>
          <TexturePanel ink="hsl(56 16% 28% / 0.14)" strong="hsl(56 16% 28% / 0.24)" name="Canvas" />
        </DCArtboard>
        <DCPostIt>Whisper is felt more than seen (today's setting). Linen is clearly tactile up close. Canvas is openly textured — characterful, but louder under text.</DCPostIt>
      </DCSection>
    </DesignCanvas>
  );
}

window.Comparison = Comparison;
