function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('Hola', nombre);
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios', nombre);
        otroCallback(nombre);
    }, 1000);
}

console.log('Iniciando proceso...');
/*hola('Juan', function(){
    adios('Juan', function(){
        console.log('Finalizando proceso...');
    });    
});*/
hola('Juan', function(nombre){
    adios(nombre, function(){
        console.log('Finalizando proceso...');
    });
})
