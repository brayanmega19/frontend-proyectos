import {PI} from "./constantes.js";
console.log("Archivo modulos");
console.log(PI);

console.log("Prueba de funcionamiento");

// let palabra = prompt("Introduce una cadena de texto");
//Ejercicio 1
// function longitudCadena(cadena=""){
//     if(!cadena){
//         console.log("La longitud de la cadena es: ");
//     }
//     else{
//         console.log(`La longitud de la cadena es: ${cadena.length}`);
//     }
// }

// longitudCadena("Brayan");
///Ejercicio 2
// let cortarCadena = (numero = 0, cadena = "")=>{
//     (!cadena)
//     ?console.warn("No se introdujo una cadena")
// : console.log(cadena.slice(0,numero));
// }
// let str = "Hola mi nombre es Brayan Ortega";
// cortarCadena(6,str);
////////////////////
//////////Ejercicio 3
// let arreglo;
// const separarCadena = (cadena = "",caracter=undefined)=>{
//     (!cadena)?
//     console.warn("No se introdujo ninguna cadena de texto"):
//     (caracter === undefined)?
//     console.warn("No se introdujo un caracter por el cual separar el texto"):
//     arreglo = cadena.split(caracter);
// }
// let nombre = "Hola a todo mundo mi nombre es Brayan";
// separarCadena(nombre,"");
// console.log(arreglo);

// let arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr.reverse());
//////////55
// let inverted;
// const invertirTexto = (texto="") =>{
//     if (!texto){
//     return console.warn("No introdujiste ninguna pieza de texto para invertir")};
//     inverted = texto.split("").reverse().join("");
   
// }
// invertirTexto("Hola mundo");
// console.log(inverted);
// // console.log(palabra);
// console.log("La longitud de la cadena de texto es: "+palabra.length);

////666666666666666
// const contarPalabra = (palabra ="", texto="")=>{
// if(!palabra) return console.warn("No se introdujo minguna palabra a buscar");
// if(!texto) return console.warn("No se introdujo un texto");

// let i=0,contador=0;

// while(i !== -1){
//     i = texto.indexOf(palabra,i);
//     if(i !== -1){
//         i++;
//         contador++;
//     }
// }
// return console.info(`El numero de veces que aparece la palabra ${palabra} en el texto es ${contador}`);
// };

// let texto = "palabra se cuenta el numero de palabra que aparece la palabra en cuestion";
// let palabra = "palabra";

// contarPalabra(palabra,texto);
// contarPalabra();
//////7777777
//Determinar si la siguiente palabra es un palindromo
// let palabraDividida;

// const convertir = (palabra="") =>{
//     if(!palabra) return console.warn("No se introdujo una palabra");
//     palabra = palabra.toUpperCase();
//     let respaldo = palabra;
//     palabraDividida = palabra.split("").reverse().join("");
//     if(respaldo === palabraDividida) return console.log("Es palidromo");
//     return console.log("No es un palindromo");
    
// };
// convertir("Ana");

//////88888888
//Generar numeros aleatorios
// const aleatorios = () =>{
//     let numero = Math.round(500 + Math.random()*100);
//     return console.log(numero);
// };
// aleatorios();
///////99999999
// const capicua = (numero = undefined)=>{
//     if(typeof numero !== "number") return console.error("El valor no es numerico");
//     if(!numero === undefined) return console.warn("No se introdujo un numero");

//     let cadena = numero.toString();
//     let respaldo = cadena;

//     cadena = cadena.split("").reverse().join("");
//     console.log(respaldo);
//     console.log(cadena);
//     if(cadena === respaldo){
//         return console.log("El numero es capicua");
//     }
//     else return console.log("El numero no es capicua");
// }
// capicua("hola");

// const factorial = (numero = undefined)=>{
//     if(numero === undefined) return console.error("No se introdujo valor");
//     if(typeof numero !== "number") return console.error("El valor introducido no es numerico");
//     if(!numero) return console.warn("El valor introducido es cero");
//     let acumulador=1;
//     for(let i=1; i<=numero; i++){
//         acumulador *= i;
//     }
//     return console.log(acumulador);
// }
// factorial();

// const primo = (numero = undefined) =>{
//     if(numero === undefined) return console.error("No se introdujo ningun valor");
//     if(typeof numero !== "number") return console.error("El valor no es numerico");
//     if(!numero) return console.warn("El valor es cero");

//     let primo = true;

//     for(let i=2; i<numero; i++){
//         if(numero%i === 0){
//             primo = false;
//         }
//     }
//     (primo)? console.log("El numero es primo"):console.log("El numero no es primo");
// }
// primo(12);

//1010101010
// const numeroPar = (numero = undefined)=>{
    
//     if(numero === undefined) return console.warn("No se introdujo ningun numero");
//     if(typeof numero !== "number") return console.warn("El valor ingresado no es numerico");
//     if(numero === 0) return console.warn("El numero ingresado es cero");

//     if(numero % 2 === 0)return console.log("El valor es par");
//     return console.log("El numero no es par");

// };
// numeroPar(-8)

// const convertirGrados = (grados=undefined, tipo="")=>{
//     if(grados === undefined) console.warn("No se introdujo una temperatura");
//     if(typeof grados !== "number") console.warn("No se introdujo un valor numerico");
//     if(!tipo) return console.warn("No se introdujo la unidad de medida");
//     if(typeof tipo !== "string") return console.warn("No se introdujo un valor cadena ");
    
//     tipo = tipo.toUpperCase();
//     if(tipo === "F"){
//         let centigrados = (grados-32)/1.8;
//         console.log(`La temperatura en centigrados son: ${centigrados}`);
//     }
//     if(tipo === "C"){
//         let farenheit = (grados*9)/5 +32;
//         console.log(`La temperatura en farenheit son: ${farenheit}`)
//     }
// };
// convertirGrados(0,"C");

// const contabilizar = (cadena="") =>{
//     if(!cadena) return console.warn("No se introdujo ninguna cadena de texto");
//     if(typeof cadena !== "string") return console.warn("El valor introducido no es cadena de texto");

//     let vocales = 0, consonantes = 0;

//     cadena = cadena.toLowerCase();

//     for(let letra of cadena){
//         if(/[aeiouáéíóúü]/.test(letra)) vocales++;

//         if(/[bcdfghjklmnñpqerstvwxyz]/.test(letra)) consonantes++;
//     }
//    return console.log({
//         cadena,
//         vocales,
//         consonantes
//    });
// };
// contabilizar("Hola");

// const determinarNombre = (nombre = "")=>{
//     if(!nombre) return console.warn("No se introdujo ningun nombre");
//     if(typeof nombre !== "string") return console.warn("El valor introducido no es una cadena");


// }

// const convertirFuncion = (arreglo = undefined) =>{

//     if(arreglo === undefined) return console.warn("No se introdujo ningun valor");
//     if(!(arreglo instanceof Array)) return console.warn("No se introdujo un arreglo");
//     let nuevoArreglo = [];


//     for(let i of arreglo){
//         if(typeof i !== "number") return console.warn("El arreglo contiene elementos que no son numericos");
//         nuevoArreglo.push(Math.pow(i,2));
//     }
//     for(let i of nuevoArreglo){
//         console.log(i);
//     }
// };

// convertirFuncion([1,2,3,4]);

