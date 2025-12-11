// Template Strings y Concatenación

const producto = "Tablet de 12 Pulgadas"
const precio = 400
const marca = "Orange"

console.log('El Producto es: ' + producto) //Concatenacion normal
console.log(`El Producto es: ${producto} `)//Concatenacion con template strings

console.log(producto + " $" + precio + " Dolares, marca: " +  marca)
console.log(`${producto} $${precio} Dolares, marca: ${marca}`)