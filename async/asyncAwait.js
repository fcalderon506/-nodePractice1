async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola', nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla...');
            resolve(nombre);
            //reject('Hay un error');
        }, 1000)
    });
}

async function adios(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Adios', nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function main(){
    let nombre = await hola('Carlos');    
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}

console.log('Iniciamos el proceso');
main();
console.log('Finalizamos el proceso');