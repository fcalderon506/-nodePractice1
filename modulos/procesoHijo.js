const { exec, spawn } = require('child_process');
const { stdout, stderr } = require('process');
//const exec = require('child_process').exec;

exec('ls -la', (err, stdout, stderr) => {
    if(err){
        console.error(err);
        return false;
    }

    console.log(stdout);

});

let proceso = spawn('ls', ['-la']);

console.log(proceso);

proceso.stdout.on('data', (res) => {
    console.log(proceso.killed);
    console.log(res.toString());
});

proceso.on('exit', () => {
    console.log('Proceso terminado');
    console.log(proceso.killed);
})


/*exec('node modulos/console.js', (err, stdout, stderr) => {
    if(err){
        console.error(err);
        return false;
    }

    console.log(stdout);

}); */