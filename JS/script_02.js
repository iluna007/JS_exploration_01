var Tarjetas1 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺",];
// var grupoTarjetas2 = ["😐", "🤓", "🧐", "🥰", "🤑", "😈", "💀", "🤢",];
// var grupoTarjetas3 = ["🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🥙",];

// var totaltarjetas1 = grupoTarjetas1 + grupoTarjetas2 + grupoTarjetas3;

// var totaltarjetas2 = grupoTarjetas1.concat(grupoTarjetas2, grupoTarjetas3);

var totalTarjetas = Tarjetas1.concat(Tarjetas1);

function barajaTarjetas() {
    var resultado;
    resultado = totalTarjetas.sort(function () {
        return 0.5 - Math.random();
    });
    return resultado;
}


// var arrayanadidado = [
//     ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺",],
//     ["😐", "🤓", "🧐", "🥰", "🤑", "😈", "💀", "🤢",],
//     ["🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🥙",]
// ];



function repartetarjetas(){
    var mesa = document.getElementById("mesa");
    var tarjetasBarajadas = barajaTarjetas();

    console.clear();

    tarjetasBarajadas.forEach(function (elemento) {
            var tarjeta = document.createElement("div");

            tarjeta.innerHTML =
            "<div class='tarjeta'>"+
            "<div class='tarjeta__contenido'>"+
              elemento +
            "</div>"+   
            "</div>";  

            mesa.appendChild(tarjeta);  
        }
    );
}

function descubrir() {
    this.classList.add("descubierta");
}

repartetarjetas();

document.querySelectorAll(".tarjeta").forEach(
    function (elemento) {
        elemento.addEventListener("click", descubrir);
    }
);



console.log(barajaTarjetas());