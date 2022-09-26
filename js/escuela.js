const primercurso = document.querySelector("#curso1")
const segundocurso = document.querySelector("#curso2")
const tercercurso = document.querySelector("#curso3")
const cuartocurso = document.querySelector("#curso4")
const quintocurso = document.querySelector("#curso5")

fetch("../data.json")
.then((resp) => resp.json())
.then((data) => {
    primercurso.innerHTML = `<h2 class="fs-1">${data[0].curso}</h2>
                            <p class="fs-3">El primer curso del año se dicta los meses de ${data[0].fecha},
                            sera una camada de ${data[0].cupos} y el precio es de ${data[0].precio}</p>
                            <img src="../css/img/escuela/${data[0].imagen}">`
    segundocurso.innerHTML = `<h2 class="fs-1">${data[1].curso}</h2>
                            <p class="fs-3">El segundo curso del año se dicta los meses de ${data[1].fecha},
                            sera una camada de ${data[1].cupos} y el precio es de ${data[1].precio}</p>
                            <img src="../css/img/escuela/${data[1].imagen}">`
    tercercurso.innerHTML = `<h2 class="fs-1">${data[2].curso}</h2>
                            <p class="fs-3">El tercer curso del año se dicta los meses de ${data[2].fecha},
                            sera una camada de ${data[2].cupos} y el precio es de ${data[2].precio}</p>
                            <img src="../css/img/escuela/${data[2].imagen}">`
    cuartocurso.innerHTML = `<h2 class="fs-1">${data[3].curso}</h2>
                            <p class="fs-3">El cuarto curso del año se dicta los meses de ${data[3].fecha},
                            sera una camada de ${data[3].cupos} y el precio es de ${data[3].precio}</p>
                            <img src="../css/img/escuela/${data[3].imagen}">`
    quintocurso.innerHTML = `<h2 class="fs-1">${data[4].curso}</h2>
                            <p class="fs-3">El quinto curso del año se dicta los meses de ${data[4].fecha},
                            sera una camada de ${data[4].cupos} y el precio es de ${data[4].precio}</p>
                            <img src="../css/img/escuela/${data[4].imagen}">`

})