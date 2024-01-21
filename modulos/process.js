//const process = require('process');

process.on('beforeExit', () => {
    console.log('Este proceso esta por acabar')
});

process.on('exit', () => {
    console.log('Este proceso acabo')
});

process.on('uncaughtException', (err, origin) => {
    console.log('Error: ');
    console.error(err);
});
//process.on('uncaughtRejection');