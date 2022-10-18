//----- LLamo el usuario del localStorage

let misClientesLocal = JSON.parse(localStorage.getItem("misclientes"))


//------ Se piden las guitarras y maderas para mostrar en ordenes

let misGuitarras = misClientesLocal.find(el => el.guitarras)
let misMaderas = misClientesLocal.find(el => el.maderas)


//----- Relacion de variables con el DOM

let cliente = localStorage.getItem("usuarioBienvenida")
let bienvenida = document.querySelector("#bienvenida")
let clienteLogeado = misClientesLocal.find(el => JSON.stringify(el.usuario) == cliente)
let orders = document.querySelector("#orders")
let cerrarSesion = document.querySelector("#cierreSesion")
let modalBody = document.querySelector("#modalContainer")


//------ Al cerrar sesion se elimina el usuario de Bienvenida

cerrarSesion.addEventListener('click',() => localStorage.removeItem('usuarioBienvenida'))

//------ Se da la bienvenida al cliente

bienvenida.innerHTML += `Bienvenido ${cliente}`


//-------Desestructuracion de variables clienteLogeado

const{guitarras,totalGuitarras,maderas,totalMaderas,usuario,total} = clienteLogeado


//------ Se chequea que el cliente sea el mismo que el usuario  clienteLogeado, luego se chequea si hay guitarras
//------compradas o maderas para asi actualizar el modal y mostrar una o ambas, si hay ambas se muestra el total
//------de la compra
if(cliente == JSON.stringify(usuario)){
guitarras || maderas
? orders.addEventListener('click', () =>{
    modalBody.innerHTML = ""
    if(guitarras){
        modalBody.innerHTML += `<h2 class="py-3">Guitarras</h2>`
        for (let i = 0; i < guitarras.length; i++) {
        modalBody.innerHTML += `<h6>${guitarras[i].tipo} - $${guitarras[i].precio}</h6>`}
        modalBody.innerHTML += `<h3>Total de Guitarras - $${totalGuitarras}</h3>`
        }

    if(maderas){
        modalBody.innerHTML += `<h2 class="py-3">Maderas</h2>`
        for (let i = 0; i < maderas.length; i++) {
            modalBody.innerHTML += `<h6>${maderas[i].id} - ${maderas[i].tipo} - ${maderas[i].medida}m - $${maderas[i].precio}</h6>`}
            modalBody.innerHTML += `<h3>Total de Maderas - $${totalMaderas}</h3>`
            }

    if(maderas && guitarras){
        modalBody.innerHTML += `<h2 class="pt-3">Total - $${total}</h2>`
    }
})

: orders.className = "d-none"
}

