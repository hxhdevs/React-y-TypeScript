// Objetos
//Un objeto es una coleccion de propiedades y a su vez una propiedad es una asociacion entre un nombre o clave y un valor
// asi se ejemplificaria nuestro objeto 
const producto = { //objeto
    nombre : "Tablet", //propiedad y su valor
    precio: 300,//propiedad y su valor
    disponible: false//propiedad y su valor
}

// console.log(producto)
// console.table(producto)
// console.log(producto.nombre)

// Destructuring
// const { nombre, precio, disponible } = producto
// console.log(nombre)
// console.log(precio)
// console.log(disponible)

const nombre = producto.nombre
const precio = producto.precio
const disponible = producto.disponible
console.log(nombre)
console.log(precio)
console.log(disponible)
// el Destructuring sirve para sacar una propiedad del objeto

// ----------------------------------------------------------------------------------
// Object Literal Enhacement
//esto sirve para colocar propiedades y valores dentro de un objeto
const autenticado = true
const usuario = "Juan"
const nuevoObjeto = {
    // autenticado,
    autenticado:autenticado,
    // usuario
    usuario:usuario
}
console.log(nuevoObjeto)
console.log(nuevoObjeto.autenticado)
console.log(nuevoObjeto.usuario)