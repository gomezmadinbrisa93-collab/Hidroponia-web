let sesion = localStorage.getItem("sesionActiva");
let nombre = localStorage.getItem("nombreUsuario");
let info = document.getElementById("usuarioInfo");

// Mostrar usuario
if(sesion == "true" && info){
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
let paginaProtegida = ["carrito.html", "tienda.html"];
let ruta = window.location.pathname.split("/").pop();

if(paginaProtegida.includes(ruta)){
    if(localStorage.getItem("sesionActiva") != "true"){
        alert("Debes iniciar sesión");
        window.location.href = "login.html";
    }
}