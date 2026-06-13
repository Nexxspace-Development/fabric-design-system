/* Inline-SVG Lucide icon — avoids React/lucide DOM-swap issues by rendering
   the SVG markup directly from lucide's icon node data. */
function Icon({ name, size = 20, stroke = 1.75, className = '', style = {} }) {
  const L = window.lucide;
  const pascal = name.split('-').map((s) => s[0].toUpperCase() + s.slice(1)).join('');
  const node = L && L.icons && L.icons[pascal];
  const inner = node
    ? node[2].map(([t, a]) =>
        '<' + t + ' ' + Object.entries(a).map(([k, v]) => `${k}="${v}"`).join(' ') + '></' + t + '>'
      ).join('')
    : '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
  return <span className={'lic ' + className} style={{ display: 'inline-flex', flex: 'none', ...style }} dangerouslySetInnerHTML={{ __html: svg }} />;
}

window.Icon = Icon;
