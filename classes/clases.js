//------Se exporta y declara la clase Cliente utilizada en login para crear usuarios/clientes

export class Cliente {
    constructor(id, usuario, password, maderas,totalMaderas, guitarras, totalGuitarras, total) {
        this.id = id;
        this.usuario = usuario;
        this.password = password;
        this.maderas = maderas;
        this.totalMaderas = totalMaderas;
        this.guitarras = guitarras;
        this.totalGuitarras = totalGuitarras;
        this.total = total;
        
    }
}

//---- se exporta y declara la clase Mueble utilizada en la parte de venta de maderas

export class Mueble{
    constructor(id, tipo, medida, precio){
        this.id = id + 1;
        this.tipo = tipo;
        this.medida = medida;
        this.precio = precio;
    }
    calcularPrecio(){
        return this.medida * this.precio
    }
}

//---- se exporta y declara la clase Guitarra utilizada en la parte de construccion

export class Guitarra{
    constructor(tipo,nombre,sonido,peso,precio){
        this.tipo = tipo;
        this.nombre = nombre;
        this.sonido = sonido;
        this.peso = peso;
        this.precio = precio;
    }
}

// tipo: "LP",
// nombre: "Porteña",
// sonido: "corposo",
// peso: parseFloat(3.5),
// precio: 1000,