//importamos la funcion constructora
let { Contacto } = require("./objects");

//crear contactos iniciales
let c1 = new Contacto(0, "Andres Sierra", 987163713, { ciudad: "Medellín", departamento: "Antioquia" });
let c2 = new Contacto(1, "Jhonatan Figueroa", 88976613, { ciudad: "Medellín", departamento: "Antioquia" });
let c3 = new Contacto(2, "Zulma Gómez", 44113713, { ciudad: "Ibagué", departamento: "Tolima" });

//creando mi lista de contactos
const mi_lista_de_contactos = [c1, c2, c3];

//funcionalidad para mostrar todos los contactos
function mostrarContactos() {
    console.log(mi_lista_de_contactos);
}

//funcionalidad para crear un contacto
function crearContacto(contacto) {
    const { nombre_completo, localizacion
    } = contacto;
    let { ciudad, departamento } = localizacion;

    if (contacto && nombre_completo && ciudad && departamento) {
        mi_lista_de_contactos.push(contacto);
        console.log("Contacto añadido exitosamente!!");
        mostrarContactos();
    } else {
        console.log("Los campos no pueden estar vacíos");
    }

}

//funcionalidad para eliminar un contacto
function eliminarContacto(id) {
    let contacto_encontrado = mi_lista_de_contactos.filter(contacto => contacto.id === id);

    if (contacto_encontrado) {
        mi_lista_de_contactos.splice(id, 1);
        console.log("Contacto eliminado exitosamente!!");
        mostrarContactos();
    } else {
        console.log("El contacto que tratas de eliminar no existe");
    }
}

//exporto funcionalidades
module.exports = {
    crearContacto,
    eliminarContacto,
    mostrarContactos
}


