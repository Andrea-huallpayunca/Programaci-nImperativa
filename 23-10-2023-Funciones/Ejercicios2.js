// 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
// y lo retorne.
// Investigá qué hace el método de strings .toUpperCase()

function minuscToMayusc(text = "MARIA") {
  const result = text.toUpperCase();
  return result;
}

const prueba1 = minuscToMayusc("ANDREA");
console.log(prueba1);
// 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
// parámetro.
// Pista: te servirá revisar qué hace la palabra reservada typeof.

function typeOfValue(value) {
  const result = typeof value;
  return result;
}

const prueba2 = typeOfValue("array");
console.log(prueba2);
// 9. Crear una función que le pasamos el radio de un círculo y nos devuelve la
// circunferencia.
// Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.

function circunferencia(radio) {
  const result = 2 * Math.PI * radio;
  return result;
}

const prueba3 = circunferencia(3);
console.log(prueba3);
