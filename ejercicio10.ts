//Paso 1 y 2: Definir enums Prioridad y EstadoTarea
enum Prioridad {
  ALTA = 'Alta',
  MEDIA = 'Media',
  BAJA = 'Baja'
}

enum EstadoTarea {
  PENDIENTE = 'Pendiente',
  EN_PROGRESO = 'En progreso',
  FINALIZADA = 'Finalizada'
}

//Paso 3: Declarar interfaz Tarea
interface Tarea {
  id: number
  titulo: string
  completada: boolean
  prioridad: Prioridad
  estado: EstadoTarea
}

//Paso 4: Implementar clase GestorTareas
class GestorTareas {
  private tareas: Tarea[] = []

  agregarTarea(titulo: string, prioridad: Prioridad) {
    const nuevaTarea: Tarea = {
      id: Date.now(),
      titulo,
      completada: false,
      prioridad,
      estado: EstadoTarea.PENDIENTE
    }
    this.tareas.push(nuevaTarea)
  }

  listarTareas() {
    this.tareas.forEach(tarea => {
      console.log(`[${tarea.prioridad}] ${tarea.titulo} - Estado: ${tarea.estado}`)
    })
  }
}

//Paso 5: Uso del gestor con prioridad texto
const gestor = new GestorTareas()
gestor.agregarTarea('Estudiar para el parcial', Prioridad.ALTA)
gestor.agregarTarea('Revisar correo', Prioridad.MEDIA)
gestor.agregarTarea('Comprar snacks', Prioridad.BAJA)

console.log('Listado con prioridades en texto:')
gestor.listarTareas()

//Paso 6: Modificar enum Prioridad para usar emojis
enum PrioridadEmojis {
  ALTA = '🔴',
  MEDIA = '🟡',
  BAJA = '🔵'
}

//Para no cambiar código, hacemos asignación directa:
(Prioridad as any) = PrioridadEmojis

console.log('\nListado con prioridades en emojis:')
gestor.listarTareas()
