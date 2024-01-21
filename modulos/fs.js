const fs = require('fs');

function leer(ruta, cb){
    fs.readFile(ruta, (err, data) => {
        console.log(data.toString());
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, (err, data) => {
        if(err){
            console.log('No se pudo escribir: ' + err);
        }else{
            console.log('Escrito correctamente');
        }
    })
}

function borrar(ruta, cb){
    fs.unlink(ruta, cb);
}

leer(__dirname + '/archivo.txt');
escribir(__dirname + '/archivo1.txt', 'Hola mundo');
borrar(__dirname + '/archivo1.txt', console.log);