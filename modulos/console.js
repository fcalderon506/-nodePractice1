console.log('Mensaje');
console.warn('Mensaje');

var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 3,
        b: 'YZ'
    }
]

console.table(tabla);

console.group('Group')
console.log('Mensaje 1');
console.log('Mensaje 2');
console.log('Mensaje 3');
console.groupEnd('Group')

console.count('Veces');
console.countReset('Veces');
console.count('Veces');
console.count('Veces');

