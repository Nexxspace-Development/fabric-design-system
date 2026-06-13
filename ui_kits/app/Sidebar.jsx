function Sidebar({ view, setView, counts, lists, activeList, setActiveList, seasons, season, setSeason }) {
  const { Avatar, Tooltip } = window.FabricDesignSystem_7bb975;
  const Icon = window.Icon;

  const nav = [
    { id: 'today', label: 'Today', icon: 'sun' },
    { id: 'later', label: 'Later', icon: 'moon' },
    { id: 'done',  label: 'Done',  icon: 'check-check' },
  ];

  return (
    <aside className="fa-side">
      <div className="fa-side__brand">
        <img src="../../assets/fabric-mark.svg" alt="" width="26" height="26" />
        <span className="fa-side__word">Fabric</span>
      </div>

      <nav className="fa-side__nav">
        {nav.map((n) => (
          <button
            key={n.id}
            className="fa-navitem"
            data-active={view === n.id && !activeList}
            onClick={() => { setView(n.id); setActiveList(null); }}
          >
            <Icon name={n.icon} size={18} />
            <span>{n.label}</span>
            {counts[n.id] > 0 && <span className="fa-navitem__count">{counts[n.id]}</span>}
          </button>
        ))}
      </nav>

      <div className="fa-side__section">
        <div className="fa-side__sectionlabel">Lists</div>
        {lists.map((l) => (
          <button
            key={l.id}
            className="fa-navitem fa-navitem--list"
            data-active={activeList === l.id}
            onClick={() => { setActiveList(l.id); }}
          >
            <span className="fa-dot" style={{ background: l.color }} />
            <span>{l.label}</span>
          </button>
        ))}
      </div>

      <div className="fa-side__season">
        <div className="fa-side__sectionlabel">Season</div>
        <div className="fa-season">
          {seasons.map((s) => (
            <Tooltip key={s.id} label={`${s.label} · ${s.note}`}>
              <button
                className="fa-season__btn"
                data-season={s.id}
                data-active={season === s.id}
                aria-label={s.label}
                onClick={() => setSeason(s.id)}
              >
                <Icon name={s.icon} size={18} />
              </button>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className="fa-side__foot">
        <Avatar name="Wren Aldous" size="sm" />
        <div className="fa-side__person">
          <span className="fa-side__name">Wren Aldous</span>
          <span className="fa-side__studio">Aldous Studio</span>
        </div>
        <Icon name="settings" size={17} className="fa-side__cog" />
      </div>
    </aside>
  );
}
window.FabricApp.Sidebar = Sidebar;
