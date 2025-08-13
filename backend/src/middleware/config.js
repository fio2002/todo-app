import express from "express";
import cors from "cors";

export const configureMiddleware = (app) => {
  // Configuración de CORS
  const corsOptions = {
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true,
    optionsSuccessStatus: 200
  };
  
  app.use(cors(corsOptions));
  
  // Parseo de JSON
  app.use(express.json({ limit: "10mb" }));
  
  // Parseo de datos de formulario
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));
  
  // Logging de requests
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
  });
};
