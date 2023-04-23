/**
 * Este archivo es para ejecutar todo lo que declaramos, es el punto de entrada de nuestro programa
 */
//importamos funcionalidades necesarias
const { mostrarContactos, crearContacto, eliminarContacto } = require("./controllers")
const { Contacto } = require("./objects")

//ejecutamos funcionalidades
let c4 = new Contacto(3, "Tatiana Sierra", 54113713, { ciudad: "Ibagué", departamento: "Tolima" });

crearContacto(c4);


eliminarContacto(2);