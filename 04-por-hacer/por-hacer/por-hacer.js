const fs = require("fs");

let listadoPorHacer = [];

const guardarDB = () => {

    return new Promise((resolve, reject) => {

        let data = JSON.stringify(listadoPorHacer);

        fs.writeFile("db/data.json", data, (err => {
            if (err) {
                reject(err);
                throw new Error("No se pudo guardar");
            } else {
                resolve("data.json");
            }
        }))

    })

}

const cargarDB = () => {


    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];

    }


}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB().then(() => {
        console.log("Archivo JSON guardado");
    }).catch(e => {
        console.log(e);
    });

    return porHacer;



}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer = listadoPorHacer.filter(a => a.descripcion !== descripcion);
        guardarDB();
        return true;
    } else {
        return false;
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}