//---- Variables

let inputEmail = document.querySelector("#inputEmail")
let inputPassword = document.querySelector("#inputPassword")
let loginBtn = document.querySelector("#loginBtn")
const emailJSON = JSON.stringify(inputEmail)
const passwordJSON = JSON.stringify(inputPassword)

function submit(){
    inputEmail.value && inputPassword.value ? sessionStorage.setItem(emailJSON, passwordJSON) : console.log("WOOOT?")
    window.location.href = "../index.html";
}




loginBtn.addEventListener("click",submit)