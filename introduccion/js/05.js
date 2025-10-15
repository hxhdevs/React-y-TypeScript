//La manipulacion de objetos basicamente consiste en cambiar sus valores
// Objetos - Manipulación
const producto = {
    nombre : "Tablet",
    precio: 300,
    disponible: false
}

// Object.freeze(producto) //con freeze el objeto no puede modificarse
// Object.seal(producto) //seal permite modificar propiedades existentes pero no puedes agregar o eliminar alguna propiedad del objeto

// Reescribir un valor
producto.disponible = true

// Sino existe, lo va a añadir
producto.imagen = 'imagen.jpg'

// Eliminar propiedad de precio del objeto
delete producto.precio

console.log(producto)