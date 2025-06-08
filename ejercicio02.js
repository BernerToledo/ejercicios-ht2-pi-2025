const readline = require('readline-sync')

//Paso 1: Solicitar precio y descuento
const precioTexto = readline.question('Ingresa el precio del producto (Q): ')
const descuentoTexto = readline.question('Ingresa el porcentaje de descuento (%): ')

//Paso 2: Convertir a número y calcular precio final
const precio = parseFloat(precioTexto)
const descuento = parseFloat(descuentoTexto)
const total = precio - (precio * descuento / 100)

//Paso 3: Imprimir resultado del cálculo
console.log(`El precio final con descuento es: Q${total}`)

//Paso 4: Solicitar estatura
const estaturaTexto = readline.question('Ingresa tu estatura en centímetros: ')
const estatura = parseInt(estaturaTexto)

//Paso 5: Verificar si puede subirse al juego
const puedeSubirse = estatura >= 120 && estatura <= 200

//Paso 6: Imprimir resultado de la evaluación
if (puedeSubirse) {
  console.log(' Puedes ingresar al juego mecánico.')
} else {
  console.log(' No puedes ingresar al juego mecánico.')
}
