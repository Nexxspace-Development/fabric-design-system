import React from 'react';

const STYLE_ID = 'fabric-tooltip-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-tip { position: relative; display: inline-flex; }
  .fab-tip__bubble {
    position: absolute; z-index: var(--z-popover); pointer-events: none;
    background: var(--surface-inverse); color: var(--text-on-inverse);
    font-family: var(--font-body); font-size: var(--text-xs); font-weight: var(--weight-medium);
    line-height: 1.4; padding: 6px 9px; border-radius: var(--radius-sm);
    box-shadow: var(--shadow-md); white-space: nowrap; max-width: 240px;
    opacity: 0; transform: scale(0.96); transition: opacity var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out);
  }
  .fab-tip[data-open="true"] .fab-tip__bubble { opacity: 1; transform: scale(1); }
  .fab-tip__bubble--top    { bottom: calc(100% + 7px); left: 50%; transform-origin: bottom center; translate: -50% 0; }
  .fab-tip__bubble--bottom { top: calc(100% + 7px); left: 50%; transform-origin: top center; translate: -50% 0; }
  .fab-tip__bubble--left   { right: calc(100% + 7px); top: 50%; transform-origin: right center; translate: 0 -50%; }
  .fab-tip__bubble--right  { left: calc(100% + 7px); top: 50%; transform-origin: left center; translate: 0 -50%; }
  `;
  document.head.appendChild(el);
}

export function Tooltip({ label, placement = 'top', delay = 120, className = '', children, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef(null);
  const show = () => { timer.current = setTimeout(() => setOpen(true), delay); };
  const hide = () => { clearTimeout(timer.current); setOpen(false); };
  return (
    <span
      className={['fab-tip', className].filter(Boolean).join(' ')}
      data-open={open}
      onMouseEnter={show} onMouseLeave={hide}
      onFocus={show} onBlur={hide}
      {...rest}
    >
      {children}
      <span role="tooltip" className={`fab-tip__bubble fab-tip__bubble--${placement}`}>{label}</span>
    </span>
  );
}
