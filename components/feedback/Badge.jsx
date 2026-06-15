import React from 'react';

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

export function Badge({ tone = 'neutral', dot = false, className = '', children, ...rest }) {
  return (
    <span className={['fab-badge', `fab-badge--${tone}`, className].filter(Boolean).join(' ')} {...rest}>
      {dot && <span className="fab-badge__dot" />}
      {children}
    </span>
  );
}
