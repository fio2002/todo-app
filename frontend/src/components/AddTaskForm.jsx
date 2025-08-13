import { useState } from 'react';

export default function AddTaskForm({ onAddTask }) {
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const trimmed = text.trim();
    if (!trimmed || isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      const success = await onAddTask(trimmed);
      if (success) {
        setText('');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nueva tarea..."
          className="task-input"
          disabled={isSubmitting}
          maxLength={500}
        />
        <button 
          type="submit" 
          className="add-button"
          disabled={!text.trim() || isSubmitting}
        >
          {isSubmitting ? 'Agregando...' : 'Agregar'}
        </button>
      </div>
    </form>
  );
}
