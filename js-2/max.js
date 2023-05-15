// Crea una función max que reciba un arreglo de números y
//  retorne el número máximo sin usar el método Math.max de 
//  JavaScript. Si el arreglo está vacío debe retornar undefined

// escribe la función max acá

function max(arreglo) {

    if (arreglo === 0) {
        return undefined;
    }
        let numeros = arreglo[0];
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] > numeros) {
                numeros = arreglo[i];
                
            }
            
        }

        return numeros;    
    
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined