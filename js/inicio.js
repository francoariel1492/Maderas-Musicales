let bienvenida = document.querySelector("#bienvenida")

let cliente = JSON.stringify(sessionStorage.getItem(`cliente`))
bienvenida.innerHTML += `Bienvenido ${cliente}`