const productos = [
  { nombre: 'Zapatos', precio: 100 },
  { nombre: 'Camisa', precio: 80 },
  { nombre: 'Pantalón', precio: 120 },
  { nombre: 'Corbata', precio: 50 },
]

//Añadir 12% de IVA usando map
const productosConIVA = productos.map(producto => {
  return {
    nombre: producto.nombre,
    precioConIVA: +(producto.precio * 1.12).toFixed(2) // redondeo a 2 decimales
  }
})

console.log('Productos con IVA:')
console.log(productosConIVA)

//Filtrar productos con precio con IVA >= 100
const productosFiltrados = productosConIVA.filter(producto => producto.precioConIVA >= 100)

console.log('\nProductos filtrados (precio con IVA >= 100):')
console.log(productosFiltrados)

//Ordenar productos por precio con IVA (menor a mayor)
const productosOrdenados = [...productosConIVA].sort((a, b) => a.precioConIVA - b.precioConIVA)

console.log('\nProductos ordenados por precio con IVA (menor a mayor):')
console.log(productosOrdenados)

