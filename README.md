# 📚 Proyecto JavaScript Frontend

## 🎯 Objetivo
Este proyecto implementa varios de los conceptos del temario de la clase de JavaScript Frontend, incluyendo manipulación del DOM, eventos y consumo de APIs.

## 🗂️ Estructura del proyecto
```
front-js/
├── index.html      # Página principal con ejemplos prácticos
├── styles.css      # Estilos modernos y responsivos
├── scripts.js      # JavaScript con los conceptos del temario
└── README.md       # Este archivo
```

## 📖 Conceptos implementados

### 1. **Introducción a JS frontend**
- ✅ Uso de la consola del navegador (`console.log`, `console.error`, etc.)
- ✅ Script externo vinculado al HTML
- ✅ Debugging con herramientas de desarrollo

### 2. **Manipulación del DOM (Núcleo de la clase)**
- ✅ **Selección de elementos**: `querySelector()` y `querySelectorAll()`
- ✅ **Modificación de elementos**: 
  - `textContent` y `innerHTML`
  - Modificación de estilos CSS
  - Agregar/remover clases
- ✅ **Creación dinámica** de elementos

### 3. **Eventos básicos**
- ✅ `addEventListener()` para eventos de click
- ✅ Eventos de mouse (`mouseover`, `mouseout`)
- ✅ Manejo de estados y contadores
- ✅ Animaciones y efectos visuales

### 4. **Consumo de API con Fetch**
- ✅ Peticiones GET a [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- ✅ Manejo de promesas con `async/await`
- ✅ Manejo de errores en peticiones HTTP
- ✅ Mostrar datos dinámicamente en el DOM

## 🚀 Cómo usar el proyecto

### Opción 1: con Live Server (recomendado)
1. Abrí VS Code en la carpeta del proyecto
2. Instalá la extensión "Live Server"
3. Click derecho en `index.html` → "Open with Live Server"
4. Se va a abrir automáticamente en el navegador

### Opción 2: archivo local
1. Simplemente abrí `index.html` en tu navegador
2. No necesita servidor web para funcionar

## 🔍 Funcionalidades incluidas

### **Sección DOM**
- **Cambiar texto y color**: demuestra `textContent` y modificación de estilos
- **Mostrar/Ocultar menú**: ejemplo de toggle con clases CSS
- **Cambiar fondo**: modificación dinámica de clases en `<body>`

### **Sección Eventos**
- **Área interactiva**: responde a `mouseover`, `mouseout` y `click`
- **Contador de clicks**: manejo de estado y eventos repetidos

### **Sección API**
- **Cargar Posts**: consume API de posts y los muestra dinámicamente
- **Cargar Usuarios**: crea tabla HTML con datos de usuarios
- **Loading states**: indicadores visuales durante las peticiones

### **Debugging**
- **Console logs**: mensajes informativos en cada acción
- **Información del sistema**: información del navegador, window info, etc.
- **Tipos de logs**: `info`, `warn`, `error`, `table`

## 🎨 Características Técnicas

- **Responsive Design**: se adapta a móviles y desktop
- **Animaciones CSS**: transiciones suaves y efectos visuales
- **Manejo de Errores**: try/catch en peticiones API
- **Código Comentado**: explicaciones detalladas para aprendizaje
- **Modern JavaScript**: ES6+ features (arrow functions, async/await)

## 📱 Compatibilidad
- ✅ Chrome, Firefox, Safari, Edge
- ✅ Dispositivos móviles
- ✅ No necesita dependencias externas

## 🔧 Para Desarrollar

### Abrir la consola del navegador:
- **Windows/Linux**: `F12` o `Ctrl + Shift + I`
- **Mac**: `Cmd + Option + I`

### Tips para estudiantes:
1. Abrí siempre la consola para ver los mensajes de debug
2. Experimentá modificando valores en `scripts.js`
3. Usá el botón "Debug" para generar información del sistema
4. Probá los diferentes eventos y observá los logs

## 🎯 Objetivos de Aprendizaje Cubiertos

1. **Cómo conectar JavaScript con HTML**
2. **Seleccionar y modificar elementos del DOM**
3. **Manejar eventos del usuario**
4. **Consumir APIs externas**
5. **Debuguear código con la consola**
6. **Crear interfaces interactivas**

## 📚 APIs Utilizadas

- **JSONPlaceholder**: API para pruebas
  - Posts: `https://jsonplaceholder.typicode.com/posts`
  - Usuarios: `https://jsonplaceholder.typicode.com/users`

---

*Desarrollado para la cátedra "Desarrollo de software" de la Universidad Tecnológica Nacional - Facultad Regional Rosario*