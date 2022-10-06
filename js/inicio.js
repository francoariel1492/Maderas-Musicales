//----- LLamo el uusario del localStorage

let misClientesLocal = JSON.parse(localStorage.getItem("misclientes"))
let misGuitarras = misClientesLocal.find(el => el.guitarras)
let misMaderas = misClientesLocal.find(el => el.maderas)
let cliente = localStorage.getItem("usuarioBienvenida")
let bienvenida = document.querySelector("#bienvenida")
let orders = document.querySelector("#orders")
let cerrarSesion = document.querySelector("#cierreSesion")

cerrarSesion.addEventListener('click',() => localStorage.removeItem('usuarioBienvenida'))

bienvenida.innerHTML += `Bienvenido ${cliente}`





let modalBody = document.querySelector("#modalContainer")

misGuitarras && misMaderas 
? orders.addEventListener('click', () =>{
    
    modalBody.innerHTML = ""
    modalBody.innerHTML += `<h3>Guitarras</h3>`
    for (let i = 0; i < misGuitarras.guitarras.length; i++) {
    modalBody.innerHTML += `<h6>${misGuitarras.guitarras[i].tipo} - $${misGuitarras.guitarras[i].precio}</h6>`}
    modalBody.innerHTML += `<h3>Maderas</h3>`
    for (let i = 0; i < misMaderas.maderas.length; i++) {
    modalBody.innerHTML += `<h6>${misMaderas.maderas[i].id} - ${misMaderas.maderas[i].tipo} - ${misMaderas.maderas[i].medida} - $${misMaderas.maderas[i].precio}</h6>`}
})
: orders.className = "d-none"
