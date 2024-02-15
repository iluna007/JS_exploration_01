function barajaTarjetas() {
    var resultado;
    resultado = totalTarjetas.sort(function () {
        return 0.5 - Math.random();
    });
    return resultado;
}

function repartetarjetas(){
    var mesa = document.getElementById("mesa");
    var tarjetasBarajadas = barajaTarjetas();

    console.clear();

    tarjetasBarajadas.forEach(function (elemento) {
            var tarjeta = document.createElement("div");

            tarjeta.innerHTML =
            "<div class='tarjeta' data-valor=" + elemento + " >"+
            "<div class='tarjeta__contenido'>"+
              elemento +
            "</div>"+   
            "</div>";  

            mesa.appendChild(tarjeta);  
        }
    );
}