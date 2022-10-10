//----------Import  de la clase Mueble
import { Mueble } from "../classes/clases.js";

//---------- LLamo el uusario del localStorage

let misClientesLocal = JSON.parse(localStorage.getItem("misclientes"));
let usuarioElegido = misClientesLocal.find((el) => el.usuario == JSON.parse(localStorage.getItem("usuarioBienvenida"))
);

//---------- Variables globales

let muebles = [];
let mueble;
let precioTotal = 0;
let totalCuotas = 0;
let precioConInteres = 0;

//precios maderas

let ebanoPrecio = 100;
let alisoPrecio = 120;
let nogalPrecio = 90;
let rosewoodPrecio = 120;

//----------Relacion de variables con el Dom

document.querySelector("#span1").textContent = ebanoPrecio;
document.querySelector("#span2").textContent = alisoPrecio;
document.querySelector("#span3").textContent = nogalPrecio;
document.querySelector("#span4").textContent = rosewoodPrecio;

let changuito = document.querySelector(".changuitoContainer");
let botonPagar = document.querySelector("#botonPagar");
const detalles = document.querySelector("#detalles");

//----------Inputs

let ebanoM = document.querySelector("#ebanoM");
let alisoM = document.querySelector("#alisoM");
let nogalM = document.querySelector("#nogalM");
let rosewoodM = document.querySelector("#rosewoodM");

//------Botenes/Eventos

let boton = document.querySelector("#agregarCarrito");
boton.addEventListener("click", agregarChanguito);

let pagarBoton = document.querySelector("#pagar");
pagarBoton.addEventListener("click", pagar);

let vaciarBoton = document.querySelector("#botonVaciar");
vaciarBoton.addEventListener("click", vaciarChanguito);

//----------Funciones


//----------se chequean los inputs y en caso de estar todos vacios se pide que se ingrese una cantidad
//---------- de lo contrario se avisa con una sweet alert que los elementos fueron agregados al changuito
function checkInputs() {
  ebanoM.value == 0 && alisoM.value == 0 && nogalM.value == 0 && rosewoodM.value == 0
    ? Toastify({
        text: "Ingresa una cantidad porfavor",
        className: "info",
        style: {
          background: "#FF0000",
        },
      }).showToast()
    : Swal.fire({
        position: "center",
        icon: "success",
        title: "Tus elementos fueron agregados al carrito",
        showConfirmButton: false,
        timer: 1600,
      });
}

//----------Se agregan los elementos al changuito(modal) actualizandolo al mismo tiempo y tambien haciendo
//----------las cuentas de loes respectivos precios, tambien cada mueble se transfiere a la lista muebles
//----------se chequean los inputs y mediante un for se agrega la informacion al modal

function agregarChanguito() {
  botonPagar.className = "p-2";
  vaciarBoton.className = "p-2";
  while (true) {
    if (ebanoM.value > 0) {
      mueble = new Mueble(muebles.length,ebanoM.name,ebanoM.value,ebanoPrecio);
      precioTotal += mueble.calcularPrecio();
      mueble.precio = mueble.calcularPrecio();
      muebles.push(mueble);
    }
    if (alisoM.value > 0) {
      mueble = new Mueble(muebles.length,alisoM.name,alisoM.value,alisoPrecio);
      precioTotal += mueble.calcularPrecio();
      mueble.precio = mueble.calcularPrecio();
      muebles.push(mueble);
    }
    if (nogalM.value > 0) {
      mueble = new Mueble(muebles.length,nogalM.name,nogalM.value,nogalPrecio);
      precioTotal += mueble.calcularPrecio();
      mueble.precio = mueble.calcularPrecio();
      muebles.push(mueble);
    }
    if (rosewoodM.value > 0) {
      mueble = new Mueble(muebles.length,rosewoodM.name,rosewoodM.value,rosewoodPrecio);
      precioTotal += mueble.calcularPrecio();
      mueble.precio = mueble.calcularPrecio();
      muebles.push(mueble);
    }
    break;
  }
  checkInputs();
  changuito.innerHTML = " ";

  for (let i = 0; i < muebles.length; i++) {
    changuito.innerHTML += `<h6>${muebles[i].id} ${muebles[i].tipo} ${muebles[i].medida}m $${muebles[i].precio}</h6>`;
  }
  changuito.innerHTML += `<h3 class="pt-3">El total a pagar es $${precioTotal}</h3><br>`;
}

