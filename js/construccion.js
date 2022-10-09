//----- LLamo el uusario del localStorage

let misClientesLocal = JSON.parse(localStorage.getItem("misclientes"))
let usuarioElegido = misClientesLocal.find(el => el.usuario == JSON.parse(localStorage.getItem("usuarioBienvenida")))

//------------Variables

const lpinfo = document.querySelector('#lpinfo');
const stratinfo = document.querySelector('#stratinfo');
const teleinfo = document.querySelector('#teleinfo');
const comprarLp = document.querySelector('#comprarLp');
const comprarStrato = document.querySelector('#comprarStrato');
const comprarTele = document.querySelector('#comprarTele');
const lesPaul = document.querySelector('#lp');
const stratoCaster = document.querySelector('#strato');
const teleCaster = document.querySelector('#tele');

let colores = document.querySelector('#coloresLp');
let pickups = document.querySelector('#pickupslp');
let guitarraDefault;
let guitarraPrecio;
let precioGuitarra = 0
let changuito = document.querySelector("#changuitoContainer");
let botonPagar = document.querySelector("#botonPagar");

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
    lpinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center";
}

function strato(){
    stratinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center";
    
}

function tele(){
    teleinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center";
    
}

function miLp(){
  guitarraDefault = "LP"
  colores = document.querySelector('#coloresLp');
  pickups = document.querySelector('#pickupslp');
  setearGuitarra()
}

function miStrato(){
  guitarraDefault = "Strato"
  colores = document.querySelector('#coloresStrato');
  pickups = document.querySelector('#pickupsStrato');
  setearGuitarra()
}

function miTele(){
  guitarraDefault = "Tele"
  colores = document.querySelector('#coloresTele');
  pickups = document.querySelector('#pickupsTele');
  setearGuitarra()
}


function setearGuitarra(){
  let guitarraInicial = guitarras.find((g) => g.tipo === guitarraDefault);
  let guitarra = {}
  Object.assign(guitarra,guitarraInicial)
  guitarra.precio = guitarraPrecioFinal(guitarra.precio,parseInt(colores.value),parseInt(pickups.value))
  precioGuitarra += guitarra.precio
  guitarrasCompradas.push(guitarra)
  usuarioElegido.guitarras = guitarrasCompradas
  
  agregarChanguito()
  Toastify({
    text: `Agregaste al carrito una ${guitarra.tipo}-${guitarra.nombre}`,
    className: "info",
    style: {
    background: "#38E54D",
    color: "#000000",
    }
  }).showToast()
  return guitarra
}

function guitarraPrecioFinal(g,c,p){
  return g + c + p
}


function pagar(){
  vaciarBoton.className = "d-none"
  botonPagar.className = "d-none"
  changuito.innerHTML += `<h4>Como desea realizar el pago?</h4><br>
                          <div class="p-2">
                          <button class="btn btn-lg text-warning bg-dark p-2 m-2" id="Efectivo">Efectivo</button>
                          <button class="btn btn-lg text-warning bg-dark p-2 m-2" id="Tarjeta">Tarjeta</button>
                          </div>`
  let efectivo = document.querySelector("#Efectivo")
  efectivo.addEventListener("click", pagoEfectivo)
  let tarjeta = document.querySelector("#Tarjeta")
  tarjeta.addEventListener("click", pagoTarjeta)
}

function pagoEfectivo(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Gracias por tu compra, nuestro tiempo estimado de construccion es de 3 meses, ante cualquier cambio te contactaremos para mas informacion.',
    showConfirmButton: false,
    timer: 5000})
  usuarioElegido.total += guitarra.precio
  usuarioElegido.guitarrasPrecio = precioGuitarra
  localStorage.setItem("misclientes", JSON.stringify(misClientesLocal))
}

function calcularTotal(){
  let totalCuotas = (usuarioElegido.guitarrasPrecio / cuotas.value) * 1.10
  totalCuotas = totalCuotas.toFixed(2)
  console.log(totalCuotas)
  usuarioElegido.guitarras = guitarrasCompradas
  usuarioElegido.guitarrasPrecio = parseFloat((usuarioElegido.guitarrasPrecio * 1.10).toFixed(2))
  usuarioElegido.total += usuarioElegido.guitarrasPrecio
  console.log(usuarioElegido.guitarrasPrecio)
  console.log(usuarioElegido.total)
  localStorage.setItem("misclientes", JSON.stringify(misClientesLocal))
  changuito.innerHTML = `<h5>Te quedarian ${cuotas.value} de ${totalCuotas}</h5>Iniciaremos con los cortes que seleccionaste y te llamaremos cuando esten listos!`
}


function pagoTarjeta(){
  changuito.innerHTML = `<h5>En cuantas cuotas quieres realizar el pago?</h5>
                        <h6>Ten en cuenta que los pagos con tarjeta tienen un recargo</h6>
                        <input type="number" value=0 name="cuotas" id="cuotas" class="cuotas">
                        <button class="btn btn-lg text-warning bg-dark p-2 m-2" id="Calcular">Calcular total</button>`
  let calcular = document.querySelector("#Calcular")
  calcular.addEventListener("click", calcularTotal)
  let cuotas = document.getElementById("cuotas");
  return cuotas.value
}

function agregarChanguito(){
  usuarioElegido.guitarrasPrecio = precioGuitarra
  changuito.innerHTML = ""
  for (let i = 0; i < guitarrasCompradas.length; i++) {
    changuito.innerHTML += `<h6>${i+1} ${guitarrasCompradas[i].tipo} $${guitarrasCompradas[i].precio}</h6>`
}
changuito.innerHTML += `<h3 class="pt-3">El total a pagar es $${usuarioElegido.guitarrasPrecio}</h3><br>`
}
function vaciarChanguito(){
  vaciarBoton.className = "d-none"
  botonPagar.className = "d-none" 
  changuito.textContent = " "
}

let boton = document.querySelector(".agregarCarrito")
boton.addEventListener("click", agregarChanguito)

let pagarBoton = document.querySelector("#pagar")
pagarBoton.addEventListener("click",pagar)

let vaciarBoton = document.querySelector("#botonVaciar")
vaciarBoton.addEventListener("click", vaciarChanguito)

