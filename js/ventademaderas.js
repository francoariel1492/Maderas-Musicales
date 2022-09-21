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


let changuito = document.querySelector(".changuitoContainer")
let changuitoTotal = document.querySelector(".changuitoTotal")
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



function comprar(){
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
            const {tipo,medida,precio} = mueble 
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

for (let i = 0; i < muebles.length; i++) {
    changuito.innerHTML += `<h5>${muebles[i].id} ${muebles[i].tipo} ${muebles[i].medida}m $${muebles[i].precio}</h5><br>`

}
    
};


function pagar(){
    botonPagar.className = "d-none"
    changuito.innerHTML += `<h3>El total a pagar es $${precioTotal}</h3><br>
                                 <h4>Como desea realizar el pago?</h4><br>
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

let boton = document.querySelector("#Comprar")
boton.addEventListener("click", comprar)

let pagarBoton = document.querySelector("#pagar")
pagarBoton.addEventListener("click",pagar)


















// function calcularTotal(){
//     let precioTotalChanguito = 0;
//     for(const mueble of muebles){
//         precioTotalChanguito += mueble.calcularPrecio()
//     }
//     return precioTotalChanguito;
// }




// function comprar(){

//     while(true){
//         let madera = 0;
//         madera = parseInt(prompt("Tenemos 3 opciones de madera para guitarras: \n1.Ebano, \n2.Aliso \n3.Nogal \n4.Ir a changuito \n5.Salir"));
        
//         if(madera == 1){
//             tipo = "Ebano";
//             valorMadera = 100;
//             alert(tipo + " perfecto para una Les Paul al mejor estilo Jimmy Page!");
//             agregarMueble();

//         } else if(madera == 2){
//             tipo = "Aliso";
//             valorMadera = 120;
//             alert(tipo + " es la madera para la legendaria Stratocaster, la de Jimi Hendrix!");
//             agregarMueble();

//         } else if(madera == 3){
//             tipo = "Nogal";
//             valorMadera = 90;
//             alert("Con el " + tipo +  " podriamos hacer una Telecaster al estilo George Harrison que te parece?");
//             agregarMueble();

//         }else if(madera == 4 && madera != true){
//             let opcion = prompt("Deseas eliminar algun producto? Y o N");
         
//                 if(opcion == "Y"){
//                     muebles.forEach(elm => {
//                         console.log(`ID: ${elm.id }\n Tipo: ${elm.tipo} \n Medida: ${elm.medida} \n Precio: ${elm.precio} \n`);
//                     })
//                     let id = prompt("Ingrese el id al eliminar")
//                     elimiarDelCarrito(id)
//                     break;
//                 } else if(opcion == "N"){
//                     let changuito = muebles.map((Mueble) => (Mueble.tipo + " " + Mueble.medida + "m "  + "$" + Mueble.calcularPrecio() + "\n"));
//                     alert("Tu compra de:" + "\n\n" + changuito.join("") + "\n" + "Es un total de: $" + calcularTotal() );
//                     pagoCuotas();
//                     break;
//                 }
//         }else if(madera == 5){
//             alert("Gracias vualva prontos");
//             break;
//         }
//         else{
//             alert("No es posible realizar la operacion");
//         }
        
//     }
// }



