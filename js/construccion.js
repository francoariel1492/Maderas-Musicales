//---------------ARRAYS
let guitarras = [
  {
    tipo: "LP",
    nombre: "Porteña",
    sonido: "corposo",
    peso: parseFloat(3.5),
    precio: 1000,

  },
  {
    tipo: "Strato",
    nombre: "Patagonia",
    sonido: "cremoso",
    peso: parseFloat(3.2),
    precio: 900,
  },
  {
    tipo: "Tele",
    nombre: "Norteña",
    sonido: "destellante",
    peso: parseFloat(3.8),
    precio: 800,
  },
];

//---------------FUNCIONES
// function selectPickups() {
//   let pickup =
//     prompt(`Y hablando de sonido, que tipo de microfonos vas a utilizar?

// Simples
// Dobles

// Salir`);
//   if (pickup == "Simples") {
//     simples = 200;
//     return simples;
//   } else if (pickup == "Dobles") {
//     dobles = 250;
//     return dobles;
//   } else if (pickup == "Salir") {
//     alert(
//       "Veo que haras la instalacion de los pickups por cuenta tuya, respeto eso"
//     );
//     return 0;
//   } else {
//     alert("Desafortunadamente no tenemos esos pickups en nuestro catalogo");
//     return selectPickups();
//   }
// }

// function muestra(guitarra){
//     Nombre: ${guitarra.nombre} 
//     Sonido: ${guitarra.sonido} 
//     Peso:   ${guitarra.peso}
//     Precio: ${guitarra.precio};
    
// }



// function colorGuitarra(guitarra) {

//  let rojo = document.getElementById("rojo")
//  let negro = document.getElementById("negro")
//  let sunburst = document.getElementById("sunburst")
//  let color = document.getElementById("color")

//   if (color == rojo) {
//     precioColor = 100;
//     console.log("bija")
//     return precioColor;
//   } else if (color == negro) {
//     precioColor = 125;
//     return precioColor;
//   } else if (color == sunburst) {
//     precioColor = 200;
//     return precioColor;
//   } else {
//     return 0;
//   }
// }

// function construccion() {
//     let creacion = [];
//     alert(
//         "Si lo que estas buscando es tu sonido, dejame decirte que aca lo vamos a encontrar"
//     );
//   while (true) {
//     let opcion = prompt(
//       "Elige tu sonido:\n\nLP\nStrato\nTele\n \nRecuerda que el precio es solo por el valor del mueble, la electronica, pintura y accesorios de la guitarra son aparte.\n\nSalir"
//     );
//     if (opcion == "LP") {
//       let guitarra = guitarras.find((g) => g.tipo === "LP");
//       muestra(guitarra)
//       guitarra.precio += (colorGuitarra(guitarra) + selectPickups());
//       creacion.push(guitarra);
//       alert(
//         `Perfecto, el precio de tu ${guitarra.tipo} es de ${guitarra.precio} y aproximadamente estara lista en 3 meses`
//       );break
//     } else if (opcion == "Strato") {

//       let guitarra = guitarras.find((g) => g.tipo === "Strato");
//       muestra(guitarra)
//       guitarra.precio += (colorGuitarra(guitarra) + selectPickups());
      
//       creacion.push(guitarra);
//       console.log(creacion)
//       alert(
//         `Perfecto, el precio de tu ${guitarra.tipo} es de ${guitarra.precio} y aproximadamente estara lista en 3 meses`
//       );break
//     }else if (opcion == "Tele") {
//       let tele = document.querySelector("#tele");
//       tele.className = "w-50"
//       let guitarra = guitarras.find((g) => g.tipo === "Tele");
//       muestra(guitarra)
//       guitarra.precio += (colorGuitarra(guitarra) + selectPickups());
//       creacion.push(guitarra);
//       console.log(creacion)
//       alert(
//         `Perfecto, el precio de tu ${guitarra.tipo} es de ${guitarra.precio} y aproximadamente estara lista en 3 meses`
//       );break
//     } else if (opcion == "Salir") {
//       alert("Gracias vuelva prontos");
//       break;
//     } else {
//       alert("Ingresa una de las opciones");
//     }
//   }
// }

function mostrarTotal(guitarra){
  let total = guitarra.precio + miColor()
  return total
}


function lp(){
    lpinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center"
    let guitarra = guitarras.find((g) => g.tipo === "LP");
    
    mostrarTotal(guitarra)
    

    
}

function strato(){
    stratinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center"
    let guitarra = guitarras.find((g) => g.tipo === "Strato");
    // guitarra.precio += (colorGuitarra(guitarra) + selectPickups());
    // creacion.push(guitarra);
}

function tele(){
    teleinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center"
    let guitarra = guitarras.find((g) => g.tipo === "Tele");
    muestra(guitarra)
    // guitarra.precio += (colorGuitarra(guitarra) + selectPickups());
    // creacion.push(guitarra);
}

function miColor(){
  let color = colores.value;
  return color;
  
}

function misMics(){
  let pickup = pickups.value
  return pickup
}

const pickups = document.getElementById('selectmics')
const colores = document.getElementById('select')
const rojo = document.getElementById('rojo')
const negro = document.getElementById('negro')
const sunburst = document.getElementById('sunburst')





const lpinfo = document.getElementById('lpinfo')
const stratinfo = document.getElementById('stratinfo')
const teleinfo = document.getElementById('teleinfo')

const lespaul = document.getElementById('lp');
const stratocaster = document.getElementById('strato');
const telecaster = document.getElementById('tele');

const comprar = document.getElementById('comprar')

comprar.addEventListener('click',mostrarTotal)
colores.addEventListener('onchange',miColor)
pickups.addEventListener('onchange',misMics)
lespaul.addEventListener('click', lp);
stratocaster.addEventListener('click', strato);
telecaster.addEventListener('click', tele);
