// 1. Crear una función que convierta pulgadas en centímetros.
// Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

function inchesToCentimeters(valorPulgadas = 1) {
  const result = valorPulgadas * 2.54;
  return result;
}

const prueba1 = inchesToCentimeters(3);
console.log(prueba1);
// 2. Crear una función que recibe un string y lo convierte en una URL.
// Ej: “pepito” es devuelto como “http://www.pepito.com”

function newUrl(name) {
  const result = `http://www.${name}.com`;
  return result;
}

const prueba2 = newUrl("andrea");
console.log(prueba2);
// 3. Crear una función que recibe un string y devuelve la misma frase pero con
// admiración.

function withSymbolAdmiration(text) {
  return text + "!";
}

const prueba3 = withSymbolAdmiration("hola");
console.log(prueba3);
// 4. Crear una función que calcule la edad de los perros, considerando que 1 año
// para nosotros son 7 de ellos.

function ageOfDogsPeople(edadPerro) {
  const newAge = edadPerro * 7;
  return newAge;
}
const prueba4 = ageOfDogsPeople(3);
console.log(prueba4);
// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// sueldo mensual como parámetro.
// PD: considerá que tu mes de trabajo tiene 40 horas.

function workHourValue(salary) {
  const result = salary / 40;
  return result;
}

const prueba5 = workHourValue(1200);
console.log(prueba5);
// 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
// kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
// probando diferentes valores.

function calculadorIMC(height = 1.6, weight = 56) {
  const imc = weight / Math.pow(height, 2);
  return imc;
}

const prueba6 = calculadorIMC(1.7, 60);
console.log(prueba6);
