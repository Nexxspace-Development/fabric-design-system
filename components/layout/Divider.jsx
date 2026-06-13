import React from 'react';

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

export function Divider({ orientation = 'horizontal', variant = 'solid', label, className = '', ...rest }) {
  if (label) {
    return (
      <div className={['fab-divider-labeled', variant === 'stitch' ? 'fab-divider-labeled--stitch' : '', className].filter(Boolean).join(' ')} {...rest}>
        <span className="fab-divider-labeled__text">{label}</span>
      </div>
    );
  }
  const o = orientation === 'vertical' ? 'v' : 'h';
  return <hr className={['fab-divider', `fab-divider--${o}`, variant === 'stitch' ? 'fab-divider--stitch' : '', className].filter(Boolean).join(' ')} {...rest} />;
}
