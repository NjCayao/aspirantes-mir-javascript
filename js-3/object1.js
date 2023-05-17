const pedro = {
    nombre : "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar" , "squash" , "piano"],
    saluda: function() {
        console.log("Hola, me llamo " + this.nombre);
    }
};
console.log(pedro.edad);

pedro.estatura = 1.8;

delete pedro.activo;

for (let llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
      console.log(llave + ": " + pedro[llave]);
    }
  };

 pedro.saluda();

  

