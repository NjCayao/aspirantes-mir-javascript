// escribe la función sum acá
function sum(arreglo){
    numeros = 0;
    for (let i = 0; i < arreglo.length; i++) {
        numeros = numeros + arreglo [i];
        
        
    }
    return numeros;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0