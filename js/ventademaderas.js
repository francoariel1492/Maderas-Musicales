// import {login} from "./login.js";

// loginBtn.addEventListener("click",login)
// console.log(login)
// Variables globales

let muebles = []
let precioTotal = 0

// Variables - precios maderas
let ebanoPrecio = 100
let alisoPrecio = 120
let nogalPrecio = 90
let rosewoodPrecio = 120

// Relacion de variables con el Dom

document.querySelector("#span1").textContent = ebanoPrecio
document.querySelector("#span2").textContent = alisoPrecio
document.querySelector("#span3").textContent = nogalPrecio
document.querySelector("#span4").textContent = rosewoodPrecio

let modalDescuento = document.querySelector("#modalDescuento")

let changuito = document.querySelector(".changuitoContainer")
let botonPagar = document.querySelector("#botonPagar")


// inputs

let ebanoM = document.querySelector("#ebanoM")
let alisoM = document.querySelector("#alisoM")
let nogalM = document.querySelector("#nogalM")
let rosewoodM = document.querySelector("#rosewoodM")


// Clases 
class Mueble{
    constructor(id, tipo, medida, precio){
        this.id = id + 1;
        this.tipo = tipo;
        this.medida = medida;
        this.precio = precio;
    }
}

//-------Funciones

function agregarChanguito(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tus elementos fueron agregados al carrito',
        showConfirmButton: false,
        timer: 1600})
        
    let mueble
    while(true){
        if(ebanoM.value > 0){
            mueble = new Mueble(muebles.length, ebanoM.name, ebanoM.value, ebanoPrecio*ebanoM.value)
            muebles.push(mueble)
        }
        if(alisoM.value > 0){
            mueble = new Mueble(muebles.length, alisoM.name, alisoM.value, alisoPrecio*alisoM.value)
            muebles.push(mueble)
        }
        if(nogalM.value > 0){
            mueble = new Mueble(muebles.length, nogalM.name, nogalM.value, nogalPrecio*nogalM.value)
            muebles.push(mueble)
        }
        if(rosewoodM.value > 0){
            mueble = new Mueble(muebles.length, rosewoodM.name, rosewoodM.value, rosewoodPrecio*rosewoodM.value)
            muebles.push(mueble)
        }
        break
        
}
muebles.forEach(el => {precioTotal += el.precio});

changuito.innerHTML = " ";

for (let i = 0; i < muebles.length; i++) {
    changuito.innerHTML += `<h5>${muebles[i].id} ${muebles[i].tipo} ${muebles[i].medida}m $${muebles[i].precio}</h5><br>`
}
changuito.innerHTML += `<h3>El total a pagar es $${precioTotal}</h3><br>`
};

function vaciarChanguito(){
    vaciarBoton.className = "d-none"
    botonPagar.className = "d-none" 
    muebles.splice(0,muebles.length)
    changuito.textContent = " "
    // changuito.innerHTML = " "
    console.log(muebles)
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
}

function calcularTotal(){
    let totalCuotas = 0
    totalCuotas = (precioTotal / cuotas.value) * 1.10
    totalCuotas = totalCuotas.toFixed(2)
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

let vaciarBoton = document.querySelector("#vaciar")
vaciarBoton.addEventListener("click", vaciarChanguito)


//-----Asincrono

setTimeout(() => {
    Toastify({
        text: "Recorda que todos los miercoles nuestras maderas tienen un 25% de descuento en efectivo",
        className: "info",
        style: {
          background: "linear-gradient(351deg, rgba(255,235,205,1) 0%, rgba(93,70,50,1) 50%)",
        }
      }).showToast();
}, 2000);