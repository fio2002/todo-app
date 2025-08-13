import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import { configureMiddleware } from "./middleware/config.js";
import taskRoutes from "./routes/taskRoutes.js";

// Configuración de variables de entorno
dotenv.config();

const app = express();
const { PORT = 5000 } = process.env;

// Configurar middleware
configureMiddleware(app);

// Rutas
app.use("/tasks", taskRoutes);

// Ruta de salud
app.get("/", (_req, res) => {
  res.json({ 
    message: "API de Tareas funcionando correctamente",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
});

// Ruta para verificar el estado de la base de datos
app.get("/health", async (_req, res) => {
  try {
    const mongoose = await import("mongoose");
    const isConnected = mongoose.connection.readyState === 1;
    
    res.json({
      status: isConnected ? "healthy" : "unhealthy",
      database: isConnected ? "connected" : "disconnected",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error("Error no manejado:", err);
  res.status(500).json({
    error: "Error interno del servidor",
    message: process.env.NODE_ENV === "development" ? err.message : "Algo salió mal"
  });
});

// Middleware para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    path: req.originalUrl,
    method: req.method
  });
});

// Iniciar servidor
const startServer = async () => {
  try {
    // Conectar a la base de datos
    await connectDB();
    
    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`🚀 API escuchando en http://localhost:${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/health`);
      console.log(`📝 API de tareas: http://localhost:${PORT}/tasks`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error);
    process.exit(1);
  }
};

startServer();
