# Backend de Aplicación de Tareas

API REST para gestionar tareas usando Express.js y MongoDB.

## 🚀 Características

- ✅ CRUD completo de tareas
- 🔒 Validación de datos
- 📊 Logging de requests
- 🏥 Health check endpoint
- 🛡️ Manejo de errores robusto
- 📝 Documentación de API

## 📋 Requisitos

- Node.js 18+ 
- MongoDB
- npm o yarn

## 🛠️ Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/todo-app
   CORS_ORIGIN=*
   NODE_ENV=development
   ```

3. **Iniciar MongoDB:**
   Asegúrate de que MongoDB esté ejecutándose en tu sistema.

## 🚀 Uso

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm start
```

## 📡 Endpoints de la API

### Tareas
- `GET /tasks` - Obtener todas las tareas
- `POST /tasks` - Crear una nueva tarea
- `PUT /tasks/:id` - Actualizar una tarea
- `DELETE /tasks/:id` - Eliminar una tarea

### Sistema
- `GET /` - Estado de la API
- `GET /health` - Estado de la base de datos

## 📁 Estructura del Proyecto

```
src/
├── config/
│   └── database.js      # Configuración de MongoDB
├── controllers/
│   └── taskController.js # Lógica de negocio
├── middleware/
│   └── config.js        # Configuración de Express
├── models/
│   └── Task.js          # Modelo de datos
├── routes/
│   └── taskRoutes.js    # Definición de rutas
└── server.js            # Archivo principal
```

## 🔧 Configuración

### Variables de Entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `PORT` | Puerto del servidor | 5000 |
| `MONGO_URI` | URI de conexión a MongoDB | - |
| `CORS_ORIGIN` | Origen permitido para CORS | * |
| `NODE_ENV` | Entorno de ejecución | development |

## 📊 Ejemplos de Uso

### Crear una tarea
```bash
curl -X POST http://localhost:5000/tasks \
  -H "Content-Type: application/json" \
  -d '{"text": "Comprar leche"}'
```

### Obtener todas las tareas
```bash
curl http://localhost:5000/tasks
```

### Actualizar una tarea
```bash
curl -X PUT http://localhost:5000/tasks/[ID] \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

## 🐛 Solución de Problemas

### Error de conexión a MongoDB
- Verifica que MongoDB esté ejecutándose
- Confirma que la URI en `.env` sea correcta
- Asegúrate de que la base de datos exista

### Error de CORS
- En producción, especifica el dominio exacto en `CORS_ORIGIN`
- Verifica que el frontend esté en el origen permitido

## 📝 Licencia

ISC
