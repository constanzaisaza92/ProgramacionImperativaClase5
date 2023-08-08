// 1. Convertir pulgadas en centímetros: 

// Solicitar ingreso de valor por prompt
const prompt = require("prompt-sync")({sigint: true});
const pulgadas = parseFloat(prompt("Ingrese la longitud en pulgadas:"));
const centimetros = pulgadasACentimetros(pulgadas);
console.log(`${pulgadas} pulgadas son equivalentes a ${centimetros} centímetros.`);

function pulgadasACentimetros(pulgadas) {
  const centimetros = pulgadas * 2.54;
  return centimetros;
}


// 2. Convertir un string en una URL:
const mesaDeTrabajo = prompt("Ingrese el nombre:");
let direccionWeb = convertirAURL(mesaDeTrabajo);
console.log(`su dirección web es: ${direccionWeb}`);

function convertirAURL(mesaDeTrabajo) {
  let direccionWeb = "http://www."+ mesaDeTrabajo +".com";
  return direccionWeb;
}

  
// 3. Agregar admiración al final de una frase:
const frase = prompt("Por favor digite su frase:");
let fraseAdmiracion = convertirFrase(frase);
console.log(`Su nueva frase es: ${fraseAdmiracion}`);

function convertirFrase(frase) {
  let fraseAdmiracion = "¡ "+frase +" !";
  return fraseAdmiracion;
}
  

//4. función que calcule la edad de los perros:
const edadHumano =prompt("¿Quieres saber la edad de tu perro?, digita cuantos años humanos tiene:");
let edadPerro = humanoPerro(edadHumano);
console.log(`La edad de su perro es: ${edadPerro} años`);

function humanoPerro(edadHumano) {
  let edadPerro = edadHumano * 7;
  return edadPerro;
}


// 5. Calcular el valor de la hora de trabajo:
const valorSueldo = prompt('Por favor, digite el valor de su salario: ');
let valor= valorHora(valorSueldo);
console.log(`El valor por hora laborada es de: $ ${valor} `);

function valorHora(valorSueldo){
  let valor= valorSueldo/40;
  return valor;
}


// 6. Crear la función calculadorIMC():
const altura = parseFloat(prompt('Por favor, digite el valor de su estatura en metros: '));
const peso = parseFloat(prompt('Por favor, digite el valor de su peso corporal dado en kilogramos: '));
const resultadoIMC = imc(altura, peso);
console.log(`Su IMC es: $ ${resultadoIMC} `);

function imc(altura, peso) {
  let resultadoIMC = peso/Math.pow(altura, 2);
  return resultadoIMC;
}

//7. De minusculas a mayusculas:
const mensaje = prompt('Por favor digite su mensaje en letra minúscula:  ')
const mensajeMayus = mayus(mensaje);
console.log(`${mensajeMayus} `);

function mayus(mensaje) {
const mensajeMayus= mensaje.toUpperCase();
return mensajeMayus;
}


//8. tipo de dato es un parámetro:
const dato = prompt("Por favor digite el dato:");
const tipoDato=tipo(dato);
console.log(`su dato es de tipo:  ${tipoDato} `);

function tipo(dato) {
  let tipoDato = typeof(dato);
  return tipoDato;
}

//9. area de la circunferencia:
const radio= parseFloat(prompt('Ingrese el valor del radio de la circunferencia: '));
const area= calculo(radio);
console.log(`El área de la circunferencia es de: ${area} `);

function calculo(radio) {
  let area = Math.PI * Math.pow(radio, 2);
  return area;
}