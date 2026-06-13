import React from 'react';

const STYLE_ID = 'fabric-toast-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
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
  info: <path d="M12 8h.01M11 12h1v4h1" />,
  success: <polyline points="5 13 10 18 19 6" />,
  warning: <path d="M12 9v4M12 17h.01M10.3 4l-7 12a2 2 0 0 0 1.7 3h14a2 2 0 0 0 1.7-3l-7-12a2 2 0 0 0-3.4 0z" />,
  danger: <path d="M15 9l-6 6M9 9l6 6" />,
};

export function Toast({ tone = 'info', title, children, onClose, className = '', ...rest }) {
  return (
    <div role="status" className={['fab-toast', `fab-toast--${tone}`, className].filter(Boolean).join(' ')} {...rest}>
      <span className="fab-toast__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" stroke="currentColor">{ICONS[tone]}</svg>
      </span>
      <div className="fab-toast__body">
        {title && <div className="fab-toast__title">{title}</div>}
        {children && <div className="fab-toast__msg">{children}</div>}
      </div>
      {onClose && (
        <button type="button" className="fab-toast__close" aria-label="Dismiss" onClick={onClose}>
          <svg viewBox="0 0 16 16"><line x1="4" y1="4" x2="12" y2="12" /><line x1="12" y1="4" x2="4" y2="12" /></svg>
        </button>
      )}
    </div>
  );
}
