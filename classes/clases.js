export class Cliente {
    constructor(id, usuario, password, maderas,maderasPrecios, guitarras, guitarrasPrecio, total) {
        this.id = id;
        this.usuario = usuario;
        this.password = password;
        this.maderas = maderas;
        this.maderasPrecios = maderasPrecios;
        this.guitarras = guitarras;
        this.guitarrasPrecio = guitarrasPrecio;
        this.total = total;
        
    }
}

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

