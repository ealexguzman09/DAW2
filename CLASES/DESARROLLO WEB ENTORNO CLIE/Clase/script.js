let cuadrado = document.getElementById("cuadrado");
let arrastrando = false;

    cuadrado.addEventListener("mousedown", function(e){
        console.log("Ratón pulsado en: " + e.clientX + ", " + e.clientY);
    })

    cuadrado.addEventListener("mousemove", function(e){
        if(arrastrando){
        console.log("Arrastrando ratón en: " + e.clientX + ", " + e.clientY);
        }
    })
    
    cuadrado.addEventListener("mouseup", function(e){
        console.log("Ratón soltado en: " + e.clientX + ", " + e.clientY);
    })