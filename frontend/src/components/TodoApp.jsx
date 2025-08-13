import { useTasks } from '../hooks/useTasks.js';
import AddTaskForm from './AddTaskForm.jsx';
import TaskList from './TaskList.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';

export default function TodoApp() {
  const {
    tasks,
    loading,
    error,
    addTask,
    updateTask,
    toggleTask,
    deleteTask,
    clearError
  } = useTasks();

  const handleAddTask = async (text) => {
    const result = await addTask(text);
    return result !== null;
  };

  return (
    <div className="todo-app">
      <header className="app-header">
        <h1>📝 Lista de Tareas</h1>
        <p className="app-subtitle">Organiza tu día de manera eficiente</p>
      </header>

      <AddTaskForm onAddTask={handleAddTask} />

      {error && (
        <ErrorMessage 
          message={error} 
          onClose={clearError} 
        />
      )}

      <main className="app-main">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
        )}
      </main>

      {!loading && tasks.length > 0 && (
        <footer className="app-footer">
          <p>
            Total de tareas: {tasks.length} | 
            Completadas: {tasks.filter(t => t.completed).length} | 
            Pendientes: {tasks.filter(t => !t.completed).length}
          </p>
        </footer>
      )}
    </div>
  );
}
