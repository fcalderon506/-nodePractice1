function seRompe(){
    return 3 + z;
}

function seRompeAsincrona(cb){
    setTimeout(() => {
        try{
            return 3 + z;
        }catch(err){
            //console.error(err);
            cb(err);
        }        
    }, 1000);
}

try{
    //seRompe();
    seRompeAsincrona(function(err){
        console.log('Hay un error ' + err);
    });
}catch(err){
    console.log('Algo salio mal: ' + err);
    //console.log(err.message);
}
