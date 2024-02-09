var grupoTarjetas1 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺",];
var grupoTarjetas2 = ["😐", "🤓", "🧐", "🥰", "🤑", "😈", "💀", "🤢",];
var grupoTarjetas3 = ["🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🥙",];

var totaltarjetas1 = grupoTarjetas1 + grupoTarjetas2 + grupoTarjetas3;

var totaltarjetas2 = grupoTarjetas1.concat(grupoTarjetas2, grupoTarjetas3);

var totaltarjetas3 = grupoTarjetas1.concat(grupoTarjetas1);

var arrayanadidado = [
    ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺",],
    ["😐", "🤓", "🧐", "🥰", "🤑", "😈", "💀", "🤢",],
    ["🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🥙",]
];



function repartetarjetas(){

    var nesa = document.getElementById("#mesa");

    console.innerHTML = "";


    totaltarjetas3.forEach(function (elemento) {
            var tarjeta = document.createElement("div");

            tarjeta.innerHTML =
            "<div class='card text-center mb-3' >"+
            "<div class='card-body'>"+
              elemento +
            "</div>"+   
            "</div>";  

            mesa.appendChild(tarjeta);  
        
        }
    );
}

repartetarjetas();