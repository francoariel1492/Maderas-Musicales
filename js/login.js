import {Cliente} from "../classes/clases.js"


//--------Variables


let inputUsuario = document.querySelector("#inputUsuario")
let inputPassword = document.querySelector("#inputPassword")
let formLogIn = document.querySelector("#formLogIn")
let formRegistro = document.querySelector("#formRegistro")
let inputUsuarioRegistro = document.querySelector("#inputUsuarioRegistro")
let inputPasswordRegistro = document.querySelector("#inputPasswordRegistro")
let inputConfirmPassword = document.querySelector("#confirmPassword")

let user
let clientes = []

//--------Funciones

function signIn(event){
    event.preventDefault()
    formLogIn.className = "d-none"
    formRegistro.className = "row w-25 justify-content-center"
    
}

function login(){
    if(inputUsuario.value && inputPassword.value){
    let misClientesLocal = JSON.parse(localStorage.getItem("misclientes"))
    let usersDelLocal = misClientesLocal.map(function(el){return el.usuario})
    let passDelLocal = misClientesLocal.map(function(el){return el.password})
    let usuarioEncontrado = usersDelLocal.find(el => el == inputUsuario.value)
    let passwordEncontrado = passDelLocal.find(el => el == inputPassword.value)
    inputUsuario.value == usuarioEncontrado && inputPassword.value == passwordEncontrado
    ?(window.location.href = "../inicio.html") && localStorage.setItem("usuarioBienvenida", JSON.stringify(usuarioEncontrado))
    :Toastify({
        text: "Algo salio mal, intenta nuevamente",
        className: "info",
        style: {
        background: "#FF0000",
        }
        }).showToast();
    }else{
        Toastify({
            text: "Algo salio mal, intenta nuevamentenananan",
            className: "info",
            style: {
            background: "#FF0000",
            }
            }).showToast();
    }
}



function submit(event){
    event.preventDefault()
    inputUsuarioRegistro.value && inputPasswordRegistro.value == inputConfirmPassword.value 
    ?   crearCliente(Cliente)
    :   Toastify({
        text: "Algo salio mal, intenta nuevamente",
        className: "info",
        style: {
        background: "#FF0000",
        }
}).showToast();
}

function crearCliente(){
    user = new Cliente()
    user.usuario = inputUsuarioRegistro.value
    user.password = inputPasswordRegistro.value
    user.total = 0
    clientes.push(user)
    clientes.forEach((user,i) => {user.id = i})
    formLogIn.className = "row w-25 justify-content-center"
    formRegistro.className = "d-none"
    localStorage.setItem("misclientes", JSON.stringify(clientes));
}


let loginBtn = document.querySelector("#loginBtn")
let signBtn = document.querySelector("#signBtn")
let submitBtn = document.querySelector("#submitBtn")



loginBtn.addEventListener("click",login)
signBtn.addEventListener("click",signIn)
submitBtn.addEventListener("click",submit)
