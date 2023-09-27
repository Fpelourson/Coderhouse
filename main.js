let correctas = [2,1,1,2];

let opcionElegida = [];

let cantidadCorrectas = 0;

function respuesta(numPregunta, seleccionada){
    opcionElegida[numPregunta] = seleccionada.value;
}

function corregir(){
    cantidadCorrectas = 0;
    for(i=0; i < correctas.length; i++){
        if(correctas[i] == opcionElegida[i])
            cantidadCorrectas++;
    }

document.getElementById("resultado").innerHTML = cantidadCorrectas;
}

