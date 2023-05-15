// Crea una función maxIndex que reciba una arreglo 
// de números y retorne el índice donde se encuentra 
// el mayor. Si el arreglo está vacío debe retornar -1.

// escribe la función maxIndex acá
function maxIndex(arreglo) {
    if (arreglo.length === 0) {
        return -1; 
    }
    
    let numeros = arreglo [0];
    let inicio = 0;
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > numeros) {
            numeros = arreglo [i];
            inicio = i;
        }
        
    }
    return inicio;
    
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1