// Uniendo 2 objetos o mas
const producto = {
    nombre : "Tablet",
    precio: 300,
    disponible: false
}

const cliente = {
    nombre: "Juan",
    premium: true
}

const carrito = {
    cantidad: 1,
    ...producto, // spread operator
    ...cliente // spread operator
}
// con spread operator unimos dos objetos
console.table(carrito)
console.log(carrito.nombre)


const nuevoObjeto = {
    ...producto,
    ...cliente,
}
console.table(nuevoObjeto)

const nuevoObjeto2 = Object.assign(producto, cliente)
console.table(nuevoObjeto2)