const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea por hacer"
}

const completado = {
    alias: 'c',
    default: true,
    desc: "Marca como completado o pendiente la tarea"
}

const optsCrear = {
    descripcion
}

const optsActualizar = {
    descripcion,
    completado
}

const optsBorrar = {
    descripcion
}


const argv = require('yargs')
    .command('crear', ' Crear un elemento por hacer', optsCrear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optsActualizar)
    .command('borrar', 'Borra un elemento de la lista de tareas', optsBorrar)
    .help()
    .argv;

module.exports = {

    argv

}