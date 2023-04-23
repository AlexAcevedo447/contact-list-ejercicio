//Siempre debe ir en mayuscula la primera letra
//sus propiedades se definen con la palabra reservada this
//solo se pueden crear funciones constructoras por medio de la funcion como expresion

function Contacto(nombre_completo, telefono, localizacion) {
    const { ciudad, departamento } = localizacion;

    this.nombre_completo = nombre_completo;
    this.telefono = telefono;
    this.localizacion = {
        ciudad,
        departamento
    };
}

//exportamos la funcion constructora
module.exports = {
    Contacto
}