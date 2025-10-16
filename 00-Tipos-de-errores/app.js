/* 01. Tipos de errores o bugs. */

// ❌ 1. Error de sintaxis:
if (true { 
  console.log("Hola");
}

// ❌ 2. Error de referencia:
console.log(nombre);

// ❌ 3. Error de tipo:
let numero = 42;
numero.toUpperCase(); // este método solo existe en Strings

// ❌ 4. Error lógico:
let a = 10;
let b = 5;
let promedio = a + b / 2; // el promedio debería ser (a + b) / 2
console.log(promedio); // Resultado incorrecto: 12.5