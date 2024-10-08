let hora = 0;
let minuto = 0;
let segundos = 0;
let enMarcha = false;
let sumHora = 0;
let sumMinuto = 0;
let sumSegundo =  0;

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
        setInterval(actualizarCronometro, 10)
    }

}
/*Actualizar cronometro*/
function actualizarCronometro() {
    if (enMarcha) {
        segundos++;
        if (segundos == 60) {
            segundos = 0;
            minuto++;
        }
        if (minuto == 60) {
            minuto = 0;
            hora++;
        }

    if(segundos <10){
        sumSegundo = "0"+segundos;
    }else{
        sumSegundo = segundos;
    }

    if(minuto <10){
        sumMinuto = "0"+minuto;
    }else{
        sumMinuto = minuto;
    }

    if(hora <10){
        sumHora = "0"+hora;
    }else{
        sumHora = hora;
    }
        document.getElementById("nums").innerHTML = sumHora + ":" + sumMinuto + ":" + sumSegundo;
    }
}