function recogedatos(evento) {
    evento.preventDefault();
    
    var email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;
    var bienvenida = document.getElementById("bienvenido");
    var mensaje1 = "Hola " + email + ", tu contraseña es correcta";
    var mensaje2 = "Tu correo es incorrecto";
    var mensaje3 = "Tu contraseña es incorrecta";
    var mensaje4 = "Tu correo y contraseña son incorrectos";

    if (email === "ikerluna@hotmail.com" && password === "gato198") {
        bienvenida.textContent = mensaje1;
    } else if (email != "ikerluna@hotmail.com" && password != "gato198"){
        bienvenida.textContent = mensaje4;
    } else if (password != "gato198") {
        bienvenida.textContent = mensaje3;
    } else if(email != "ikerluna@hotmail.com") {
        bienvenida.textContent = mensaje2;
    }
}

var myform = document.querySelector("#formulario1");

myform.addEventListener("submit", recogedatos); 

