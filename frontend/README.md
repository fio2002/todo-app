# Frontend de Aplicación de Tareas

Aplicación React moderna para gestionar tareas con una interfaz intuitiva y responsiva.

## 🚀 Características

- ✨ Interfaz moderna y responsiva
- 🔄 CRUD completo de tareas
- ✏️ Edición inline de tareas
- ✅ Marcado de tareas como completadas
- 🗑️ Eliminación de tareas con confirmación
- 📱 Diseño responsive para móviles
- 🎨 Estilos CSS modernos con variables CSS
- 🚦 Estados de carga y manejo de errores
- 🎯 Hook personalizado para gestión de estado

## 📋 Requisitos

- Node.js 18+
- npm o yarn
- Backend funcionando en el puerto 5000

## 🛠️ Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── AddTaskForm.jsx      # Formulario para agregar tareas
│   ├── TaskItem.jsx         # Componente individual de tarea
│   ├── TaskList.jsx         # Lista de tareas
│   ├── TodoApp.jsx          # Componente principal
│   ├── ErrorMessage.jsx     # Mensajes de error
│   └── LoadingSpinner.jsx   # Spinner de carga
├── config/
│   └── api.js               # Servicio de API abstracto
├── hooks/
│   └── useTasks.js          # Hook personalizado para tareas
├── App.jsx                  # Componente raíz
└── App.css                  # Estilos de la aplicación
```

## 🔧 Configuración

### Variables de Entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `VITE_API_URL` | URL del backend | http://localhost:5000 |

## 📱 Funcionalidades

### Gestión de Tareas
- **Crear**: Agregar nuevas tareas con validación
- **Leer**: Listar todas las tareas con ordenamiento
- **Actualizar**: Editar texto y marcar como completada
- **Eliminar**: Borrar tareas con confirmación

### Características de UX
- **Edición inline**: Hacer clic en el texto para editar
- **Confirmaciones**: Diálogos de confirmación para acciones destructivas
- **Estados de carga**: Indicadores visuales durante operaciones
- **Manejo de errores**: Mensajes claros para errores de API
- **Responsive**: Adaptable a diferentes tamaños de pantalla

## 🎨 Estilos

- **Variables CSS**: Sistema de colores y espaciado consistente
- **Transiciones**: Animaciones suaves para mejor UX
- **Hover effects**: Feedback visual en interacciones
- **Gradientes**: Header con gradiente moderno
- **Sombras**: Profundidad visual con sombras sutiles

## 🚀 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la build

## 🔌 Integración con Backend

La aplicación se conecta al backend a través del servicio de API abstracto (`src/config/api.js`), que proporciona:

- Métodos para todas las operaciones CRUD
- Manejo centralizado de errores
- Configuración de headers y URLs
- Reintentos y validaciones

## 📱 Responsive Design

- **Desktop**: Layout horizontal optimizado
- **Tablet**: Adaptación de elementos
- **Mobile**: Stack vertical para mejor usabilidad

## 🐛 Solución de Problemas

### Error de conexión al backend
- Verifica que el backend esté ejecutándose
- Confirma la URL en `.env`
- Revisa la consola del navegador para errores

### Problemas de CORS
- Asegúrate de que el backend permita el origen del frontend
- Verifica la configuración de CORS en el backend

## 📝 Licencia

ISC
