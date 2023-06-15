// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelector(".cards"));
// console.log(document.querySelector(".link-dom").href);

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelector(".link-dom").href);
// console.log(document.querySelector(".link-dom").getAttribute("href"));

const $linkDOM = document.querySelector(".link-dom");
// const $html = document.documentElement;


// console.log($linkDOM);
// console.log($linkDOM.hasAttribute("rel"));
// $linkDOM.target = "_blank"
// $linkDOM.setAttribute("target","_blank"); 

// console.log($linkDOM.dataset);
// console.log($linkDOM.dataset.description);
// console.log($linkDOM.dataset.id);

// console.log($linkDOM.getAttribute("style"));
// console.log($linkDOM.style);

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);
// console.log(getComputedStyle($linkDOM));
// $linkDOM.style.setProperty("margin-left","auto");
// $linkDOM.style.setProperty("margin-right","auto");
// $linkDOM.style.setProperty("display","block");
// $linkDOM.style.width = "50%";
// $linkDOM.style.setProperty("textAlign","center");
// $linkDOM.style.textAlign = "center";
// $linkDOM.style.textAlign = "center";
// $linkDOM.style.setProperty("text-align","center");
// // $linkDOM.style.padding = "1rem";
// $linkDOM.style.setProperty("padding","1rem");
// $linkDOM.style.setProperty("width","50%");
// console.log($linkDOM);
// $linkDOM.removeAttribute("data-id");

// const $card = document.querySelector(".card");
// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
// $card.classList.add("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.remove("rotate-45");
// $card.classList.toggle("rotate-45");

 const $whatIsDOM = document.getElementById("que-es");

//  let text = `
//  <p>
//  El modelo de objetos del documento <b> DOM </b>
//  </p>
//  <p> Es necesario lograr una comprension profunda del lenguaje
//  </p>
//  <p>
//  <mark>El DOM no es parte de la especificacion de javascript</mark>
//  </p>
//  `;

//  $whatIsDOM.innerText = text;
//  $whatIsDOM.textContent = text;
//  $whatIsDOM.innerHTML = text;
//  $whatIsDOM.outerHTML = text;
// const $cards = document.querySelector(".cards");
// const $card = document.querySelector(".card");
// console.log($cards.children);
// console.log($cards.children[0]);
// console.log($cards.parentElement);
// console.log($card.nextElementSibling);
// console.log($card.closest("body"));
// console.log($cards.children[2].closest("section"));
// console.log($cards.parentElement);
// console.log($cards.nextElementSibling);
// console.log($cards.previousElementSibling);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.children[2]);
// console.log($cards.closest("section"));
// console.log($cards.children[2].closest("section"));

// $cards = document.querySelector(".cards");
// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[1]);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);   
// console.log($cards.nextElementSibling);
// console.log($cards.parentElement);
// console.log($cards.closest("html"));
// console.log($cards.children[3].closest("section"));


// console.log("reboot");

// const $cards = document.querySelector(".cards");
// console.log($cards);
// const $figure = document.createElement("figure"),
// $img = document.createElement("img"),
// $figcaption = document.createElement("figcaption"),
// $figcaptionText = document.createTextNode("Animals");

// $figure.classList.add("card");
// $img.setAttribute("src","https://placeimg.com/200/200/animals");
// $img.setAttribute("alt","Animals");

// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure);

// const continentes = ["America","Europa","Asia","Africa","Oceania"],
// $ul = document.createElement("ul");

// continentes.forEach(el =>{
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $ul.appendChild($li);
// });
// document.body.appendChild($ul);

const $cards = document.querySelector(".cards");
console.log($cards);


//Creando una callback

function cuadradoPromise(value){
    if(typeof value != "number") return Promise.reject("El vaor no es numerico");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                value,
                cuadrado: value*value
            });
        },1000);
    });
}

// cuadradoPromise(2)
// .then(obj=>{
//     console.log(`El valor del numero es: ${obj.value} y el cuadrado ${obj.cuadrado}`);
//     return cuadradoPromise(obj.cuadrado);
// })
// .then(obj=>{
//     console.log(`El valor del numero es: ${obj.value} y el cuadrado ${obj.cuadrado}`);
//     return cuadradoPromise(obj.cuadrado);
// })
// .then(obj=>{
//     console.log(`El valor del numero es: ${obj.value} y el cuadrado ${obj.cuadrado}`);
//     return cuadradoPromise(obj.cuadrado);
// })
// .then(obj=>{
//     console.log(`El valor del numero es: ${obj.value} y el cuadrado ${obj.cuadrado}`);
//     return cuadradoPromise(obj.cuadrado);
// })
// .catch(err=>{console.log(err)});

// async function funcionAsincronaAsync(){
//     try{
//         let obj = await cuadradoPromise(2);
//         console.log(`El valor es: ${obj.value} y su cuadrado ${obj.cuadrado}`);

//         obj = await cuadradoPromise(obj.cuadrado);
//         console.log(`El valor es: ${obj.value} y su cuadrado ${obj.cuadrado}`);

//         obj = await cuadradoPromise("3");
//         console.log(`El valor es: ${obj.value} y su cuadrado ${obj.cuadrado}`);

//         obj = await cuadradoPromise(obj.cuadrado);
//         console.log(`El valor es: ${obj.value} y su cuadrado ${obj.cuadrado}`);
//     }catch(err){
//         console.error(err);
//     }
// }

// funcionAsincronaAsync();

//Creando un symbol

// let arreglo = new Array(1,2,3,4,5,5);
// console.log(arreglo);

// arreglo.push(6);
// console.log(arreglo);
// console.log(arreglo.length);

// let set = new Set([1,2,3,4,5,2]);

// set.add(6);

// let set2 = new Set([]);
// console.log(set.has(1));

// let $eventoMultiple = document.getElementById("evento-multiple");
// // console.log($eventoMultiple);

// function saludar(nombre = "Robot a-138"){
//     console.log(`Un gusto conocerlos soy ${nombre}`);
// }

// $eventoMultiple.addEventListener("click",()=> {
//     saludar();
//     saludar("Ariana-346");
// });

// const mensajeDeDespedida = () =>{
//     console.log("Esta es la ultima transmisión de la mision Atenea");
//     $eventoMultiple.disabled = true;
//     $eventoMultiple.removeEventListener("dblclick", mensajeDeDespedida);
// };

// $eventoMultiple.addEventListener("dblclick",mensajeDeDespedida);

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className} el evento lo origino ${e.target.className}`);

}
const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);

$divsEventos.forEach(el =>{
   el.addEventListener("click",flujoEventos,{
    capture: false,
    once: true
   }); 
});










