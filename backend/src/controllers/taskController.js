import { Task } from "../models/Task.js";

// Obtener todas las tareas
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    console.error("Error al obtener tareas:", error);
    res.status(500).json({ 
      error: "Error interno del servidor",
      message: error.message 
    });
  }
};

// Crear una nueva tarea
export const createTask = async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text || text.trim().length === 0) {
      return res.status(400).json({ 
        error: "El texto de la tarea es requerido" 
      });
    }

    const task = await Task.create({ 
      text: text.trim(), 
      completed: false 
    });
    
    res.status(201).json(task);
  } catch (error) {
    console.error("Error al crear tarea:", error);
    res.status(500).json({ 
      error: "Error interno del servidor",
      message: error.message 
    });
  }
};

// Actualizar una tarea
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Validar que el ID sea válido
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "ID de tarea inválido" });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id, 
      updateData, 
      { 
        new: true, 
        runValidators: true 
      }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.json(updatedTask);
  } catch (error) {
    console.error("Error al actualizar tarea:", error);
    res.status(500).json({ 
      error: "Error interno del servidor",
      message: error.message 
    });
  }
};

// Eliminar una tarea
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar que el ID sea válido
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "ID de tarea inválido" });
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.json({ 
      message: "Tarea eliminada exitosamente",
      deletedTask 
    });
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
    res.status(500).json({ 
      error: "Error interno del servidor",
      message: error.message 
    });
  }
};
