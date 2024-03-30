//respuesta 1
function respuesta1() {
  var respuesta = document.getElementById("respuesta").value.toLowerCase(); // Obtener el valor y convertirlo a minúsculas
  if (respuesta === "si" || respuesta === "sí") {
    // Validar si la respuesta es "si" o "sí"
    alert("Eres culpable.");
  } else if (respuesta === "no") {
    // Validar si la respuesta es "no"
    alert("No eres culpable.");
  } else {
    alert("Por favor, responde con 'sí' o 'no'."); // Mostrar un mensaje de error si la respuesta no es válida
  }
}
//respuesta 2
function respuesta2() {
  var respuesta = document.getElementById("respuesta2").value;
  if (respuesta % 2 === 0) {
    alert("El número es par."); // Si el residuo de la división por 2 es 0, el número es par
  } else {
    alert("El número es impar."); // Si el residuo de la división por 2 no es 0, el número es impar
  }
}
//respuesta 3
function respuesta3() {
  numero1 = prompt("digite el primer numero");
  numero2 = prompt("digite el segundo numero");
  if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
    alert("los numeros son multiplos"); // Si alguno de los números es divisible por el otro sin residuo, son múltiplos entre sí
  } else {
    alert("los numeros NO son multiplos"); // Si ninguno de los números es divisible por el otro sin residuo, no son múltiplos entre sí
  }
}
//respuesta 4
function respuesta4() {
  n1 = parseInt(prompt("digite el primer numero"));
  n2 = parseInt(prompt("digite el segundo numero"));
  if (n1 > n2) {
    alert("el numero " + n1 + " es mayor");
  } else if (n2 > n1) {
    alert("el numero " + n2 + " es mayor");
  } else {
    alert("los dos numeros son iguales");
  }
}
//respuesta 5
function respuesta5() {
  calificacion = parseInt(prompt("digite la nota"));
  if (calificacion < 0 || calificacion > 10) {
    alert ("Calificación inválida");
  } else if (calificacion < 5) {
    alert ("Insuficiente");
  } else if (calificacion >= 5 && calificacion < 7) {
    alert ("Suficiente");
  } else if (calificacion >= 7 && calificacion < 9) {
    alert ("Bien");
  } else {
    alert ("Excelente");
  }
}