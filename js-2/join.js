// Crear una función join que reciba un arreglo y 
// retorne un string con todos los elementos separados por espacio sin usar 
// el método join de los arreglos.

function join(arreglo) {

    let resultado = "";
    for (let i = 0; i < arreglo.length; i++) {
        resultado = resultado + arreglo[i];
       
        if (i < arreglo.length -1 ) {
            resultado = resultado + " ";
        }
    }
    return resultado;
}

console.log(join([1, 2, 3])); // "1 2 3"
console.log(join(["hola", "mundo"])); // "hola mundo"
console.log(join([])); // ""