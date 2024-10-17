fetch('https://api.open-meteo.com/v1/forecast?latitude=43.3128&longitude=-1.975&current=temperature_2m,is_day,weather_code&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min')
    .then(Response => Response.json())
    .then(data =>{
        let codigoT = data.current.weather_code;
        let doN = data.current.is_day;
        document.getElementById("JSON").innerHTML = data.current.temperature_2m;

        let imagen;
        if(codigoT==63){
            imagen = "<img src='/Imagenes/63.png' alt=>"
        }
        if(codigoT==65){
            imagen = "<img src='/Imagenes/65.png' alt=>"
        }

        document.getElementById("cod").innerHTML = imagen;
    });