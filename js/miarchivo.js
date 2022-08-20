let precioTotal = 0

function comprar(){

    while(true){

        let madera = parseInt(prompt("Tenemos 3 opciones de madera para guitarras: \n1.Ebano, \n2.Aliso \n3.Nogal \n4.Ir a changuito \n5.Salir"));
        
        if(madera == 1  ){
            alert("Ebano perfecto para una Les Paul al mejor estilo Jimmy Page!");
            let cantidadUnidades = parseInt(prompt("Cuantos metros vas a llevar?"));
            let precio = cantidadUnidades * 100;
            alert("Agregaste " +cantidadUnidades +"m de Ebano que son $" + precio + " al changuito" )
            precioTotal += precio

        } else if(madera == 2){

            alert("Aliso es la madera para la legendaria Stratocaster, la de Jimi Hendrix!");
            let cantidadUnidades = parseInt(prompt("Cuantos metros vas a llevar?"));
            let precio = cantidadUnidades * 120;
            alert("Agregaste " +cantidadUnidades +"m de Aliso que son $" + precio + " al changuito" )
            precioTotal += precio

        } else if(madera == 3){

            alert("Con el nogal podriamos hacer una Telecaster al estilo George Harrison que te parece?");
            let cantidadUnidades = parseInt(prompt("Cuantos metros vas a llevar?"));
            let precio = cantidadUnidades * 90;
            alert("Agregaste " +cantidadUnidades +"m de Nogal que son $" + precio + " al changuito" )
            precioTotal += precio

        }else if(madera == 4){
            alert("El total de tu changuito es: " + precioTotal)
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
    for (let i = 0; i < 5; i++) {
        let pregunta = prompt("Desea realizar su pago en cuotas? Y o N" );
        if(pregunta == "Y"){
            let cuotas = parseInt(prompt("Puedes realizar el pago en \n3 \n6 \n12"));
            totalCuotas = (precioTotal / cuotas) * 1.10;
            alert("Perfecto te quedarian en " + cuotas +" cuotas de " + totalCuotas + " nos contactaremos en cuanto tengamos tu pedido listo para retirar");
            break;
        }else if(pregunta == "N"){
            alert("Perfecto el total de " + precioTotal + " puedes pagarlo en efectivo en nuestro local fisico en Av Laprida 222 o realizar tu pago mediante tarjeta de credito/debito o mercadopago");
            break;
        }else{
            alert("Elija una de las opciones disponibles")
        }
        
    }
}



let boton = document.querySelector("#Comprar")
boton.addEventListener("click", comprar)