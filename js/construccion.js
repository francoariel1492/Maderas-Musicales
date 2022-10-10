//----- LLamo el uusario del localStorage

let misClientesLocal = JSON.parse(localStorage.getItem("misclientes"));
let usuarioElegido = misClientesLocal.find((el) => el.usuario == JSON.parse(localStorage.getItem("usuarioBienvenida")));

//----------Relacion de variables con el Dom

const lpinfo = document.querySelector("#lpinfo");
const stratinfo = document.querySelector("#stratinfo");
const teleinfo = document.querySelector("#teleinfo");
const comprarLp = document.querySelector("#comprarLp");
const comprarStrato = document.querySelector("#comprarStrato");
const comprarTele = document.querySelector("#comprarTele");
const lesPaul = document.querySelector("#lp");
const stratoCaster = document.querySelector("#strato");
const teleCaster = document.querySelector("#tele");
const detalles = document.querySelector("#detalles");
let colores = document.querySelector("#coloresLp");
let pickups = document.querySelector("#pickupslp");
let changuito = document.querySelector("#changuitoContainer");
let botonPagar = document.querySelector("#botonPagar");

//----------Variables Globales

let guitarraDefault;
let guitarraPrecio;
let precioGuitarra = 0;
let guitarra;

//------------Eventos

comprarLp.addEventListener("click", miLp);
comprarStrato.addEventListener("click", miStrato);
comprarTele.addEventListener("click", miTele);
lesPaul.addEventListener("click", lp);
stratoCaster.addEventListener("click", strato);
teleCaster.addEventListener("click", tele);

//------Botones

let boton = document.querySelector(".agregarCarrito");
boton.addEventListener("click", agregarChanguito);

let pagarBoton = document.querySelector("#pagar");
pagarBoton.addEventListener("click", pagar);

let vaciarBoton = document.querySelector("#botonVaciar");
vaciarBoton.addEventListener("click", vaciarChanguito);

//---------------ARRAYS

let guitarrasCompradas = [];

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

//------------Botones que abren las imagenes de las guitarras  

function lp() {
  lpinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center";
  lesPaul.className = "d-none";
}

function strato() {
  stratinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center";
  stratoCaster.className = "d-none";
}

function tele() {
  teleinfo.className = "w-75 py-5 d-flex flex-column justify-content-center align-items-center";
  teleCaster.className = "d-none";
}

//------------ Se define la guitarra Default con sus respectivos colores y pickups

function miLp() {
  guitarraDefault = "LP";
  colores = document.querySelector("#coloresLp");
  pickups = document.querySelector("#pickupslp");
  setearGuitarra();
}

function miStrato() {
  guitarraDefault = "Strato";
  colores = document.querySelector("#coloresStrato");
  pickups = document.querySelector("#pickupsStrato");
  setearGuitarra();
}

function miTele() {
  guitarraDefault = "Tele";
  colores = document.querySelector("#coloresTele");
  pickups = document.querySelector("#pickupsTele");
  setearGuitarra();
}

//------------Se setea la guitarra al darle al boton comprar, se agrega al array guitarrasCompradas
//y se actualizan los precios, se agrega al changuito(modal), lanza el toastify

function setearGuitarra() {
  let guitarraInicial = guitarras.find((g) => g.tipo === guitarraDefault);
  guitarra = {};
  Object.assign(guitarra, guitarraInicial);
  guitarra.precio = guitarraPrecioFinal(guitarra.precio,parseInt(colores.value),parseInt(pickups.value));
  precioGuitarra += guitarra.precio;
  guitarrasCompradas.push(guitarra);
  usuarioElegido.guitarras = guitarrasCompradas;
  agregarChanguito();
  Toastify({
    text: `Agregaste al carrito una ${guitarra.tipo}-${guitarra.nombre}`,
    className: "info",
    style: {
      background: "#38E54D",
      color: "#000000",
    },
  }).showToast();
  return guitarra;
}

//------------Function con parametros para calcular el precio final de la guitarra

function guitarraPrecioFinal(g, c, p) {
  return g + c + p;
}

// ----------Al darle pagar se realizan modificaciones en el modal para continuar con las diferentes formas de pago

function pagar() {
  vaciarBoton.className = "d-none";
  botonPagar.className = "d-none";
  changuito.innerHTML += `<h4>Como desea realizar el pago?</h4><br>
                          <div class="p-2">
                          <button class="btn btn-lg text-warning bg-dark p-2 m-2" id="Efectivo">Efectivo</button>
                          <button class="btn btn-lg text-warning bg-dark p-2 m-2" id="Tarjeta">Tarjeta</button>
                          </div>`;
  let efectivo = document.querySelector("#Efectivo");
  efectivo.addEventListener("click", pagoEfectivo);
  let tarjeta = document.querySelector("#Tarjeta");
  tarjeta.addEventListener("click", pagoTarjeta);
}

//-----Al realizar el pago en efectivo se dispara la notificacion de sweet alert, se actualizan los precios
//-----del usuario de las guitarras y se envian los detalles de la compra por email, luego vuelve al inicio

