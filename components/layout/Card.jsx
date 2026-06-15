import React from 'react';

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

export function Card({
  elevation = 'raised',
  padding = 'md',
  interactive = false,
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'fab-card',
    `fab-card--${elevation}`,
    `fab-card--pad-${padding}`,
    interactive ? 'fab-card--interactive' : '',
    className,
  ].filter(Boolean).join(' ');
  return <Tag className={classes} {...rest}>{children}</Tag>;
}
