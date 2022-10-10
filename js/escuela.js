//---------Se trae cursos del html para poder trasladar toda la informacion de la api(json) en este caso

const cursos = document.querySelector("#cursos");


//---------Se trae la data desde el json con fetch para mostrar los cursos disponibles


fetch("../data.json")
  .then((resp) => resp.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      cursos.innerHTML += `<div class="card bg-dark p-1 m-1" style="width: 17rem;">
                          <img src="../css/img/escuela/${data[i].imagen}" class="card-img-top" alt="card${data[i].id}">
                          <div class="card-body">
                          <h5 class="align-self-center">${data[i].curso}</h5>
                          </div>
                          <ul class="list-group ">
                          <li class="list-group-item text-warning bg-dark">${data[i].fecha}</li>
                          <li class="list-group-item text-warning bg-dark">Precio - $${data[i].precio}</li>
                          <li class="list-group-item text-warning bg-dark">Cupos - ${data[i].cupos}</li>
                          </ul>
                          </div>`;
    }
  });

//-----Asincrono, se lanza la notificacion de la beca 

setTimeout(() => {
  Toastify({
    text: "LUTHIER-BECA 75% OFF, CONTACTANOS PARA MAS INFORMACION",
    className: "info",
    style: {
      background: "rgba(93,70,50,1)",
    },
  }).showToast();
}, 2000);
