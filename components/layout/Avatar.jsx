import React from 'react';

const STYLE_ID = 'fabric-avatar-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
  .fab-avatar {
    flex: none; display: inline-flex; align-items: center; justify-content: center;
    border-radius: var(--radius-pill); overflow: hidden;
    font-family: var(--font-body); font-weight: var(--weight-semibold);
    color: var(--text-on-color); background: var(--sage-500);
    user-select: none; line-height: 1;
  }
  .fab-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .fab-avatar--xs { width: 24px; height: 24px; font-size: 10px; }
  .fab-avatar--sm { width: 32px; height: 32px; font-size: 12px; }
  .fab-avatar--md { width: 40px; height: 40px; font-size: 15px; }
  .fab-avatar--lg { width: 56px; height: 56px; font-size: 20px; }
  .fab-avatar--ring { box-shadow: 0 0 0 2px var(--surface-card), 0 0 0 3.5px var(--border-default); }
  `;
  document.head.appendChild(el);
}

const TONES = ['var(--sage-500)', 'var(--terracotta-500)', 'var(--ochre-600)', 'var(--marsh-500)', 'var(--stone-600)'];
function toneFor(name = '') {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return TONES[h % TONES.length];
}
function initials(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  return (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase();
}

export function Avatar({ name = '', src, size = 'md', ring = false, className = '', style = {}, ...rest }) {
  const classes = ['fab-avatar', `fab-avatar--${size}`, ring ? 'fab-avatar--ring' : '', className].filter(Boolean).join(' ');
  return (
    <span
      className={classes}
      style={src ? style : { background: toneFor(name), ...style }}
      title={name || undefined}
      {...rest}
    >
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}
