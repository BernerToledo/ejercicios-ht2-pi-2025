const readline = require('readline-sync')

// aso 1: Solicitar segundos para temporizar
let segundosTexto = readline.question('¿Cuántos segundos quieres temporizar? ')
let segundos = parseInt(segundosTexto)

//Paso 2: Conteo regresivo con ciclo while
while (segundos > 0) {
  console.log(`Faltan ${segundos} segundos`)
  segundos--
  
  const inicio = Date.now()
  while (Date.now() - inicio < 1000) {

  }
}
console.log('El tiempo finalizó')

//Paso 3: Menú interactivo con do...while
let opcion
do {
  console.log('\nMenú:')
  console.log('1. Saludar')
  console.log('2. Mostrar hora actual')
  console.log('3. Salir')

  let opcionTexto = readline.question('Elige una opción: ')
  opcion = parseInt(opcionTexto)

  switch (opcion) {
    case 1:
      console.log('¡Hola! ¿Cómo estás?')
      break
    case 2:
      console.log('Hora actual:', new Date().toLocaleTimeString())
      break
    case 3:
      console.log('Saliendo del programa. ¡Hasta luego!')
      break
    default:
      console.log('Opción inválida, intenta de nuevo.')
  }
} while (opcion !== 3)
