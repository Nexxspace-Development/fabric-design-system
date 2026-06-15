import React from 'react';

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

export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  leadingIcon = null,
  trailingIcon = null,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'fab-btn',
    `fab-btn--${variant}`,
    `fab-btn--${size}`,
    block ? 'fab-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} {...rest}>
      {leadingIcon}
      {children != null && <span>{children}</span>}
      {trailingIcon}
    </button>
  );
}
