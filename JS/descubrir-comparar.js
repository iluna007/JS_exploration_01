function descubrir() {
    var descubierta;
    var tarjetasPendientes;
    var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    if (totalDescubiertas.length > 1) {
        return;
    }
    this.classList.add("descubierta");

    descubierta = document.querySelectorAll(".descubierta:not(.acertada)");
    if(descubierta.length < 2){
        return;
    }

    comparar(descubierta);
    actualizarContador();
    tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
    if(tarjetasPendientes.length === 0){
        setTimeout(finalizar, 1000);
    }

}

function comparar (tarjetasAComparar){
    
    if (tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor) {
        acierto(tarjetasAComparar);
    } else {
        error(tarjetasAComparar);
    }

}