//----------Se actualiza el modal y se vacia la lista y reinicia el precio total

function vaciarChanguito() {
  vaciarBoton.className = "d-none";
  botonPagar.className = "d-none";
  muebles.splice(0, muebles.length);
  changuito.textContent = " ";
  muebles = []
  precioTotal = 0
}

//----------Se actualiza el modal y pregunta que tipo de pago se elije
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
      "Perfecto iniciaremos con los cortes que seleccionaste, te pedimos que te acerques a nuestro taller para hacer el pago en efectivo seleccionado",
    showConfirmButton: false,
    timer: 5000,
  });
  usuarioElegido.maderas = muebles;
  usuarioElegido.maderasPrecios = precioTotal;
  usuarioElegido.total += precioTotal;
  localStorage.setItem("misclientes", JSON.stringify(misClientesLocal));
  envioDetallesDeCompra();
  setTimeout(() => {
    window.location.href = "../inicio.html";
  }, 2000);
}

//------Se calculan el total de cada cuota seleccionada y el precio con interes final, de nuevo se actualizan
//------los totales y se envian los detalles de la compra por email, luego vuelve al inicio

function calcularTotal() {
  totalCuotas = (precioTotal / cuotas.value) * 1.1;
  precioConInteres = precioTotal * 1.1;
  totalCuotas = totalCuotas.toFixed(2);
  usuarioElegido.maderas = muebles;
  usuarioElegido.maderasPrecios = precioConInteres;
  usuarioElegido.total += parseFloat(precioConInteres.toFixed(2));
  misClientesLocal.splice("usuarioElegido.id", "usuario.id");
  localStorage.setItem("misclientes", JSON.stringify(misClientesLocal));
  changuito.innerHTML = `<h5>Te quedarian ${cuotas.value} de ${totalCuotas}</h5>Iniciaremos con los cortes que seleccionaste y te llamaremos cuando esten listos!`;
  envioDetallesDeCompra();
  setTimeout(() => {
    window.location.href = "../inicio.html";
  }, 2000);
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

//----------Se envia un form con los detalles de la compra al email ingresado al inicio en el registro de usuario

function envioDetallesDeCompra() {
  detalles.innerHTML += `<form class="d-none" action="https://formsubmit.co/${usuarioElegido.email}" method="POST">
    <div class="form-floating col-sm-4 py-3 my-3" >
    <textarea class="form-control detallesMaderas"  name="Lista de Maderas" id="floatingTextarea2" style="height: 250px"></textarea>
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

  const detallesMaderas = document.querySelector(".detallesMaderas");
  for (let i = 0; i < muebles.length; i++) {
    detallesMaderas.textContent += `${muebles[i].id} ${muebles[i].tipo} ${muebles[i].medida}m $${muebles[i].precio}\n`;
  }

  detallesMaderas.textContent += `\nEl total es $${usuarioElegido.maderasPrecios}\n\nGracias por confiar en Maderas Musicales`;
  encodeURI(detallesMaderas);

  let clicks = 1;

  function addClick() {
    document.querySelector(".total-clicks").textContent = clicks;
  }
  function clickButton() {
    document.querySelector("#btn1").click();
  }
  setTimeout(clickButton, 1000);
}

//-----Se lanza una notificacion asincrona informando de un descuento el proximo blackfriday

setTimeout(() => {
  Toastify({
    text: "Se acerca el BLACK FRIDAY 25% OFF en todas nuestras maderas",
    className: "info",
    style: {
      background: "rgba(93,70,50,1)",
    },
  }).showToast();
}, 2000);
