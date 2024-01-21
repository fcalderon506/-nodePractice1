function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola', nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla...');
            //resolve(nombre);
            reject('Hay un error');
        }, 1000)
    });
}

function adios(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Adios', nombre);
            resolve(nombre);
        }, 1000);
    });
}

console.log('Iniciando el proceso...');
hola('Carlos')
    // .then(nombre  => {
    //     return adios(nombre);
    // })
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Proceso terminado...');
    })
    .catch(err => {
        console.log(err);
    })
