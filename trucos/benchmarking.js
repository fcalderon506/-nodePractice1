let suma = 0;

console.time('bucle');

for(i = 0; i < 1000000000; i++){
    suma += 1;
}

console.timeEnd('bucle');
