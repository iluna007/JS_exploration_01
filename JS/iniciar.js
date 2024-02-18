function iniciar() {
    var movimientos = 0;
    repartetarjetas();
document.querySelector("#mov").innerText = "00"; 
document.querySelector("#feedback").classList.remove("visible");    
document.querySelectorAll(".tarjeta").forEach(
    function (elemento) {
        elemento.addEventListener("click", descubrir);
    });

iniciarCronometro();

}

iniciar();

document.querySelector("#reiniciar").addEventListener("click", reiniciar);
