const readline = require('readline-sync')

//Paso 1: Solicitar número de día
const numeroDiaTexto = readline.question('Ingresa un número del 1 al 7: ')
const numeroDia = parseInt(numeroDiaTexto)

//Paso 2: switch para días de la semana
switch (numeroDia) {
    case 1:
        console.log('Lunes')
        break
    case 2:
        console.log('Martes')
        break
    case 3:
        console.log('Miércoles')
        break
    case 4:
        console.log('Jueves')
        break
    case 5:
        console.log('Viernes')
        break
    case 6:
        console.log('Sábado')
        break
    case 7:
        console.log('Domingo')
        break
    default:
        console.log('Día inválido')
}

//Paso 3: Solicitar color del semáforo
const color = readline.question('Ingresa un color del semáforo (verde, amarillo, rojo): ').toLowerCase()

//Paso 4: switch para interpretar semáforo
switch (color) {
    case 'verde':
        console.log('Puede avanzar')
        break
    case 'amarillo':
        console.log('Pase con precaución')
        break
    case 'rojo':
        console.log('Deténgase')
        break
    default:
        console.log('Color no válido')
}
