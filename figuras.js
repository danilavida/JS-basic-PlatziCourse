//Codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

//--Codigo del triangulo--//
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

// Codigo del circulo 
console.group("Circulos");

function diametroCirculo(radio) {
  return radio * 2;
}

const PI = 3.141516;
console.log("El valor de PI es: " + PI);

// circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
// Area
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

// Aqui interactuamos con el HTML

//--CUADRADO--//

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//--TRIANGULO--//

function calcularPerimetroTriangulo() {
  const input = document.getElementById("InputTriangulo");
  const value = input.value;

  const perimetro = perimetroTriangulo(value);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input = document.getElementById("InputTriangulo");
  const value = input.value;

  const area = areaTriangulo(value);
  alert(area);
}