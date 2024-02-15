function descubrir() {
    var descubierta;
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

}

function comparar (tarjetasAComparar){
    
    if (tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor) {
        acierto(tarjetasAComparar);
    } else {
        error(tarjetasAComparar);
    }

}