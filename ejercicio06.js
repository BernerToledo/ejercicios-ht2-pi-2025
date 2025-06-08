//Paso 1: Declarar arreglos
const estudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José']
const notas = [70, 85, 55, 90, 60]

//Paso 2: Saludar a cada estudiante con género personalizado
for (let i = 0; i < estudiantes.length; i++) {
  const nombre = estudiantes[i]
  //Asumimos femenino si termina en 'a'
  const esFemenino = nombre.toLowerCase().endsWith('a')
  if (esFemenino) {
    console.log(`Bienvenida, ${nombre}`)
  } else {
    console.log(`Bienvenido, ${nombre}`)
  }
}

//Paso 3: Calcular promedio con ciclo for
let suma = 0
for (let i = 0; i < notas.length; i++) {
  suma += notas[i]
}
const promedio = suma / notas.length

//Paso 4: Imprimir resultado
console.log(`El promedio del grupo es: ${promedio}`)
