function TaskRow({ task, onToggle }) {
  const { Checkbox, Tag } = window.FabricDesignSystem_7bb975;
  const Icon = window.Icon;
  const list = window.FabricApp.listById(task.list);
  return (
    <div className="fa-task" data-done={task.done}>
      <Checkbox checked={task.done} onChange={() => onToggle(task.id)} />
      <span className="fa-task__title">{task.title}</span>
      <span className="fa-task__meta">
        <Tag color={list.color}>{list.label}</Tag>
        <span className="fa-task__est"><Icon name="clock" size={13} />{task.estimate}</span>
      </span>
    </div>
  );
}

function Composer({ onAdd }) {
  const { Button } = window.FabricDesignSystem_7bb975;
  const Icon = window.Icon;
  const [val, setVal] = React.useState('');
  const submit = () => { const v = val.trim(); if (!v) return; onAdd(v); setVal(''); };
  return (
    <div className="fa-composer">
      <Icon name="plus" size={18} className="fa-composer__plus" />
      <input
        className="fa-composer__input"
        placeholder="Add a task — keep it small"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') submit(); }}
      />
      {val.trim() && <Button size="sm" onClick={submit}>Add</Button>}
    </div>
  );
}

window.FabricApp.TaskRow = TaskRow;
window.FabricApp.Composer = Composer;
