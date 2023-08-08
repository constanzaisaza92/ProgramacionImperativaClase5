const prompt = require("prompt-sync")({sigint: true});

let nombre = prompt("Ingrese su nombre: ");
console.log(`Hola ${nombre} !!!`);

// 1. Convertir pulgadas en centímetros

// 1. Convertir pulgadas en centímetros
function pulgadasACentimetros(pulgadas) {
  const centimetros = pulgadas * 2.54;
  return centimetros;
}

// Solicitar ingreso de valor por prompt
const pulgadas = parseFloat(prompt("Ingrese la longitud en pulgadas:"));
const centimetros = pulgadasACentimetros(pulgadas);
console.log(`${pulgadas} pulgadas son equivalentes a ${centimetros} centímetros.`);