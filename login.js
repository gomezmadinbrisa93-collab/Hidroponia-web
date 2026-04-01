// ===== REGISTRO =====
let registroForm = document.getElementById("registroForm");

if(registroForm){
    registroForm.addEventListener("submit", function(e){
        e.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let usuario = {
            nombre: nombre,
            email: email,
            password: password
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Cuenta creada correctamente");

        // Redirigir a login
        window.location.href = "login.html";
    });
}


// ===== LOGIN =====
let loginForm = document.getElementById("loginForm");

if(loginForm){
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

        if(usuarioGuardado && email === usuarioGuardado.email && password === usuarioGuardado.password){
            
            localStorage.setItem("sesionActiva", "true");
            localStorage.setItem("nombreUsuario", usuarioGuardado.nombre);

            alert("Bienvenido " + usuarioGuardado.nombre);
            window.location.href = "index.html";

        }else{
            alert("Correo o contraseña incorrectos");
        }
    });
}
