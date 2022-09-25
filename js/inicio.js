let bienvenida = document.querySelector("#bienvenida")

let cliente = sessionStorage.getItem(`cliente`)
bienvenida.innerHTML += `Bienvenido ${cliente}`