const readline = require('readline-sync')

//Paso 1: Solicitar fecha de nacimiento
const fechaNacimientoTexto = readline.question('Ingresa tu fecha de nacimiento (YYYY-MM-DD): ')
const anioNacimiento = parseInt(fechaNacimientoTexto.slice(0, 4))
const anioActual = new Date().getFullYear()
const edad = anioActual - anioNacimiento

//Paso 2: Evaluar grupo etario
if (edad < 12) {
  console.log('Eres un niño')
} else if (edad >= 12 && edad <= 17) {
  console.log('Eres un adolescente')
} else if (edad >= 18 && edad <= 64) {
  console.log('Eres un adulto')
} else {
  console.log('Eres un adulto mayor')
}

//Paso 3: Solicitar nota del examen
const notaTexto = readline.question('Ingresa tu nota de examen (0-100): ')
const nota = parseInt(notaTexto)

//Paso 4: Evaluar calificación con else if
if (nota >= 90) {
  console.log('Calificación: A')
} else if (nota >= 80) {
  console.log('Calificación: B')
} else if (nota >= 70) {
  console.log('Calificación: C')
} else if (nota >= 60) {
  console.log('Calificación: D')
} else {
  console.log('Calificación: F')
}
