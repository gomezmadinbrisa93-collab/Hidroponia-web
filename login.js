// LOGIN
let loginForm = document.getElementById("loginForm");

if(loginForm){
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

        if(usuarioGuardado && email == usuarioGuardado.email && password == usuarioGuardado.password){
            
            // Guardar sesión activa
            localStorage.setItem("sesionActiva", "true");
            localStorage.setItem("nombreUsuario", usuarioGuardado.nombre);

            alert("Bienvenido " + usuarioGuardado.nombre);
            window.location.href = "index.html";
        }else{
            alert("Correo o contraseña incorrectos");
        }
    });
}