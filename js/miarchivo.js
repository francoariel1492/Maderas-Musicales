class Mueble{
    constructor(tipo, largo, precio){
        this.tipo = tipo;
        this.largo = largo + "m ";
        this.precio = "$" + precio;
    }
}

let precioTotal = 0;

lista = [];


function comprar(){

    while(true){
        let madera = parseInt(prompt("Tenemos 3 opciones de madera para guitarras: \n1.Ebano, \n2.Aliso \n3.Nogal \n4.Ir a changuito \n5.Salir"));
        
        if(madera == 1 ){
            alert("Ebano perfecto para una Les Paul al mejor estilo Jimmy Page!");
            let cantidadUnidades = parseInt(prompt("Cuantos metros vas a llevar?"));
            let precio = cantidadUnidades * 100;
            const Ebano = new Mueble("Ebano", cantidadUnidades, precio);
            alert("Agregaste " + Ebano.largo +" de Ebano, serian " + Ebano.precio + " al changuito" )
            precioTotal += precio;
            lista.push(Ebano);

        } else if(madera == 2){

            alert("Aliso es la madera para la legendaria Stratocaster, la de Jimi Hendrix!");
            let cantidadUnidades = parseInt(prompt("Cuantos metros vas a llevar?"));
            let precio = cantidadUnidades * 120;
            const Aliso = new Mueble("Aliso", cantidadUnidades, precio);
            alert("Agregaste " + Aliso.largo +" de Aliso, serian " + Aliso.precio + " al changuito" )
            precioTotal += precio;
            lista.push(Aliso);
            

        } else if(madera == 3){

            alert("Con el nogal podriamos hacer una Telecaster al estilo George Harrison que te parece?");
            let cantidadUnidades = parseInt(prompt("Cuantos metros vas a llevar?"));
            let precio = cantidadUnidades * 90;
            const Nogal = new Mueble("Nogal", cantidadUnidades, precio);
            alert("Agregaste " + Nogal.largo +" de Nogal, serian " + Nogal.precio + " al changuito" )
            precioTotal += precio;
            lista.push(Nogal);

        }else if(madera == 4){
            let changuito = lista.map((Mueble) => (Mueble.tipo + " " + Mueble.largo  + Mueble.precio + "\n"));
            alert("Tu compra de: " + "\n\n" + changuito.join('') + "\nEs un total de $" +  precioTotal);
            pagoCuotas();
            break;

        }else if(madera == 5){
            alert("Gracias vualva prontos");
            break;
        }
        else{
            alert("No es posible realizar la operacion");
            break;
        }
        
    }
}

function pagoCuotas(){
    while(true){
        let pregunta = prompt("Desea realizar su pago en cuotas? Y o N" );
        if(pregunta == "Y"){
            let cuotas = parseInt(prompt("Puedes realizar el pago en \n3 \n6 \n12"));
            let totalCuotas = (precioTotal / cuotas) * 1.10;
            totalCuotas = totalCuotas.toFixed(2);
            alert("Perfecto te quedarian en " + cuotas +" cuotas de " + totalCuotas + " nos contactaremos en cuanto tengamos tu pedido listo para retirar");
            break;
        }else if(pregunta == "N"){
            alert("Perfecto el total es de: $" + precioTotal + " puedes pagarlo en efectivo en nuestro local fisico en Av Laprida 222 o realizar tu pago mediante tarjeta de credito/debito o mercadopago");
            break;
        }else{
            alert("Elija una de las opciones disponibles")
        }

    }
}

let boton = document.querySelector("#Comprar")
boton.addEventListener("click", comprar)