import React from 'react';

const STYLE_ID = 'fabric-checkbox-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-check { display: inline-flex; align-items: flex-start; gap: var(--space-3); cursor: pointer; }
  .fab-check[data-disabled="true"] { opacity: 0.5; cursor: not-allowed; }
  .fab-check__box {
    flex: none; width: 20px; height: 20px; margin-top: 1px;
    border: var(--border-thin) solid var(--border-strong);
    border-radius: var(--radius-sm); background: var(--surface-raised);
    display: flex; align-items: center; justify-content: center;
    transition: background var(--duration-fast) var(--ease-out),
                border-color var(--duration-fast) var(--ease-out);
  }
  .fab-check__box svg { width: 13px; height: 13px; stroke: var(--text-on-sage); stroke-width: 3;
    fill: none; stroke-linecap: round; stroke-linejoin: round;
    opacity: 0; transform: scale(0.6); transition: opacity var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out); }
  .fab-check input { position: absolute; opacity: 0; width: 0; height: 0; }
  .fab-check input:checked + .fab-check__box { background: var(--primary); border-color: var(--primary); }
  .fab-check input:checked + .fab-check__box svg { opacity: 1; transform: scale(1); }
  .fab-check input:focus-visible + .fab-check__box { outline: var(--border-thick) solid var(--focus-ring); outline-offset: 2px; }
  .fab-check__body { display: flex; flex-direction: column; gap: 2px; }
  .fab-check__label { font-family: var(--font-body); font-size: var(--text-sm); color: var(--text-strong); line-height: var(--leading-snug); }
  .fab-check__desc { font-size: var(--text-xs); color: var(--text-muted); }
  `;
  document.head.appendChild(el);
}

export function Checkbox({ label, description, disabled = false, className = '', ...rest }) {
  return (
    <label className={['fab-check', className].filter(Boolean).join(' ')} data-disabled={disabled}>
      <input type="checkbox" disabled={disabled} {...rest} />
      <span className="fab-check__box" aria-hidden="true">
        <svg viewBox="0 0 16 16"><polyline points="3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
      </span>
      {(label || description) && (
        <span className="fab-check__body">
          {label && <span className="fab-check__label">{label}</span>}
          {description && <span className="fab-check__desc">{description}</span>}
        </span>
      )}
    </label>
  );
}
