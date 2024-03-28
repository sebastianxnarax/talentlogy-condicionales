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
    numero1= prompt ("digite el primer numero");
    numero2= prompt ("digite el segundo numero");
    if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
        alert("los numeros son multiplos"); // Si alguno de los números es divisible por el otro sin residuo, son múltiplos entre sí
    } else {
        alert("los numeros NO son multiplos"); // Si ninguno de los números es divisible por el otro sin residuo, no son múltiplos entre sí
    }
    
}