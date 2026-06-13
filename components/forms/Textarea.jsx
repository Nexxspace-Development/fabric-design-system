import React from 'react';

const STYLE_ID = 'fabric-textarea-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-ta-field { display: flex; flex-direction: column; gap: var(--space-2); }
  .fab-ta-field__label {
    font-family: var(--font-body); font-size: var(--text-sm);
    font-weight: var(--weight-medium); color: var(--text-strong);
  }
  .fab-ta-field__hint { font-size: var(--text-xs); color: var(--text-muted); }
  .fab-ta-field__error { font-size: var(--text-xs); color: var(--danger); }
  .fab-textarea {
    width: 100%; resize: vertical; min-height: 96px;
    font-family: var(--font-body); font-size: var(--text-sm);
    line-height: var(--leading-normal);
    color: var(--text-body); background: var(--surface-raised);
    border: var(--border-thin) solid var(--border-default);
    border-radius: var(--radius-md);
    padding: var(--space-3);
    transition: border-color var(--duration-fast) var(--ease-out),
                box-shadow var(--duration-fast) var(--ease-out);
  }
  .fab-textarea::placeholder { color: var(--text-faint); }
  .fab-textarea:hover:not(:disabled):not(:focus) { border-color: var(--border-strong); }
  .fab-textarea:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-soft); }
  .fab-textarea:disabled { background: var(--surface-sunken); color: var(--text-faint); cursor: not-allowed; }
  .fab-textarea--invalid { border-color: var(--danger); }
  .fab-textarea--invalid:focus { box-shadow: 0 0 0 3px var(--danger-soft); }
  `;
  document.head.appendChild(el);
}

export function Textarea({ label, hint, error, id, className = '', ...rest }) {
  const taId = id || (label ? `fabta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const ta = (
    <textarea
      id={taId}
      className={['fab-textarea', error ? 'fab-textarea--invalid' : '', className].filter(Boolean).join(' ')}
      aria-invalid={!!error}
      {...rest}
    />
  );
  if (!label && !hint && !error) return ta;
  return (
    <div className="fab-ta-field">
      {label && <label className="fab-ta-field__label" htmlFor={taId}>{label}</label>}
      {ta}
      {error
        ? <span className="fab-ta-field__error">{error}</span>
        : hint && <span className="fab-ta-field__hint">{hint}</span>}
    </div>
  );
}
