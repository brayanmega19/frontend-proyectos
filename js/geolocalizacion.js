const d = document,
n = navigator;
export default function getGeolocalizacion(id){
    const $id = d.getElementById(id);

    console.log("conexion");

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const success = position =>{
        let coords = position.coords;
        console.log("Hola", position);
        $id.innerHTML = `
        <p>Tu posicion actual es: </p>
        <ul>
            <li> Latitud: <b>${coords.latitude}</b></li>
            <li> Longitud: <b>${coords.longitude}</b></li>
            <li> Precision: <b>${coords.latitude}</b></li>
            <a href="https://www.google.com.mx/maps/@${coords.latitude},${coords.longitude},30z" target="_blank" rel="noopener">Ver en google maps</a>
        `
    },
    error = err =>{
        $id.innerHTML = `<p><mark> Error ${err.code}: ${err.message}</mark></p>`;
        console.log(`Error ${err.code} : ${err.message}`);
    }

    
    n.geolocation.getCurrentPosition(success, error, options);
}