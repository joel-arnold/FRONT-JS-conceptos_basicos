// ========================================
// CLASE DE JAVASCRIPT FRONTEND - UTN
// Proyecto completo que cubre todos los conceptos del temario
// ========================================

// ==========================================
// 1. INTRODUCCIÓN - Uso de la consola
// ==========================================
console.log("🚀 ¡JavaScript cargado correctamente!");
console.log("📚 Temario de la clase:");
console.log("   1. Manipulación del DOM");
console.log("   2. Eventos básicos");
console.log("   3. Consumo de API con Fetch");

// ==========================================
// 2. MANIPULACIÓN DEL DOM - Selección de elementos
// ==========================================

// A. Seleccionar elementos con querySelector y querySelectorAll
const titulo = document.querySelector("#titulo");
const subtitulo = document.querySelector("#subtitulo");
const textoEjemplo = document.querySelector("#texto-ejemplo");
const botones = document.querySelectorAll(".btn");

console.log("🎯 Elementos seleccionados:", {
    titulo: titulo,
    subtitulo: subtitulo,
    textoEjemplo: textoEjemplo,
    cantidadBotones: botones.length
});

// ==========================================
// B. Modificar elementos del DOM
// ==========================================

// 1. Cambiar texto y estilos
let contadorCambios = 0;
const textos = [
    "¡Texto cambiado con JavaScript!",
    "El DOM es genial 🎉",
    "JavaScript manipula el contenido",
    "Texto modificado dinámicamente",
    "Este texto puede cambiar"
];

const colores = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"];

document.querySelector("#cambiarTexto").addEventListener("click", function() {
    contadorCambios++;
    const nuevoTexto = textos[contadorCambios % textos.length];
    textoEjemplo.textContent = nuevoTexto;
    
    console.log(`✏️ Texto cambiado ${contadorCambios} veces. Nuevo texto: "${nuevoTexto}"`);
});

document.querySelector("#cambiarColor").addEventListener("click", () => {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    textoEjemplo.style.color = colorAleatorio;
    textoEjemplo.style.fontWeight = "bold";
    textoEjemplo.style.fontSize = "1.2rem";
    
    console.log(`🎨 Color cambiado a: ${colorAleatorio}`);
});

// 2. Mostrar/Ocultar elementos (ejemplo de menú)
const menuOculto = document.querySelector("#menuOculto");
const botonToggleMenu = document.querySelector("#toggleMenu");

botonToggleMenu.addEventListener("click", function() {
    // Usando classList.toggle para alternar la clase
    menuOculto.classList.toggle("mostrar");
    
    const estaVisible = menuOculto.classList.contains("mostrar");
    botonToggleMenu.textContent = estaVisible ? "Ocultar Menú" : "Mostrar Menú";
    
    console.log(`👁️ Menú ${estaVisible ? 'mostrado' : 'ocultado'}`);
});

// 3. Cambiar fondo de la página (ejemplo de la demo integrada)
const fondos = ["fondo-azul", "fondo-verde", "fondo-rosa", "fondo-naranja"];
let fondoActual = 0;

document.querySelector("#cambiarFondo").addEventListener("click", () => {
    // Remover todas las clases de fondo
    document.body.classList.remove(...fondos);
    
    // Agregar la nueva clase de fondo
    fondoActual = (fondoActual + 1) % fondos.length;
    document.body.classList.add(fondos[fondoActual]);
    
    console.log(`🌈 Fondo cambiado a: ${fondos[fondoActual]}`);
});

document.querySelector("#resetearFondo").addEventListener("click", () => {
    document.body.classList.remove(...fondos);
    fondoActual = 0;
    console.log("↩️ Fondo reseteado");
});

// ==========================================
// C. EVENTOS DEL DOM
// ==========================================

// 1. Eventos de mouse (mouseover, mouseout)
const areaEvento = document.querySelector("#areaEvento");
const estadoEvento = document.querySelector("#estadoEvento");

areaEvento.addEventListener("mouseover", function() {
    areaEvento.style.background = "#bee3f8";
    areaEvento.style.transform = "scale(1.05)";
    estadoEvento.textContent = "Estado: Mouse encima 🖱️";
    estadoEvento.style.color = "#2b6cb0";
    
    console.log("🖱️ Mouse sobre el área");
});

areaEvento.addEventListener("mouseout", function() {
    areaEvento.style.background = "#e2e8f0";
    areaEvento.style.transform = "scale(1)";
    estadoEvento.textContent = "Estado: Mouse fuera 👋";
    estadoEvento.style.color = "#4a5568";
    
    console.log("👋 Mouse fuera del área");
});

