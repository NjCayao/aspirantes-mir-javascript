/*En un archivo llamado hello.js 
crear una función llamada hola 
que reciba un argumento (una cadena de texto)
y retorne “Hola ” seguido del argumento y un 
signo de exclamación, debes ejecutar tu archivo 
usando node.js node hello.js*/

// escribe la función hola acá
function hola (nombre){
    return "Hola " + nombre + "!";
}

// código de prueba
  console.log(hola("Pedro"));
  console.log(hola("Juan"));
  console.log(hola(""));