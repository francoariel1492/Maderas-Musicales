//--------Importa la clase cliente

import { Cliente } from "../classes/clases.js";

//--------Variables

let inputUsuario = document.querySelector("#inputUsuario");
let inputPassword = document.querySelector("#inputPassword");
let formLogIn = document.querySelector("#formLogIn");
let formRegistro = document.querySelector("#formRegistro");
let inputUsuarioRegistro = document.querySelector("#inputUsuarioRegistro");
let inputEmailRegistro = document.querySelector("#inputEmailRegistro");
let inputPasswordRegistro = document.querySelector("#inputPasswordRegistro");
let inputConfirmPassword = document.querySelector("#confirmPassword");
let user;

//--------Funciones

//------Se utiliza la funcion signIn para ocultar el formulario de log in y mostrar el de registro
function signIn(event) {
  event.preventDefault();
  formLogIn.className = "d-none";
  formRegistro.className = "row w-25 justify-content-center";
}

//------la funcion login chequea en los usuario registrados y los compara con los input ingresados
//------usuario y password, muestra alerts si alguno o ambos faltan, o si son incorrectos

function login() {
  let misClientesLocal = JSON.parse(localStorage.getItem("misclientes"));
  if (inputUsuario.value && inputPassword.value && misClientesLocal) {
    let usuarioEncontrado = misClientesLocal.find((el) => el.usuario == inputUsuario.value && el.password == inputPassword.value
    );
    if (usuarioEncontrado) {
      window.location.href = "../inicio.html";
      localStorage.setItem("usuarioBienvenida",JSON.stringify(usuarioEncontrado.usuario)
      );
    } else {
      Toastify({
        text: "Algo salio mal, intenta nuevamente",
        className: "info",
        style: {
          background: "#FF0000",
        },
      }).showToast();
    }
  } else {
    Toastify({
      text: "Algo salio mal, intenta nuevamentenananan",
      className: "info",
      style: {
        background: "#FF0000",
      },
    }).showToast();
  }
}

//-------Se verifica que los datos sean correctos para poder finalmente crear el cliente/usuario

function submit(event) {
  event.preventDefault();

  inputUsuarioRegistro.value && inputPasswordRegistro.value == inputConfirmPassword.value
    ? crearCliente(Cliente)
    : Toastify({
        text: "Algo salio mal, intenta nuevamente",
        className: "info",
        style: {
          background: "#FF0000",
        },
      }).showToast();
}

//--------Se crea el cliente se llama a los clientes del local storage para poder sumarlos a la lista, se 
//--------actualiza los formularios para continuar con la funcionalidad de la web
function crearCliente() {
  let clientes = JSON.parse(localStorage.getItem("misclientes")) ?? [];
  user = new Cliente();
  user.usuario = inputUsuarioRegistro.value;
  user.password = inputPasswordRegistro.value;
  user.email = inputEmailRegistro.value;
  user.total = 0;
  clientes.push(user);
  clientes.forEach((user, i) => {user.id = i;});
  formLogIn.className = "row w-25 justify-content-center";
  formRegistro.className = "d-none";
  localStorage.setItem("misclientes", JSON.stringify(clientes));
}


//-------Botones

let loginBtn = document.querySelector("#loginBtn");
let signBtn = document.querySelector("#signBtn");
let submitBtn = document.querySelector("#submitBtn");


//-------Eventos
loginBtn.addEventListener("click", login);
signBtn.addEventListener("click", signIn);
submitBtn.addEventListener("click", submit);
