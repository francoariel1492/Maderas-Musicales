//----- LLamo el uusario del localStorage

let misClientesLocal = JSON.parse(localStorage.getItem("misclientes"))
let misGuitarras = misClientesLocal.find(el => el.guitarras)
let misMaderas = misClientesLocal.find(el => el.maderas)
let cliente = localStorage.getItem("usuarioBienvenida")
let clienteLogeado = misClientesLocal.find(el => JSON.stringify(el.usuario) == cliente)
let bienvenida = document.querySelector("#bienvenida")
let orders = document.querySelector("#orders")
let cerrarSesion = document.querySelector("#cierreSesion")

cerrarSesion.addEventListener('click',() => localStorage.removeItem('usuarioBienvenida'))

bienvenida.innerHTML += `Bienvenido ${cliente}`


let modalBody = document.querySelector("#modalContainer")



if(cliente == JSON.stringify(clienteLogeado.usuario)){
clienteLogeado.guitarras || clienteLogeado.maderas
? orders.addEventListener('click', () =>{
    modalBody.innerHTML = ""
    modalBody.innerHTML += `<h3>Guitarras</h3>`

if(clienteLogeado.guitarras){
    for (let i = 0; i < clienteLogeado.guitarras.length; i++) {
    modalBody.innerHTML += `<h6>${clienteLogeado.guitarras[i].tipo} - $${clienteLogeado.guitarras[i].precio}</h6>`}
    modalBody.innerHTML += `<h3>Total de Guitarras - $${clienteLogeado.guitarrasPrecio}</h3>`
    modalBody.innerHTML += `<h3 class="pt-3">Maderas</h3>`}

if(clienteLogeado.maderas){
    for (let i = 0; i < clienteLogeado.maderas.length; i++) {
        modalBody.innerHTML += `<h6>${clienteLogeado.maderas[i].id} - ${clienteLogeado.maderas[i].tipo} - ${clienteLogeado.maderas[i].medida} - $${clienteLogeado.maderas[i].precio}</h6>`}}
        modalBody.innerHTML += `<h3>Total de Maderas - $${clienteLogeado.maderasPrecios}</h3>`
        modalBody.innerHTML += `<h2 class="pt-3">Total - $${clienteLogeado.total}</h2>`
})
: orders.className = "d-none"
}

