function asincrona(callback){
    setTimeout(() => {
        try{
            let a = 3 + z;
            callback(null, a);
        }catch(e){
            callback(e);
        }
    }, 1000);
}

asincrona(function(err, dato){
    if(err){
        console.error('Tenemos un error');
        console.error(err);        
        return false;
        //throw err; Es una función asincrona throw no va a funcionar
    }
    console.log('Todo bien');
});