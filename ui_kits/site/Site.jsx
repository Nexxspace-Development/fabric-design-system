/* Fabric marketing site — composed from the design-system primitives. */
const { Button, Badge, Card, Checkbox, Tag, Input, Avatar } = window.FabricDesignSystem_7bb975;
const Icon = window.Icon;

function Nav() {
  return (
    <header className="st-nav">
      <a className="st-nav__brand" href="#">
        <img src="../../assets/fabric-mark.svg" alt="" width="28" height="28" />
        <span>Fabric</span>
      </a>
      <nav className="st-nav__links">
        <a href="#craft">Craft</a>
        <a href="#features">Product</a>
        <a href="#studio">Studio</a>
        <a href="#journal">Journal</a>
      </nav>
      <div className="st-nav__actions">
        <Button variant="ghost" size="sm">Sign in</Button>
        <Button variant="primary" size="sm">Start free</Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="st-hero fabric-weave">
      <div className="st-hero__copy">
        <span className="fabric-eyebrow">// Made from nature</span>
        <h1 className="st-hero__title">Calm tools for focused work.</h1>
        <p className="st-hero__sub">
          Fabric is a quiet workspace for one thing at a time. No streaks to chase,
          no badges to earn — just a soft place to do good work and then put it down.
        </p>
        <div className="st-hero__cta">
          <Button size="lg" trailingIcon={<Icon name="arrow-right" size={18} />}>Begin in the quiet</Button>
          <Button size="lg" variant="secondary" leadingIcon={<Icon name="play" size={16} />}>See the craft</Button>
        </div>
        <div className="st-hero__note">
          <Icon name="sprout" size={16} /> Free for makers · no card, no clock
        </div>
      </div>
      <HeroPreview />
    </section>
  );
}

function HeroPreview() {
  const rows = [
    { t: 'Draft the spring field notes', list: 'Writing', c: 'var(--terracotta-500)', done: false, est: '50m' },
    { t: 'Review the loom studies', list: 'Studio', c: 'var(--sage-500)', done: false, est: '25m' },
    { t: 'Walk — leave the phone at home', list: 'Reading', c: 'var(--ochre-600)', done: true, est: '30m' },
  ];
  return (
    <Card elevation="floating" padding="lg" className="st-preview">
      <div className="st-preview__head">
        <div>
          <div className="st-preview__title">Today</div>
          <div className="st-preview__date">Three small things</div>
        </div>
        <Badge tone="success" dot>On track</Badge>
      </div>
      <div className="st-preview__rows">
        {rows.map((r, i) => (
          <div className="st-preview__row" data-done={r.done} key={i}>
            <Checkbox checked={r.done} readOnly />
            <span className="st-preview__rowtitle">{r.t}</span>
            <Tag color={r.c}>{r.list}</Tag>
            <span className="st-preview__est">{r.est}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

const FEATURES = [
  { icon: 'target', title: 'One thing at a time', text: 'A single calm surface. Today holds only what you can actually finish — the rest waits, patiently, in Later.' },
  { icon: 'feather', title: 'Made to disappear', text: 'Muted tones and humanist type let the interface recede so your work, not the tool, holds your attention.' },
  { icon: 'leaf', title: 'Gentle by default', text: 'No streaks, no nagging. Finish what you can, close the laptop, and let tomorrow keep what it keeps.' },
];

function Features() {
  return (
    <section className="st-features" id="features">
      <div className="st-section__head">
        <span className="fabric-eyebrow">// The product</span>
        <h2 className="st-section__title">Built to ask less of you.</h2>
      </div>
      <div className="st-features__grid">
        {FEATURES.map((f) => (
          <Card key={f.title} elevation="raised" padding="lg" className="st-feature">
            <span className="st-feature__icon"><Icon name={f.icon} size={22} /></span>
            <h3 className="st-feature__title">{f.title}</h3>
            <p className="st-feature__text">{f.text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="st-philo fabric-grain" id="craft">
      <img src="../../assets/fabric-mark.svg" alt="" width="44" height="44" className="st-philo__mark" />
      <blockquote className="st-philo__quote">
        “We made Fabric from the things that calm us — linen, lichen, clay,
        the grain of old paper. Software should feel made from nature, too.”
      </blockquote>
      <div className="st-philo__by">
        <Avatar name="Wren Aldous" size="sm" />
        <span>Wren Aldous · founder</span>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="st-cta fabric-weave" id="studio">
      <h2 className="st-cta__title">Begin in the quiet.</h2>
      <p className="st-cta__sub">Your studio is one line away.</p>
      <div className="st-cta__form">
        <Input leadingIcon={<Icon name="mail" size={17} />} placeholder="you@studio.com" />
        <Button size="lg">Start free</Button>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: 'Product', items: ['Overview', 'Focus', 'Lists', 'Changelog'] },
    { h: 'Studio', items: ['About', 'Craft', 'Journal', 'Careers'] },
    { h: 'More', items: ['Help', 'Privacy', 'Terms', 'Contact'] },
  ];
  return (
    <footer className="st-foot" id="journal">
      <div className="st-foot__brand">
        <a className="st-nav__brand" href="#"><img src="../../assets/fabric-mark.svg" alt="" width="26" height="26" /><span>Fabric</span></a>
        <p className="st-foot__tag">Calm tools for focused work.</p>
      </div>
      <div className="st-foot__cols">
        {cols.map((c) => (
          <div className="st-foot__col" key={c.h}>
            <div className="st-foot__h">{c.h}</div>
            {c.items.map((i) => <a key={i} href="#">{i}</a>)}
          </div>
        ))}
      </div>
      <div className="st-foot__fine">© 2026 Fabric · Made from nature</div>
    </footer>
  );
}

function Site() {
  return (
    <div className="st-page">
      <Nav />
      <Hero />
      <Features />
      <Philosophy />
      <CTA />
      <Footer />
    </div>
  );
}
window.FabricSite = { Site };
