let base_preguntas = readText("base-preguntas.json")
let interprete_bp = JSON.parse(base_preguntas)
let pregunta
let posibles_respuestas
let btn_correspondiente = [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
]
let preguntas_hechas = 0;
let preguntas_correctas = 0;
let puntaje = 0;
select_id("puntaje").innerHTML = puntaje;

escogerPreguntaAleatoria()

function escogerPreguntaAleatoria() {
    escogerPregunta(Math.floor(Math.random() * interprete_bp.length))
}


function escogerPregunta(n) {
    pregunta = interprete_bp[n]

    select_id("pregunta").innerHTML = pregunta.pregunta
    desordenarRespuestas(pregunta)
}


function desordenarRespuestas(pregunta) {
    posibles_respuestas = [
        pregunta.respuesta, 
        pregunta.incorrecta1, 
        pregunta.incorrecta2, 
        pregunta.incorrecta3
    ]
    posibles_respuestas.sort(() => Math.random() - 0.5)

    select_id("btn1").innerHTML = posibles_respuestas[0]
    select_id("btn2").innerHTML = posibles_respuestas[1]
    select_id("btn3").innerHTML = posibles_respuestas[2]
    select_id("btn4").innerHTML = posibles_respuestas[3]
}




let suspender_botones = false;
function oprimir_btn(i) {
    if (suspender_botones) {
        return;
    }
    suspender_botones = true;
    if (posibles_respuestas[i] == pregunta.respuesta) {
        preguntas_correctas++;
        preguntas_hechas++;
        btn_correspondiente[i].style.background = "lightgreen";
        puntaje++;
    } else {
        btn_correspondiente[i].style.background = "pink";
        preguntas_hechas++;
    }
    for (let j = 0; j < 4; j++) {
        if (posibles_respuestas[j] == pregunta.respuesta) {
        btn_correspondiente[j].style.background = "lightgreen";
        break;
        }
        select_id("puntaje").innerHTML = `${puntaje} / ${"10"}`;
        
    }
    if(preguntas_hechas == "10"){
        Swal.fire({
            title: 'Juego terminado!',
            text: `${puntaje} / ${"10"}`,
            icon: 'success',
            confirmButtonText: "Cerrar"
        });
        puntaje=0;
    }
        setTimeout(() => {
            reiniciar()
            suspender_botones = false;
        }, 3000);
        function reiniciar(){
            for (const btn of btn_correspondiente) {
                btn.style.background = "white";
            }
            escogerPreguntaAleatoria()
        }
}





function select_id(id){
    return document.getElementById(id)
}

function style(id){
    return select_id(id).style
}


function readText(ruta_local) {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", ruta_local, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        texto = xmlhttp.responseText;
    }
    return texto;
    }


