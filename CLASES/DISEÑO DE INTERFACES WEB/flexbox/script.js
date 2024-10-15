async function fetchDatosJSON() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=43.3128&longitude=-1.975&current=temperature_2m,is_day,weather_code'; // Replace with the desired URL
    try {
        const respuesta = await fetch(url);

        if (respuesta.ok) {
            const datosJSON = await respuesta.json();

            // Mostrar datos JSON
            document.getElementById('contenidoJSON').textContent = JSON.stringify(datosJSON, null, 2);
        } else {
            console.error('Fallo al procesar el archivo JSON:', respuesta.statusText);
        }
    } catch (error) {
        console.error('Error en la conexión o en el mostrado de datos JSON:', error);
    }
}