import scrollTopButton from "./boton_scroll.js";
import slide from "./carrusel.js";
import countdown from "./cuenta_regresiva.js";
import userDeviceInfo from "./deteccion_dispositivo.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import searchFilters from "./filtro_busquedas.js";
import getGeolocalizacion from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import respMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollSpy from "./scroll_espia.js";
import draw from "./sorteo.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm();
    countdown("countdown",
    "JUL 26, 2023 02:27:19",
    "Feliz cumpleaños docente digital",
    "#activar-cuenta");
    scrollTopButton(".scroll-top-btn");
    respMedia("youtube", 
    "(min-width: 1024px)",
    `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank" rel="noopener">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    respMedia("gmaps", 
    "(min-width: 1024px)", 
    `<a href="https://goo.gl/maps/b7oFWXdNtiCVngSV6?coh=178571&entry=tt" target="_blank" rel="noopener">Ver ubicacion</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d834206.5671387637!2d134.7952290528579!3d35.24084327880751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fff7420f91f1b61%3A0x590a7bc238b19538!2sPrefectura%20de%20Kioto%2C%20Jap%C3%B3n!5e0!3m2!1ses!2smx!4v1685405459511!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device"); 
    webCam("webcam");
    getGeolocalizacion("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn",".player")
    slide();
    scrollSpy();
});

d.addEventListener("keydown", e=>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();


// window.addEventListener("offline", (event) => {
//     console.log("You are now connected to the network.");
//   });   