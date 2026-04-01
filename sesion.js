let sesion = localStorage.getItem("sesionActiva");
let nombre = localStorage.getItem("nombreUsuario");
let info = document.getElementById("usuarioInfo");

// Mostrar usuario
if(sesion === "true" && info){
    info.innerHTML = `
        <p>Hola, ${nombre}</p>
        <button onclick="cerrarSesion()" class="btn">Cerrar sesión</button>
    `;
}

// Cerrar sesión
function cerrarSesion(){
    localStorage.removeItem("sesionActiva");
    localStorage.removeItem("nombreUsuario");
    window.location.href = "login.html";
}

// Proteger páginas
let pagina = window.location.pathname;

if(pagina.includes("carrito.html") || pagina.includes("tienda.html")){
    if(localStorage.getItem("sesionActiva") !== "true"){
        alert("Debes iniciar sesión");
        window.location.href = "login.html";
    }
}
