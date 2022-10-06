//----- LLamo el uusario del localStorage

let misClientesLocal = JSON.parse(localStorage.getItem("misclientes"))
let usuarioElegido = misClientesLocal.find(el => el.usuario == JSON.parse(localStorage.getItem("usuarioBienvenida")))

//------------Variables

const lpinfo = document.querySelector('#lpinfo');
const stratinfo = document.querySelector('#stratinfo');
const teleinfo = document.querySelector('#teleinfo');
const coloresLp = document.querySelector('#coloresLp');
const pickupsLp = document.querySelector('#pickupslp');
const coloresStrato = document.querySelector('#coloresStrato');
const pickupsStrato = document.querySelector('#pickupsStrato');
const coloresTele = document.querySelector('#coloresTele');
const pickupsTele = document.querySelector('#pickupsTele');
const comprarLp = document.querySelector('#comprarLp');
const comprarStrato = document.querySelector('#comprarStrato');
const comprarTele = document.querySelector('#comprarTele');
const lesPaul = document.querySelector('#lp');
const stratoCaster = document.querySelector('#strato');
const teleCaster = document.querySelector('#tele');



let guitarraDefault;
let guitarra
let total
let precioFinal = 0


//------------Eventos

comprarLp.addEventListener('click', miLp)
comprarStrato.addEventListener('click', miStrato)
comprarTele.addEventListener('click', miTele)
lesPaul.addEventListener('click', lp);
stratoCaster.addEventListener('click', strato);
teleCaster.addEventListener('click', tele);

//---------------ARRAYS
let guitarrasCompradas = []
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

//------------Funciones

function lp(){
    lpinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center"

}

function strato(){
    stratinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center"
    
}

function tele(){
    teleinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center"
    
}

function miLp(){
  guitarraDefault = "LP"
  guitarra = guitarras.find((g) => g.tipo === guitarraDefault);
  let total = guitarra.precio + parseInt(coloresLp.value) + parseInt(pickupsLp.value)
  guitarra.precio = total
  guitarrasCompradas.push(guitarra)
  usuarioElegido.guitarras = guitarrasCompradas
  misClientesLocal.splice('usuarioElegido.id','usuario.id')
  localStorage.setItem("misclientes", JSON.stringify(misClientesLocal))
  Toastify({
    text: `Comenzaremos con la construccion de tu ${guitarra.tipo}-${guitarra.nombre}`,
    className: "info",
    style: {
    background: "#38E54D",
    color: "#000000",
    }
  }).showToast()

}

function miStrato(){
  guitarraDefault = "Strato"
  guitarra = guitarras.find((g) => g.tipo === guitarraDefault);
  let total = guitarra.precio + parseInt(coloresStrato.value) + parseInt(pickupsStrato.value)
  guitarra.precio = total
  guitarrasCompradas.push(guitarra)
  usuarioElegido.guitarras = guitarrasCompradas
  misClientesLocal.splice('usuarioElegido.id','usuario.id')
  localStorage.setItem("misclientes", JSON.stringify(misClientesLocal))
  Toastify({
    text: `Comenzaremos con la construccion de tu ${guitarra.tipo}-${guitarra.nombre}`,
    className: "info",
    style: {
    background: "#38E54D",
    color: "#000000",
    }
  }).showToast()
}

function miTele(){
  guitarraDefault = "Tele"
  guitarra = guitarras.find((g) => g.tipo === guitarraDefault);
  let total = guitarra.precio + parseInt(coloresTele.value) + parseInt(pickupsTele.value)
  guitarra.precio = total
  guitarrasCompradas.push(guitarra)
  usuarioElegido.guitarras = guitarrasCompradas
  misClientesLocal.splice('usuarioElegido.id','usuario.id')
  localStorage.setItem("misclientes", JSON.stringify(misClientesLocal))
  Toastify({
    text: `Comenzaremos con la construccion de tu ${guitarra.tipo}-${guitarra.nombre}`,
    className: "info",
    style: {
    background: "#38E54D",
    color: "#000000",
    }
  }).showToast()
}