areaEvento.addEventListener("click", function() {
    areaEvento.style.background = "#fbb6ce";
    estadoEvento.textContent = "Estado: ¡Área clickeada! 🎯";
    estadoEvento.style.color = "#b83280";
    
    setTimeout(() => {
        areaEvento.style.background = "#e2e8f0";
        estadoEvento.textContent = "Estado: Esperando interacción...";
        estadoEvento.style.color = "#4a5568";
    }, 1500);
    
    console.log("🎯 Área clickeada");
});

// 2. Contador de clicks
let contadorClicks = 0;
const contadorBtn = document.querySelector("#contadorBtn");
const contadorDisplay = document.querySelector("#contador");

contadorBtn.addEventListener("click", function() {
    contadorClicks++;
    contadorDisplay.textContent = contadorClicks;
    
    // Animación visual
    contadorDisplay.style.transform = "scale(1.3)";
    contadorDisplay.style.color = "#667eea";
    
    setTimeout(() => {
        contadorDisplay.style.transform = "scale(1)";
        contadorDisplay.style.color = "#333";
    }, 200);
    
    console.log(`👆 Click #${contadorClicks}`);
    
    // Easter egg: mensaje especial cada 10 clicks
    if (contadorClicks % 10 === 0) {
        alert(`🎉 ¡Has hecho ${contadorClicks} clicks! ¡Impresionante!`);
    }
});

// ==========================================
// 3. ALERTAS Y DIÁLOGOS (Interacción con el usuario)
// ==========================================

// 1. Alert básico - Mostrar mensaje
document.querySelector("#alertBtn").addEventListener("click", function() {
    alert("🎉 ¡Este es un mensaje de alerta básico!\n\nEs útil para mostrar información importante al usuario.");
    
    console.log("🚨 Se mostró un alert al usuario");
});

// 2. Confirm - Preguntar confirmación
document.querySelector("#confirmBtn").addEventListener("click", function() {
    const confirmacion = confirm("🤔 ¿Estás seguro de que quieres continuar?\n\n✅ OK = Sí\n❌ Cancelar = No");
    
    const resultadoConfirm = document.querySelector("#resultadoConfirm");
    
    if (confirmacion) {
        resultadoConfirm.textContent = "✅ El usuario confirmó (OK)";
        resultadoConfirm.style.background = "#f0fff4";
        resultadoConfirm.style.borderColor = "#38a169";
        resultadoConfirm.style.color = "#22543d";
        console.log("✅ Usuario confirmó la acción");
    } else {
        resultadoConfirm.textContent = "❌ El usuario canceló";
        resultadoConfirm.style.background = "#fed7d7";
        resultadoConfirm.style.borderColor = "#e53e3e";
        resultadoConfirm.style.color = "#742a2a";
        console.log("❌ Usuario canceló la acción");
    }
});

// 3. Prompt - Solicitar información
document.querySelector("#promptBtn").addEventListener("click", function() {
    const nombre = prompt("📝 Por favor, ingresa tu nombre:", "Estudiante");
    
    const resultadoPrompt = document.querySelector("#resultadoPrompt");
    
    if (nombre !== null && nombre.trim() !== "") {
        resultadoPrompt.textContent = `👋 Hola, ${nombre}! Gracias por participar.`;
        resultadoPrompt.style.background = "#e6fffa";
        resultadoPrompt.style.borderColor = "#38b2ac";
        resultadoPrompt.style.color = "#234e52";
        console.log(`📝 Usuario ingresó el nombre: "${nombre}"`);
    } else if (nombre === null) {
        resultadoPrompt.textContent = "🚫 Operación cancelada por el usuario";
        resultadoPrompt.style.background = "#fed7d7";
        resultadoPrompt.style.borderColor = "#e53e3e";
        resultadoPrompt.style.color = "#742a2a";
        console.log("🚫 Usuario canceló el prompt");
    } else {
        resultadoPrompt.textContent = "⚠️ No se ingresó ningún nombre";
        resultadoPrompt.style.background = "#fffbeb";
        resultadoPrompt.style.borderColor = "#d69e2e";
        resultadoPrompt.style.color = "#744210";
        console.log("⚠️ Usuario ingresó texto vacío");
    }
});

