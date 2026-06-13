function FocusRail({ focusTask, seasonTexture, seasonLabel, seasonNote }) {
  const { Card, Button, IconButton, Divider } = window.FabricDesignSystem_7bb975;
  const Icon = window.Icon;
  const TOTAL = 25 * 60;
  const [left, setLeft] = React.useState(TOTAL);
  const [running, setRunning] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (running) {
      ref.current = setInterval(() => {
        setLeft((s) => (s <= 1 ? (clearInterval(ref.current), setRunning(false), 0) : s - 1));
      }, 1000);
    }
    return () => clearInterval(ref.current);
  }, [running]);

  const mm = String(Math.floor(left / 60)).padStart(2, '0');
  const ss = String(left % 60).padStart(2, '0');
  const pct = ((TOTAL - left) / TOTAL) * 100;

  return (
    <div className={'fa-rail ' + (seasonTexture || '')}>
      <Card elevation="raised" padding="lg" className="fa-focus">
        <div className="fa-focus__eyebrow">// Focus session</div>
        <div className="fa-focus__task">{focusTask ? focusTask.title : 'Pick something small'}</div>
        <div className="fa-focus__clock">{mm}:{ss}</div>
        <div className="fa-focus__track"><span style={{ width: pct + '%' }} /></div>
        <div className="fa-focus__controls">
          <Button variant={running ? 'secondary' : 'primary'} block
            leadingIcon={<Icon name={running ? 'pause' : 'play'} size={17} />}
            onClick={() => setRunning((r) => !r)}>
            {running ? 'Pause' : 'Begin focus'}
          </Button>
          <IconButton label="Reset" variant="ghost" onClick={() => { setRunning(false); setLeft(TOTAL); }}>
            <Icon name="rotate-ccw" size={18} />
          </IconButton>
        </div>
      </Card>

      <Card elevation="flat" padding="lg" className="fa-intention">
        <div className="fa-intention__head">
          <div className="fa-focus__eyebrow">// Today’s intention</div>
          <span className="fa-season-chip"><span className="fa-season-chip__dot" />{seasonLabel}</span>
        </div>
        <p className="fa-intention__text">Make one thing well. Leave the rest for tomorrow — it will keep.</p>
        <Divider variant="stitch" />
        <div className="fa-streak">
          <Icon name="sprout" size={18} className="fa-streak__icon" />
          <span><strong>6 days</strong> of unhurried mornings</span>
        </div>
      </Card>
    </div>
  );
}
window.FabricApp.FocusRail = FocusRail;
