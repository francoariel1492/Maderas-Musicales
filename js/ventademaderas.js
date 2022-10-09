//----------Import  de la clase Mueble
import {Mueble} from "../classes/clases.js"

//---------- LLamo el uusario del localStorage

let misClientesLocal = JSON.parse(localStorage.getItem("misclientes"))
let usuarioElegido = misClientesLocal.find(el => el.usuario == JSON.parse(localStorage.getItem("usuarioBienvenida")))

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


//----------Inputs

let ebanoM = document.querySelector("#ebanoM");
let alisoM = document.querySelector("#alisoM");
let nogalM = document.querySelector("#nogalM");
let rosewoodM = document.querySelector("#rosewoodM");


//----------Funciones

function checkInputs(){
    ebanoM.value == 0 && alisoM.value == 0 && nogalM.value == 0 && rosewoodM.value == 0
    ? Toastify({
        text: "Ingresa una cantidad porfavor",
        className: "info",
        style: {
        background: "#FF0000",
        }
    }).showToast()
    :   Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tus elementos fueron agregados al carrito',
        showConfirmButton: false,
        timer: 1600})
}

function agregarChanguito(){
    botonPagar.className = "p-2";
    vaciarBoton.className = "p-2";
    while(true){
        if(ebanoM.value > 0){
            mueble = new Mueble(muebles.length, ebanoM.name, ebanoM.value, ebanoPrecio)
            precioTotal += mueble.calcularPrecio();
            mueble.precio = mueble.calcularPrecio();
            muebles.push(mueble)
        }
        if(alisoM.value > 0){
            mueble = new Mueble(muebles.length, alisoM.name, alisoM.value, alisoPrecio)
            precioTotal += mueble.calcularPrecio();
            mueble.precio = mueble.calcularPrecio();
            muebles.push(mueble)
        }
        if(nogalM.value > 0){
            mueble = new Mueble(muebles.length, nogalM.name, nogalM.value, nogalPrecio,)
            precioTotal += mueble.calcularPrecio();
            mueble.precio = mueble.calcularPrecio();
            muebles.push(mueble)
        }
        if(rosewoodM.value > 0){
            mueble = new Mueble(muebles.length, rosewoodM.name, rosewoodM.value, rosewoodPrecio)
            precioTotal += mueble.calcularPrecio();
            mueble.precio = mueble.calcularPrecio();
            muebles.push(mueble)
        }
        break
}
checkInputs()
changuito.innerHTML = " ";

for (let i = 0; i < muebles.length; i++) {
    changuito.innerHTML += `<h6>${muebles[i].id} ${muebles[i].tipo} ${muebles[i].medida}m $${muebles[i].precio}</h6>`
}
changuito.innerHTML += `<h3 class="pt-3">El total a pagar es $${precioTotal}</h3><br>`
};

function vaciarChanguito(){
    vaciarBoton.className = "d-none"
    botonPagar.className = "d-none" 
    muebles.splice(0,muebles.length)
    changuito.textContent = " "
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
        title: 'Perfecto iniciaremos con los cortes que seleccionaste, te pedimos que te acerques a nuestro taller para hacer el pago en efectivo seleccionado',
        showConfirmButton: false,
        timer: 5000})
    usuarioElegido.maderas = muebles
    usuarioElegido.maderasPrecios = precioTotal
    usuarioElegido.total += precioTotal
    localStorage.setItem("misclientes", JSON.stringify(misClientesLocal))
}

function calcularTotal(){
    totalCuotas = (precioTotal / cuotas.value) * 1.10
    precioConInteres = precioTotal * 1.10
    totalCuotas = totalCuotas.toFixed(2)
    usuarioElegido.maderas = muebles
    usuarioElegido.maderasPrecios = precioConInteres
    usuarioElegido.total += parseFloat(precioConInteres.toFixed(2))
    misClientesLocal.splice('usuarioElegido.id','usuario.id')
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



//------Botenes/Eventos

let boton = document.querySelector("#agregarCarrito")
boton.addEventListener("click", agregarChanguito)

let pagarBoton = document.querySelector("#pagar")
pagarBoton.addEventListener("click",pagar)

let vaciarBoton = document.querySelector("#botonVaciar")
vaciarBoton.addEventListener("click", vaciarChanguito)


//-----Asincrono

setTimeout(() => {
    Toastify({
        text: "Se acerca el BLACK FRIDAY 25% OFF en todas nuestras maderas",
        className: "info",
        style: {
        background: "rgba(93,70,50,1)",
        }
    }).showToast();
}, 2000);