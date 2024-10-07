let hora = 0;
let minuto = 0;
let segundos = 0;
let enMarcha = false;

/*Activar Cronometro*/
function activarCronometro() {
    enMarcha = !enMarcha;
    if (enMarcha) {
        document.getElementById("boton").innerHTML = "Pause"
    }
    else {
        document.getElementById("boton").innerHTML = "Continue"
    }
    if(segundos == 0 && minuto == 0 && hora == 0){
        setInterval(actualizarCronometro, 1000)
    }

}
/*Actualizar cronometro*/
function actualizarCronometro() {
    if (enMarcha) {
        segundos++;
        console.log(segundos)
        if (segundos == 60) {
            segundos = 0;
            minuto++;
        }
        if (minuto == 60) {
            minuto = 0;
            hora++;
        }
        document.getElementById("nums").innerHTML = hora + ":" + minuto + ":" + segundos;
    }
}