// 4. Ejemplo combinando alertas - Saludo personalizado
document.querySelector("#saludoBtn").addEventListener("click", function() {
    const saludoDiv = document.querySelector("#saludoPersonalizado");
    
    // Primero preguntamos si quiere crear un saludo
    const quiereSaludo = confirm("👋 ¿Te gustaría crear un saludo personalizado?\n\nEsto usará varios tipos de alertas.");
    
    if (!quiereSaludo) {
        saludoDiv.textContent = "🚫 Operación cancelada";
        saludoDiv.className = "saludo-resultado vacio";
        console.log("🚫 Usuario no quiso crear saludo");
        return;
    }
    
    // Pedimos el nombre
    const nombre = prompt("👤 ¿Cuál es tu nombre?", "");
    
    if (nombre === null || nombre.trim() === "") {
        alert("❌ No se puede crear un saludo sin nombre");
        saludoDiv.textContent = "❌ Saludo cancelado - Falta el nombre";
        saludoDiv.className = "saludo-resultado vacio";
        console.log("❌ Saludo cancelado por falta de nombre");
        return;
    }
    
    // Pedimos la edad (opcional)
    const edad = prompt("🎂 ¿Cuántos años tienes? (opcional)", "");
    
    // Preguntamos sobre el curso
    const estudiaUTN = confirm("🎓 ¿Estudias en la UTN?");
    
    // Creamos el saludo personalizado
    let saludo = `🎉 ¡Hola ${nombre}!`;
    
    if (edad && !isNaN(edad) && edad.trim() !== "") {
        saludo += ` Con ${edad} años,`;
    }
    
    if (estudiaUTN) {
        saludo += " es genial que estudies en la UTN. ¡Bienvenido/a a la clase de JavaScript! 🚀";
    } else {
        saludo += " ¡esperamos que disfrutes aprendiendo JavaScript! 💻";
    }
    
    // Mostrar el resultado
    saludoDiv.textContent = saludo;
    saludoDiv.className = "saludo-resultado";
    
    // Alert final con el resultado
    alert(`Saludo creado:\n\n${saludo}`);
    
    console.log("🎉 Saludo personalizado creado:", saludo);
    
    // Log con toda la información recopilada
    console.log("📊 Información del usuario:", {
        nombre: nombre,
        edad: edad || "No especificada",
        estudiaUTN: estudiaUTN ? "Sí" : "No",
        saludoCompleto: saludo
    });
});

// ==========================================
// 4. CONSUMO DE API CON FETCH
// ==========================================

// A. Cargar posts desde JSONPlaceholder
document.querySelector("#cargarPosts").addEventListener("click", async function() {
    const loadingPosts = document.querySelector("#loadingPosts");
    const listaPosts = document.querySelector("#listaPosts");
    
    // Mostrar loading
    loadingPosts.style.display = "block";
    listaPosts.innerHTML = "";
    
    console.log("📡 Iniciando carga de posts desde API...");
    
    try {
        // Fetch básico como se enseña en la clase
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        
        console.log("✅ Posts cargados:", posts);
        
        // Ocultar loading
        loadingPosts.style.display = "none";
        
        // Mostrar posts en el DOM
        posts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.className = "post-item";
            postElement.innerHTML = `
                <h4>📄 ${post.title}</h4>
                <p>${post.body}</p>
                <small>Post ID: ${post.id} | User ID: ${post.userId}</small>
            `;
            listaPosts.appendChild(postElement);
        });
        
        console.log(`📝 Se mostraron ${posts.length} posts en el DOM`);
        
    } catch (error) {
        console.error("❌ Error al cargar posts:", error);
        loadingPosts.style.display = "none";
        listaPosts.innerHTML = `
            <div style="color: red; padding: 1rem; text-align: center;">
                ❌ Error al cargar los posts: ${error.message}
            </div>
        `;
    }
});

// Botón para limpiar posts
document.querySelector("#limpiarPosts").addEventListener("click", function() {
    document.querySelector("#listaPosts").innerHTML = "";
    console.log("🧹 Posts limpiados");
});

