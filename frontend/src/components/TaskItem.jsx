import { useState } from 'react';

export default function TaskItem({ task, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleToggle = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    try {
      await onToggle(task);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (isSubmitting) return;
    
    if (window.confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      setIsSubmitting(true);
      try {
        await onDelete(task._id);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(task.text);
  };

  const handleSave = async () => {
    const trimmed = editText.trim();
    if (!trimmed || trimmed === task.text) {
      setIsEditing(false);
      return;
    }

    setIsSubmitting(true);
    try {
      await onUpdate(task._id, { text: trimmed });
      setIsEditing(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(task.text);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <li className="task-item editing">
        <div className="task-content">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="edit-input"
            disabled={isSubmitting}
            maxLength={500}
            autoFocus
          />
        </div>
        <div className="task-actions">
          <button 
            onClick={handleSave} 
            className="save-button"
            disabled={!editText.trim() || isSubmitting}
            title="Guardar"
          >
            💾
          </button>
          <button 
            onClick={handleCancel} 
            className="cancel-button"
            disabled={isSubmitting}
            title="Cancelar"
          >
            ❌
          </button>
        </div>
      </li>
    );
  }

  return (
    <li className="task-item">
      <div className="task-content">
        <span
          onClick={handleToggle}
          className={`task-text ${task.completed ? 'completed' : ''}`}
          title={task.completed ? 'Marcar como pendiente' : 'Marcar como completada'}
        >
          {task.text}
        </span>
        {task.completed && (
          <span className="completion-date">
            Completada: {new Date(task.updatedAt).toLocaleDateString()}
          </span>
        )}
      </div>
      <div className="task-actions">
        <button 
          onClick={handleEdit} 
          className="edit-button"
          disabled={isSubmitting}
          title="Editar"
        >
          ✏️
        </button>
        <button 
          onClick={handleDelete} 
          className="delete-button"
          disabled={isSubmitting}
          title="Eliminar"
        >
          🗑️
        </button>
      </div>
    </li>
  );
}
