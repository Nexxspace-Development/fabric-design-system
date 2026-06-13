import React from 'react';

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

export function Tag({ color, selectable = false, selected = false, onRemove, className = '', children, ...rest }) {
  return (
    <span
      className={['fab-tag', selectable ? 'fab-tag--selectable' : '', className].filter(Boolean).join(' ')}
      data-selected={selected}
      {...rest}
    >
      {color && <span className="fab-tag__dot" style={{ background: color }} />}
      {children}
      {onRemove && (
        <button type="button" className="fab-tag__remove" aria-label="Remove" onClick={onRemove}>
          <svg viewBox="0 0 16 16"><line x1="4" y1="4" x2="12" y2="12" /><line x1="12" y1="4" x2="4" y2="12" /></svg>
        </button>
      )}
    </span>
  );
}