// B. Cargar usuarios y mostrar en tabla
document.querySelector("#cargarUsuarios").addEventListener("click", async function() {
    const loadingUsuarios = document.querySelector("#loadingUsuarios");
    const tablaUsuarios = document.querySelector("#tablaUsuarios");
    
    loadingUsuarios.style.display = "block";
    tablaUsuarios.innerHTML = "";
    
    console.log("👥 Iniciando carga de usuarios desde API...");
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await response.json();
        
        console.log("✅ Usuarios cargados:", usuarios);
        
        loadingUsuarios.style.display = "none";
        
        // Crear tabla de usuarios
        const tabla = document.createElement("table");
        tabla.className = "tabla-usuarios";
        
        // Header de la tabla
        tabla.innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Ciudad</th>
                    <th>Empresa</th>
                </tr>
            </thead>
            <tbody>
                ${usuarios.map(usuario => `
                    <tr>
                        <td>${usuario.id}</td>
                        <td>${usuario.name}</td>
                        <td>${usuario.email}</td>
                        <td>${usuario.address.city}</td>
                        <td>${usuario.company.name}</td>
                    </tr>
                `).join("")}
            </tbody>
        `;
        
        tablaUsuarios.appendChild(tabla);
        console.log(`👥 Se mostraron ${usuarios.length} usuarios en la tabla`);
        
    } catch (error) {
        console.error("❌ Error al cargar usuarios:", error);
        loadingUsuarios.style.display = "none";
        tablaUsuarios.innerHTML = `
            <div style="color: red; padding: 1rem; text-align: center;">
                ❌ Error al cargar los usuarios: ${error.message}
            </div>
        `;
    }
});

// ==========================================
// 5. DEBUGGING CON CONSOLE (Herramientas de desarrollo)
// ==========================================

document.querySelector("#debugBtn").addEventListener("click", function() {
    console.log("🔍 === INFORMACIÓN DE DEBUG ===");
    console.log("📊 Estado actual de la página:");
    
    // Información del DOM
    console.log("DOM Info:", {
        titulo: titulo.textContent,
        contadorClicks: contadorClicks,
        menuVisible: menuOculto.classList.contains("mostrar"),
        fondoActual: fondos[fondoActual] || "default"
    });
    
    // Información del navegador
    console.log("Browser Info:", {
        userAgent: navigator.userAgent,
        idioma: navigator.language,
        cookiesHabilitadas: navigator.cookieEnabled,
        plataforma: navigator.platform
    });
    
    // Información de la ventana
    console.log("Window Info:", {
        ancho: window.innerWidth,
        alto: window.innerHeight,
        ubicacion: window.location.href
    });
    
    // Ejemplo de diferentes tipos de logs
    console.info("ℹ️ Este es un mensaje informativo");
    console.warn("⚠️ Este es un mensaje de advertencia");
    console.error("❌ Este es un mensaje de error (solo de ejemplo)");
    
    // Mostrar tabla con datos
    const datosTabla = [
        { Concepto: "querySelector", Usado: "✅" },
        { Concepto: "addEventListener", Usado: "✅" },
        { Concepto: "fetch API", Usado: "✅" },
        { Concepto: "DOM manipulation", Usado: "✅" }
    ];
    console.table(datosTabla);
    
    console.log("🔍 === FIN DEBUG INFO ===");
    
    alert("🔍 Información de debug generada. ¡Revisa la consola (F12)!");
});

// ==========================================
// 6. EVENTOS AL CARGAR LA PÁGINA
// ==========================================

// Mensaje de bienvenida cuando carga la página
document.addEventListener("DOMContentLoaded", function() {
    console.log("🎉 DOM completamente cargado");
    
    // Animación de entrada para el título
    titulo.style.animation = "slideDown 1s ease";
    
    // Tip para los estudiantes
    setTimeout(() => {
        console.log("💡 TIP: Intenta cambiar algunos elementos y observa los logs en la consola");
    }, 2000);
});

// Mensaje cuando se va a cerrar la página
window.addEventListener("beforeunload", function() {
    console.log("👋 ¡Gracias por usar la demo de JavaScript!");
});

// ==========================================
// 7. FUNCIONES AUXILIARES (Conceptos adicionales)
// ==========================================

// Función para generar color aleatorio (ejemplo de función reutilizable)
function generarColorAleatorio() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para mostrar mensaje con estilo
function mostrarMensaje(texto, tipo = "info") {
    const estilos = {
        info: "color: #3182ce; background: #ebf8ff; padding: 8px; border-radius: 4px;",
        success: "color: #38a169; background: #f0fff4; padding: 8px; border-radius: 4px;",
        warning: "color: #d69e2e; background: #fffbeb; padding: 8px; border-radius: 4px;",
        error: "color: #e53e3e; background: #fed7d7; padding: 8px; border-radius: 4px;"
    };
    
    console.log(`%c${texto}`, estilos[tipo]);
}

// Ejemplos de uso de las funciones auxiliares
mostrarMensaje("✅ Script de JavaScript cargado correctamente", "success");
mostrarMensaje("📚 Todos los conceptos del temario están implementados", "info");

// ==========================================
// RESUMEN DE CONCEPTOS IMPLEMENTADOS:
// ==========================================
/*
✅ 1. Introducción a JS Frontend:
   - Consola del navegador (console.log, console.error, etc.)
   - Script externo (este archivo)
   - Debugging con herramientas de desarrollo

✅ 2. Manipulación del DOM:
   - querySelector y querySelectorAll
   - Modificar textContent, innerHTML, style
   - Agregar/remover clases CSS
   - Crear elementos dinámicamente

✅ 3. Eventos básicos:
   - addEventListener para click, mouseover, mouseout
   - Manejo de eventos de formulario
   - Event listeners para interactividad

✅ 4. Alertas y diálogos:
   - alert() para mostrar mensajes
   - confirm() para obtener confirmación
   - prompt() para solicitar información
   - Combinación de alertas para flujos complejos

✅ 5. Consumo de API:
   - fetch() con JSONPlaceholder
   - Manejo de promesas con async/await
   - Manejo de errores en peticiones HTTP
   - Mostrar datos dinámicamente en el DOM

✅ 6. Conceptos adicionales:
   - Funciones reutilizables
   - Debugging con console
   - Animaciones CSS desde JavaScript
   - Manejo de estados de la aplicación
*/
