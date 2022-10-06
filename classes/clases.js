export class Cliente {
    constructor(id, usuario, password, maderas, guitarras, total) {
        this.id = id;
        this.usuario = usuario;
        this.password = password;
        this.maderas = maderas;
        this.guitarras = guitarras;
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
}

