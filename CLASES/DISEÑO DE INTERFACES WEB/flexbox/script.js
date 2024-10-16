async function fetchDatosJSON() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=43.3128&longitude=-1.975&current=temperature_2m,weather_code';
    try {
        const respuesta = await fetch(url);

        if (respuesta.ok) {
            const datosJSON = await respuesta.json();

            // Mostrar datos JSON
            document.getElementById('JSON').innerHTML = datosJSON.current.temperature_2m;
            console.log(datosJSON.current.temperature_2m);
        } else {
            console.error('Fallo al procesar el archivo JSON:', respuesta.statusText);
        }
    } catch (error) {
        console.error('Error en la conexión o en el mostrado de datos JSON:', error);
    }
}
fetchDatosJSON();