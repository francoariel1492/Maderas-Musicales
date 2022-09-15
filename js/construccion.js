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


let guitarraDefault = "LP";


function lp(){
    lpinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center"
    guitarraDefault = "LP"
    console.log(guitarraDefault)

}

function strato(){
    stratinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center"
    guitarraDefault = "Strato"
    console.log(guitarraDefault)
}

function tele(){
    teleinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center"
    guitarraDefault = "Tele"
    console.log(guitarraDefault)

}



function miLp(event){
  let guitarra = guitarras.find((g) => g.tipo === guitarraDefault);
  let total = guitarra.precio + parseInt(coloresLp.value) + parseInt(pickupsLp.value)
  let contenedorLp = document.getElementById('contenedorLp')
  contenedorLp.innerHTML = `Tu ${guitarra.tipo}-${guitarra.nombre} estara lista en 3 meses a partir de la fecha, el precio total es de $${total}`
  const viola1 = {tipo: guitarra.tipo, precio: total}
  const violaJson1 = JSON.stringify(viola1)
  sessionStorage.setItem("Item1",violaJson1)
  console.log(violaJson1)
  
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
  console.log(violaJson2)
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
  console.log(violaJson3)
  return total
}


const lpinfo = document.getElementById('lpinfo')
const stratinfo = document.getElementById('stratinfo')
const teleinfo = document.getElementById('teleinfo');




const coloresLp = document.getElementById('coloresLp')
const pickupsLp = document.getElementById('pickupslp')

const coloresStrato = document.getElementById('coloresStrato')
const pickupsStrato = document.getElementById('pickupsStrato')

const coloresTele = document.getElementById('coloresTele')
const pickupsTele = document.getElementById('pickupsTele')

let modal = document.getElementById('modalContainer')
modal.innerHTML = `<p>${sessionStorage.getItem('Item1')}
                      ${sessionStorage.getItem('Item2')}
                      ${sessionStorage.getItem('Item3')}</p>`



const comprarLp = document.getElementById('comprarLp');
comprarLp.addEventListener('click', miLp)

const comprarStrato = document.getElementById('comprarStrato');
comprarStrato.addEventListener('click', miStrato)

const comprarTele = document.getElementById('comprarTele');
comprarTele.addEventListener('click', miTele)


const lesPaul = document.getElementById('lp');
lesPaul.addEventListener('click', lp);

const stratoCaster = document.getElementById('strato');
stratoCaster.addEventListener('click', strato);

const teleCaster = document.getElementById('tele')
teleCaster.addEventListener('click', tele);


