const readline = require('readline-sync')

//Función para calcular área del triángulo
function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2
}

//Procedimiento para mostrar saludo
function mostrarSaludo(nombre) {
  console.log(`Hola, ${nombre}. Bienvenido al sistema de geometría`)
}

//Programa principal
const baseTexto = readline.question('Ingresa la base del triángulo: ')
const alturaTexto = readline.question('Ingresa la altura del triángulo: ')
const nombre = readline.question('Ingresa tu nombre: ')

const base = parseFloat(baseTexto)
const altura = parseFloat(alturaTexto)

mostrarSaludo(nombre)

const area = calcularAreaTriangulo(base, altura)
console.log(`El área del triángulo es: ${area}`)
