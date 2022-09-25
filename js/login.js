//---- Variables

let inputEmail = document.querySelector("#inputEmail")
let inputPassword = document.querySelector("#inputPassword")
let loginBtn = document.querySelector("#loginBtn")

function submit(){
    inputEmail.value && inputPassword.value ? window.location.href = "../inicio.html"  : console.log("WOOOT?")
    
    
}

class Cliente {
    constructor(usuario, password,compra) {
        this.usuario = usuario;
        this.password = password;
        this.compra = compra;
    }
}

function login(event) {
    event.preventDefault()
    let formulario = document.querySelector("#form")
    let usuario = formulario.usuario.value
    let password = formulario.password.value
    let cliente = new Cliente()
    cliente.usuario = usuario
    cliente.password = password
    usuarioJson = JSON.stringify(cliente.usuario)
    passwordJson = JSON.stringify(cliente.password)
    sessionStorage.setItem("cliente", usuarioJson)
    sessionStorage.setItem("password", passwordJson)
    return cliente
}

loginBtn.addEventListener("click",submit)

export {login}