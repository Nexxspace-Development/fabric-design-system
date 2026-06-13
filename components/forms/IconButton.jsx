import React from 'react';

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
    transition: background var(--duration-fast) var(--ease-out),
                color var(--duration-fast) var(--ease-out),
                border-color var(--duration-fast) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
  }
  .fab-iconbtn:focus-visible { outline: var(--border-thick) solid var(--focus-ring); outline-offset: 2px; }
  .fab-iconbtn:active { transform: scale(0.93); }
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

export function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'fab-iconbtn',
    `fab-iconbtn--${variant}`,
    `fab-iconbtn--${size}`,
    className,
  ].filter(Boolean).join(' ');
  return (
    <button className={classes} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}
