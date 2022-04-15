// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML (Camilo)

//Cuadrado

function calcularPerimetroCuadrado() {
  const input = document.getElementById("input-lado-cuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("input-lado-cuadrado");
  const value = input.value;

  const area = perimetroCuadrado(value);
  alert(area);
}

//Triangulo
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("input-lado1-triangulo");
  const valueLado1 = parseInt(inputLado1.value);

  const inputLado2 = document.getElementById("input-lado2-triangulo");
  const valueLado2 = parseInt(inputLado2.value);

  const inputBase = document.getElementById("input-base-triangulo");
  const valueBase = parseInt(inputBase.value) ;

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetro);
}

function calcularAreaTriangulo() {

  const inputLado1 = document.getElementById("input-lado1-triangulo");
  const valueLado1 = parseInt(inputLado1.value);

  const inputLado2 = document.getElementById("input-lado2-triangulo");
  const valueLado2 = parseInt(inputLado2.value);

  const inputBase = document.getElementById("input-base-triangulo");
  const valueBase = parseInt(inputBase.value) ;

  if (valueLado1!=valueLado2) {
    alert("Las medidas ingresadas no corresponden a un triangulo isoceles")
  } else { 
    const altura = Math.sqrt((valueLado1**2)-((valueBase**2)/4));
    const area = areaTriangulo(valueBase, altura);
    alert(area);
  }  
}

//Circulo

function calcularPerimetroCirculo() {
  const input = document.getElementById("input-radio-circulo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("input-radio-circulo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}


// // Aquí interactuamos con el HTML
// function calcularPerimetroCuadrado() {
//   const input = document.getElementById("InputCuadrado");
//   const value = input.value;

//   const perimetro = perimetroCuadrado(value);
//   alert(perimetro);
// }
// function calcularAreaCuadrado() {
//   const input = document.getElementById("InputCuadrado");
//   const value = input.value;

//   const area = areaCuadrado(value);
//   alert(area);
// }