import React from 'react';

const STYLE_ID = 'fabric-select-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-sel-field { display: flex; flex-direction: column; gap: var(--space-2); }
  .fab-sel-field__label {
    font-family: var(--font-body); font-size: var(--text-sm);
    font-weight: var(--weight-medium); color: var(--text-strong);
  }
  .fab-sel-wrap { position: relative; display: flex; align-items: center; }
  .fab-sel-wrap::after {
    content: ""; position: absolute; right: var(--space-3); width: 9px; height: 9px;
    border-right: 1.5px solid var(--text-muted); border-bottom: 1.5px solid var(--text-muted);
    transform: translateY(-2px) rotate(45deg); pointer-events: none;
  }
  .fab-select {
    width: 100%; appearance: none;
    font-family: var(--font-body); font-size: var(--text-sm);
    color: var(--text-body); background: var(--surface-raised);
    border: var(--border-thin) solid var(--border-default);
    border-radius: var(--radius-md);
    padding: 0 calc(var(--space-5) + 4px) 0 var(--space-3); height: 40px;
    cursor: pointer;
    transition: border-color var(--duration-fast) var(--ease-out),
                /* Focus ring blooms outward — settle gives a whisper of give */
                box-shadow var(--duration-base) var(--ease-settle);
  }
  .fab-select:hover:not(:disabled):not(:focus) { border-color: var(--border-strong); }
  .fab-select:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-soft); }
  .fab-select:disabled { background: var(--surface-sunken); color: var(--text-faint); cursor: not-allowed; }
  `;
  document.head.appendChild(el);
}

export function Select({ label, id, options = [], placeholder, className = '', children, ...rest }) {
  const selId = id || (label ? `fabsel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const sel = (
    <div className="fab-sel-wrap">
      <select id={selId} className={['fab-select', className].filter(Boolean).join(' ')} {...rest}>
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((o) => {
          const value = typeof o === 'string' ? o : o.value;
          const labelText = typeof o === 'string' ? o : o.label;
          return <option key={value} value={value}>{labelText}</option>;
        })}
        {children}
      </select>
    </div>
  );
  if (!label) return sel;
  return (
    <div className="fab-sel-field">
      <label className="fab-sel-field__label" htmlFor={selId}>{label}</label>
      {sel}
    </div>
  );
}
