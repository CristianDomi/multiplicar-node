const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(lista => {
            console.log(`Tabla del ${argv.base} con limite de ${argv.limite}\n\n`.green);
            console.log(`${lista}`.blue);
        }).catch(e => {
            console.log(e);
        })
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado ${colors.green(archivo)}`);
        }).catch(e => {
            console.log(e);
        })
        break;
    default:
        console.log('comando no reconocido');
}

//let base = "5";

//console.log(process.argv);

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=');

//console.log(base[1]);

//console.log('Limite', argv.limite);

/*
crearArchivo(base[1]).then(archivo => {
    console.log(`Archivo creado ${archivo}`);
}).catch(e => {
    console.log(e);
})*/