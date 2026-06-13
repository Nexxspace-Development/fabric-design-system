import React from 'react';

const STYLE_ID = 'fabric-switch-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-switch { display: inline-flex; align-items: center; gap: var(--space-3); cursor: pointer; }
  .fab-switch[data-disabled="true"] { opacity: 0.5; cursor: not-allowed; }
  .fab-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
  .fab-switch__track {
    flex: none; width: 40px; height: 24px; border-radius: var(--radius-pill);
    background: var(--control-track); box-shadow: var(--shadow-inset);
    position: relative; transition: background var(--duration-base) var(--ease-out);
  }
  .fab-switch__thumb {
    position: absolute; top: 3px; left: 3px; width: 18px; height: 18px;
    border-radius: var(--radius-pill); background: var(--control-thumb);
    box-shadow: var(--shadow-sm);
    transition: transform var(--duration-base) var(--ease-out);
  }
  .fab-switch input:checked + .fab-switch__track { background: var(--primary); }
  .fab-switch input:checked + .fab-switch__track .fab-switch__thumb { transform: translateX(16px); }
  .fab-switch input:focus-visible + .fab-switch__track { outline: var(--border-thick) solid var(--focus-ring); outline-offset: 2px; }
  .fab-switch__label { font-family: var(--font-body); font-size: var(--text-sm); color: var(--text-strong); }
  `;
  document.head.appendChild(el);
}

export function Switch({ label, disabled = false, className = '', ...rest }) {
  return (
    <label className={['fab-switch', className].filter(Boolean).join(' ')} data-disabled={disabled}>
      <input type="checkbox" role="switch" disabled={disabled} {...rest} />
      <span className="fab-switch__track" aria-hidden="true">
        <span className="fab-switch__thumb" />
      </span>
      {label && <span className="fab-switch__label">{label}</span>}
    </label>
  );
}
