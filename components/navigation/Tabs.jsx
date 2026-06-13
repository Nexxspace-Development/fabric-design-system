import React from 'react';

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
    opacity: 0; transform: scaleX(0.5); transition: opacity var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out);
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

export function Tabs({ items = [], value, defaultValue, onChange, variant = 'line', className = '', ...rest }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = isControlled ? value : internal;
  const select = (v) => { if (!isControlled) setInternal(v); onChange?.(v); };
  return (
    <div role="tablist" className={['fab-tabs', `fab-tabs--${variant}`, className].filter(Boolean).join(' ')} {...rest}>
      {items.map((it) => (
        <button
          key={it.value}
          role="tab"
          type="button"
          className="fab-tab"
          data-active={active === it.value}
          aria-selected={active === it.value}
          onClick={() => select(it.value)}
        >
          {it.label}
          {it.count != null && <span className="fab-tab__count">{it.count}</span>}
        </button>
      ))}
    </div>
  );
}
