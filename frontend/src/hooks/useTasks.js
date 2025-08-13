import { useState, useEffect, useCallback } from 'react';
import { apiService } from '../config/api.js';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener todas las tareas
  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiService.getTasks();
      setTasks(data);
    } catch (err) {
      setError('Error al cargar las tareas');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Crear una nueva tarea
  const addTask = useCallback(async (text) => {
    const trimmed = text.trim();
    if (!trimmed) return null;

    try {
      setError(null);
      const newTask = await apiService.createTask({ text: trimmed });
      setTasks(prev => [newTask, ...prev]);
      return newTask;
    } catch (err) {
      setError('Error al crear la tarea');
      console.error('Error creating task:', err);
      return null;
    }
  }, []);

  // Actualizar una tarea
  const updateTask = useCallback(async (id, updateData) => {
    try {
      setError(null);
      const updatedTask = await apiService.updateTask(id, updateData);
      setTasks(prev => 
        prev.map(task => task._id === id ? updatedTask : task)
      );
      return updatedTask;
    } catch (err) {
      setError('Error al actualizar la tarea');
      console.error('Error updating task:', err);
      return null;
    }
  }, []);

  // Cambiar el estado de completado de una tarea
  const toggleTask = useCallback(async (task) => {
    return await updateTask(task._id, { completed: !task.completed });
  }, [updateTask]);

  // Eliminar una tarea
  const deleteTask = useCallback(async (id) => {
    try {
      setError(null);
      await apiService.deleteTask(id);
      setTasks(prev => prev.filter(task => task._id !== id));
      return true;
    } catch (err) {
      setError('Error al eliminar la tarea');
      console.error('Error deleting task:', err);
      return false;
    }
  }, []);

  // Cargar tareas al montar el componente
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return {
    tasks,
    loading,
    error,
    addTask,
    updateTask,
    toggleTask,
    deleteTask,
    fetchTasks,
    clearError: () => setError(null)
  };
};
