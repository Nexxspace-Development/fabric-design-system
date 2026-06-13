function App() {
  const { Tabs, IconButton, Tooltip } = window.FabricDesignSystem_7bb975;
  const { Sidebar, TaskRow, Composer, FocusRail, Login, LISTS, SEED_TASKS, SEASONS, seasonById } = window.FabricApp;
  const Icon = window.Icon;

  const [screen, setScreen] = React.useState(() => localStorage.getItem('fabric.screen') || 'login');
  const [theme, setTheme] = React.useState(() => {
    const saved = localStorage.getItem('fabric.theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  });
  const [view, setView] = React.useState('today');
  const [season, setSeason] = React.useState(() => localStorage.getItem('fabric.season') || 'spring');
  const [activeList, setActiveList] = React.useState(null);
  const [filter, setFilter] = React.useState('all');
  const [tasks, setTasks] = React.useState(SEED_TASKS);
  const [nextId, setNextId] = React.useState(100);

  React.useEffect(() => { localStorage.setItem('fabric.screen', screen); }, [screen]);
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('fabric.theme', theme);
  }, [theme]);
  React.useEffect(() => {
    document.documentElement.dataset.season = season;
    localStorage.setItem('fabric.season', season);
  }, [season]);

  const toggle = (id) => setTasks((ts) => ts.map((t) => t.id === id ? { ...t, done: !t.done } : t));
  const add = (title) => {
    setTasks((ts) => [{ id: 't' + nextId, title, list: activeList || 'studio', estimate: '25m', view: activeList ? 'today' : view, done: false }, ...ts]);
    setNextId((n) => n + 1);
  };

  const counts = {
    today: tasks.filter((t) => t.view === 'today' && !t.done).length,
    later: tasks.filter((t) => t.view === 'later' && !t.done).length,
    done: tasks.filter((t) => t.done).length,
  };

  // What to show
  let visible;
  if (activeList) visible = tasks.filter((t) => t.list === activeList);
  else if (view === 'done') visible = tasks.filter((t) => t.done);
  else visible = tasks.filter((t) => t.view === view);
  if (filter === 'active') visible = visible.filter((t) => !t.done);
  if (filter === 'completed') visible = visible.filter((t) => t.done);

  const activeListObj = activeList ? LISTS.find((l) => l.id === activeList) : null;
  const TITLES = {
    today: ['Today', longDate()],
    later: ['Later', 'When you have room'],
    done: ['Done', 'Look how far you’ve come'],
  };
  const [title, sub] = activeListObj ? [activeListObj.label, `${visible.length} in this list`] : TITLES[view];

  const focusTask = tasks.find((t) => t.view === 'today' && !t.done);
  const showComposer = !activeList ? view !== 'done' : true;
  const seasonObj = seasonById(season);

  if (screen === 'login') return <Login onEnter={() => setScreen('app')} />;

  return (
    <div className="fa-shell">
      <Sidebar view={view} setView={setView} counts={counts} lists={LISTS}
        activeList={activeList} setActiveList={setActiveList}
        seasons={SEASONS} season={season} setSeason={setSeason} />

      <main className="fa-main">
        <header className="fa-head">
          <div className="fa-head__titles">
            <h1 className="fa-head__title">{title}</h1>
            <span className="fa-head__sub">{sub}</span>
          </div>
          <div className="fa-head__actions">
            <Tabs variant="pill" value={filter} onChange={setFilter} items={[
              { value: 'all', label: 'All' },
              { value: 'active', label: 'Active' },
              { value: 'completed', label: 'Done' },
            ]} />
            <Tooltip label={theme === 'dark' ? 'Daylight' : 'Nightfall'}>
              <IconButton label="Toggle theme" variant="outline"
                onClick={() => setTheme((t) => t === 'dark' ? 'light' : 'dark')}>
                <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
              </IconButton>
            </Tooltip>
            <Tooltip label="Search"><IconButton label="Search" variant="outline"><Icon name="search" size={18} /></IconButton></Tooltip>
          </div>
        </header>

        <div className="fa-list">
          {showComposer && <Composer onAdd={add} />}
          {visible.length === 0 && (
            <div className="fa-empty">
              <Icon name="wind" size={26} />
              <p>Nothing here. Enjoy the quiet.</p>
            </div>
          )}
          {visible.map((t) => <TaskRow key={t.id} task={t} onToggle={toggle} />)}
        </div>
      </main>

      <FocusRail focusTask={focusTask} seasonTexture={seasonObj.texture} seasonLabel={seasonObj.label} seasonNote={seasonObj.note} />
    </div>
  );
}

function longDate() {
  return new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

window.FabricApp.App = App;
