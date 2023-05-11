/*En un archivo llamado sum.js 
escribe una función llamada suma que reciba 
un número positivo y retorne la suma de todos 
los números desde 1 hasta ese número. 
Debes ejecutar tu archivo usando node.js node sum.js*/

// escribe la función suma acá
function suma(n) {
    return (n * (n + 1)) / 2;
  }

// código de prueba
console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(10)) // 55
console.log(suma(15)) // 120