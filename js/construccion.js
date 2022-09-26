//------------Variables

const lpinfo = document.getElementById('lpinfo');
const stratinfo = document.getElementById('stratinfo');
const teleinfo = document.getElementById('teleinfo');
const coloresLp = document.getElementById('coloresLp');
const pickupsLp = document.getElementById('pickupslp');
const coloresStrato = document.getElementById('coloresStrato');
const pickupsStrato = document.getElementById('pickupsStrato');
const coloresTele = document.getElementById('coloresTele');
const pickupsTele = document.getElementById('pickupsTele');
const comprarLp = document.getElementById('comprarLp');
const comprarStrato = document.getElementById('comprarStrato');
const comprarTele = document.getElementById('comprarTele');
const lesPaul = document.getElementById('lp');
const stratoCaster = document.getElementById('strato');
const teleCaster = document.getElementById('tele');

let guitarraDefault = "LP";


//------------Eventos

comprarLp.addEventListener('click', miLp)
comprarStrato.addEventListener('click', miStrato)
comprarTele.addEventListener('click', miTele)
lesPaul.addEventListener('click', lp);
stratoCaster.addEventListener('click', strato);
teleCaster.addEventListener('click', tele);

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

//------------Funciones
function lp(){
    lpinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center"
    guitarraDefault = "LP"
}
function strato(){
    stratinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center"
    guitarraDefault = "Strato"
}
function tele(){
    teleinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center"
    guitarraDefault = "Tele"
}

function miLp(event){
  let guitarra = guitarras.find((g) => g.tipo === guitarraDefault);
  let total = guitarra.precio + parseInt(coloresLp.value) + parseInt(pickupsLp.value)
  let contenedorLp = document.getElementById('contenedorLp')
  contenedorLp.innerHTML = `Tu ${guitarra.tipo}-${guitarra.nombre} estara lista en 3 meses a partir de la fecha, el precio total es de $${total}`
  const viola1 = {tipo: guitarra.tipo, precio: total}
  const violaJson1 = JSON.stringify(viola1)
  sessionStorage.setItem("Item1",violaJson1)
  return total
}

function miStrato(event){
  let guitarra = guitarras.find((g) => g.tipo === guitarraDefault);
  let total = guitarra.precio + parseInt(coloresStrato.value) + parseInt(pickupsStrato.value)
  let contenedorStrato = document.getElementById('contenedorStrato')
  contenedorStrato.innerHTML = `Tu ${guitarra.tipo}-${guitarra.nombre} estara lista en 3 meses a partir de la fecha, el precio total es de $${total}`
  const viola2 = {tipo: guitarra.tipo, precio: total}
  const violaJson2 = JSON.stringify(viola2)
  sessionStorage.setItem("Item2",violaJson2)
  return total
}

function miTele(event){
  let guitarra = guitarras.find((g) => g.tipo === guitarraDefault);
  let total = guitarra.precio + parseInt(coloresTele.value) + parseInt(pickupsTele.value)
  let contenedorTele = document.getElementById('contenedorTele')
  contenedorTele.innerHTML = `Tu ${guitarra.tipo}-${guitarra.nombre} estara lista en 3 meses a partir de la fecha, el precio total es de $${total}`
  const viola3 = {tipo: guitarra.tipo, precio: total}
  const violaJson3 = JSON.stringify(viola3)
  sessionStorage.setItem("Item3",violaJson3)
  return total
}
