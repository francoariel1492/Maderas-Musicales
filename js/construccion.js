let guitarras = [
    {
    tipo: "LP",
    nombre: "Porteña",
    sonido: "corposo",
    peso: parseFloat(3.5),
    precio: 1000,
    },
    {
    tipo: "Strato",
    nombre: "Patagonia",
    sonido: "cremoso",
    peso: parseFloat(3.2),
    precio: 900,
    },
    {
    tipo: "Tele",
    nombre: "Norteña",
    sonido: "corposo",
    peso: parseFloat(3.8),
    precio: 800,
    }
]

let creacion = [];

function colorGuitarra(){
        let color = prompt("Que color te gustaria?\n\n Rojo \n Negro \n Sunburst\n\n Salir");
        if(color == "Rojo"){
            colorRojo = 100;
            return colorRojo   
        }else if(color == "Negro"){
            coplorNegro = 125;
            guitarras.precio += colorNegro;
        }else if(color == "Sunburst"){
            colorSunburst = 200;
            guitarras.precio += colorSunburst;
        }else if(color == "Salir"){
        }
        else{
            alert("No tenemos ese color disponible")
        }

}

function construccion(){
    alert("Si lo que estas buscando es tu sonido, dejame decirte que aca lo vamos a encontrar")
    while(true){
        let opcion = prompt("Elige tu sonido:\n\nLP\nStrato\nTele\n \nRecuerda que el precio es solo por el valor del mueble, la electronica, pintura y accesorios de la guitarra son aparte.\n\nSalir")
        if(opcion == "LP"){
            let guitarra = guitarras.find(g => g.tipo === "LP");
            alert("Nuestra LP es la siguiente:\n\n" + "Nombre: " + guitarra.nombre +"\n"+ "Sonido: " + guitarra.sonido +"\n" + "Peso: " + guitarra.peso + "\n" + "Precio: " + guitarra.precio)
            guitarra.precio += colorGuitarra()
            alert(guitarra.precio)
        }else if(opcion == "Strato"){
            let guitarra = guitarras.find(g => g.tipo === "Strato")
            alert("Nuestra Strato es la siguiente:\n\n" + "Nombre: " + guitarra.nombre +"\n"+ "Sonido: " + guitarra.sonido +"\n" + "Peso: " + guitarra.peso + "\n" + "Precio: " + guitarra.precio)
            colorGuitarra();
            alert(guitarra.precio);
        }else if(opcion == "Tele"){
            let guitarra = guitarras.find(g => g.tipo === "Tele")
            alert("Una clasica Telecaster:\n\n" + "Nombre: " + guitarra.nombre +"\n"+ "Sonido: " + guitarra.sonido +"\n" + "Peso: " + guitarra.peso + "\n" + "Precio: " + guitarra.precio)
            colorGuitarra();
            alert(guitarra.precio)
        }else if(opcion == "Salir"){
            alert("Gracias vuelva prontos");break
        }else{
            alert("Ingresa una de las opciones");
            
        }
    }
}






let boton = document.querySelector("#Construccion");
boton.addEventListener("click", construccion);
