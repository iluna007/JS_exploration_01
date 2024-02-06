function recogedatos(evento) {
    evento.preventDefault();
    
    var email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;
    var bienvenida = document.getElementById("bienvenido");
    var mensaje = "Hola " + email + ", tu contraseña es: " + password;

    bienvenida.textContent = mensaje;
}


var myform = document.querySelector("#formulario1");

myform.addEventListener("submit", recogedatos);
