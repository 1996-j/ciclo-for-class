let numeros = [15, -3, 30, -8, 45, 7, -12, 60, 4, -5];

let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;


for(let i = 0; i < 10; i++) {
    
    if(numeros[i] < 0) {
        negativos = negativos + 1;
    }
    
   
    if(numeros[i] > 0) {
        positivos = positivos + 1;
    }
    

    if(numeros[i] % 15 === 0 && numeros[i] !== 0) {
        multiplosDe15 = multiplosDe15 + 1;
    }
}


console.log("Números analizados:", numeros);
console.log("Cantidad de números negativos:", negativos);
console.log("Cantidad de números positivos:", positivos);
console.log("Cantidad de múltiplos de 15:", multiplosDe15);