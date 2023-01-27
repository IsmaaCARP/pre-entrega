let n = 3;
// n = Cantidad de intentos
let cant = 0;
// cant = Contador
while (n > cant) {
  let e = prompt("Ingrese su edad");
  if (e >= 18) {
    let nombre = prompt("ingrese su nombre");
    let telefono = prompt("ingrese telefono");
    console.log(nombre, telefono);
    break;
  } else {
    cant++;
    if (cant == 3) {
      alert("No tiene acceso");
    }
  }
}

console.log("Finalizo el programa");
