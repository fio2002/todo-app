import TaskItem from './TaskItem.jsx';

export default function TaskList({ tasks, onToggle, onDelete, onUpdate }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No hay tareas aún. ¡Agrega tu primera tarea!</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}
