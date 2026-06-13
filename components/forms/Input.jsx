import React from 'react';

const STYLE_ID = 'fabric-input-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-field { display: flex; flex-direction: column; gap: var(--space-2); }
  .fab-field__label {
    font-family: var(--font-body); font-size: var(--text-sm);
    font-weight: var(--weight-medium); color: var(--text-strong);
  }
  .fab-field__req { color: var(--accent-warm); margin-left: 2px; }
  .fab-field__hint { font-size: var(--text-xs); color: var(--text-muted); }
  .fab-field__error { font-size: var(--text-xs); color: var(--danger); }

  .fab-input-wrap { position: relative; display: flex; align-items: center; }
  .fab-input-wrap__icon {
    position: absolute; left: var(--space-3); display: flex;
    color: var(--text-faint); pointer-events: none;
  }
  .fab-input-wrap__icon ~ .fab-input { padding-left: calc(var(--space-3) + 24px); }

  .fab-input {
    width: 100%;
    font-family: var(--font-body); font-size: var(--text-sm);
    color: var(--text-body); background: var(--surface-raised);
    border: var(--border-thin) solid var(--border-default);
    border-radius: var(--radius-md);
    padding: 0 var(--space-3); height: 40px;
    transition: border-color var(--duration-fast) var(--ease-out),
                box-shadow var(--duration-fast) var(--ease-out);
  }
  .fab-input::placeholder { color: var(--text-faint); }
  .fab-input:hover:not(:disabled):not(:focus) { border-color: var(--border-strong); }
  .fab-input:focus {
    outline: none; border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-soft);
  }
  .fab-input:disabled { background: var(--surface-sunken); color: var(--text-faint); cursor: not-allowed; }
  .fab-input--invalid { border-color: var(--danger); }
  .fab-input--invalid:focus { box-shadow: 0 0 0 3px var(--danger-soft); }
  .fab-input--sm { height: 32px; font-size: var(--text-sm); }
  .fab-input--lg { height: 48px; font-size: var(--text-base); }
  `;
  document.head.appendChild(el);
}

export function Input({
  label,
  hint,
  error,
  required = false,
  size = 'md',
  leadingIcon = null,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `fab-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const input = (
    <div className="fab-input-wrap">
      {leadingIcon && <span className="fab-input-wrap__icon">{leadingIcon}</span>}
      <input
        id={inputId}
        className={[
          'fab-input',
          size !== 'md' ? `fab-input--${size}` : '',
          error ? 'fab-input--invalid' : '',
          className,
        ].filter(Boolean).join(' ')}
        aria-invalid={!!error}
        {...rest}
      />
    </div>
  );
  if (!label && !hint && !error) return input;
  return (
    <div className="fab-field">
      {label && (
        <label className="fab-field__label" htmlFor={inputId}>
          {label}{required && <span className="fab-field__req">*</span>}
        </label>
      )}
      {input}
      {error
        ? <span className="fab-field__error">{error}</span>
        : hint && <span className="fab-field__hint">{hint}</span>}
    </div>
  );
}