function pagoEfectivo() {
  Swal.fire({
    position: "center",
    icon: "success",
    title:
      "Gracias por tu compra, nuestro tiempo estimado de construccion es de 3 meses.",
    showConfirmButton: false,
    timer: 5000,
  });
  usuarioElegido.total += usuarioElegido.guitarrasPrecio;
  usuarioElegido.guitarrasPrecio = precioGuitarra;
  localStorage.setItem("misclientes", JSON.stringify(misClientesLocal));
  setTimeout(() => {
    window.location.href = "../inicio.html";
  }, 2000);
  envioDetallesDeCompra();

}

//------Se calculan el total de cada cuota seleccionada y el precio con interes final, de nuevo se actualizan
//------los totales y se envian los detalles de la compra por email, luego vuelve al inicio
function calcularTotal() {
  let totalCuotas = (usuarioElegido.guitarrasPrecio / cuotas.value) * 1.1;
  totalCuotas = totalCuotas.toFixed(2);
  usuarioElegido.guitarras = guitarrasCompradas;
  usuarioElegido.guitarrasPrecio = parseFloat((usuarioElegido.guitarrasPrecio * 1.1).toFixed(2));
  usuarioElegido.total += usuarioElegido.guitarrasPrecio;
  localStorage.setItem("misclientes", JSON.stringify(misClientesLocal));
  changuito.innerHTML = `<h5>Te quedarian ${cuotas.value} de ${totalCuotas}</h5>Iniciaremos con los cortes que seleccionaste y te llamaremos cuando esten listos!`;
  envioDetallesDeCompra();
  setTimeout(() => {
    window.location.href = "../inicio.html";
  }, 2222);
}

//---------Se actualiza el modal para realizar el pago con tarjeta

function pagoTarjeta() {
  changuito.innerHTML = `<h5>En cuantas cuotas quieres realizar el pago?</h5>
                        <h6>Ten en cuenta que los pagos con tarjeta tienen un recargo</h6>
                        <input type="number" value=0 name="cuotas" id="cuotas" class="cuotas">
                        <button class="btn btn-lg text-warning bg-dark p-2 m-2" id="Calcular">Calcular total</button>`;
  let calcular = document.querySelector("#Calcular");
  calcular.addEventListener("click", calcularTotal);
  let cuotas = document.getElementById("cuotas");
  return cuotas.value;
}

//-----------Se agrega al changuito(modal) las guitarras y el precio total de la compra
function agregarChanguito() {
  vaciarBoton.className = "p-2";
  botonPagar.className = "p-2";
  usuarioElegido.guitarrasPrecio = precioGuitarra;
  changuito.innerHTML = "";
  for (let i = 0; i < guitarrasCompradas.length; i++) {
    changuito.innerHTML += `<h6>${i + 1} ${guitarrasCompradas[i].tipo} $${guitarrasCompradas[i].precio}</h6>`;
  }
  changuito.innerHTML += `<h3 class="pt-3">El total a pagar es $${usuarioElegido.guitarrasPrecio}</h3><br>`;
}

//----------Al vaciar el changuito vuelve actualiza el modal, vacia el array de guitarras compradas y
//---------- me deja los precios en 0
function vaciarChanguito() {
  vaciarBoton.className = "d-none";
  botonPagar.className = "d-none";
  changuito.textContent = " ";
  guitarrasCompradas = [];
  usuarioElegido.guitarrasPrecio = 0
  precioGuitarra = 0
}

//----------Se envia un form con los detalles de la compra al email ingresado al inicio en el registro de usuario

function envioDetallesDeCompra() {
  detalles.innerHTML += `<form class="d-none" action="https://formsubmit.co/${usuarioElegido.email}" method="POST">
      <div class="form-floating col-sm-4 py-3 my-3" >
      <textarea class="form-control detallesGuitarras"  name="Lista de Guitarras" id="floatingTextarea2" style="height: 250px"></textarea>
      </div>
      <p>
      <span class="total-clicks"></span>
      times
      </p>
      <button type="submit" id="btn1" onclick="addClick()" class="btn btn-lg text-warning bg-dark ">Enviar</button>
      </div>
      <input type="hidden" name="_next" value="">
      <input type="hidden" name="_captcha" value="false">
      </form>`;

  const detallesGuitarras = document.querySelector(".detallesGuitarras");
  for (let i = 0; i < guitarrasCompradas.length; i++) {
    detallesGuitarras.textContent += `${i + 1} ${guitarrasCompradas[i].tipo} $${
      guitarrasCompradas[i].precio
    }\n`;
  }

  detallesGuitarras.textContent += `\nEl total es $${usuarioElegido.guitarrasPrecio}\n\n
Recorda que nuestro tiempo estimado de construccion es de 3 meses, cualquier consulta acercate al taller o contactanos
  \n\nGracias por confiar en Maderas Musicales`;
  encodeURI(detallesGuitarras);

  let clicks = 1;

  function addClick() {
    document.querySelector(".total-clicks").textContent = clicks;
  }
  function clickButton() {
    document.querySelector("#btn1").click();
  }
  setTimeout(clickButton, 1000);
}
