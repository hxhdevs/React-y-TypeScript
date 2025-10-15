// Objetos - Destructuring de dos o más objetos
const producto = {
    nombre : "Tablet",
    precio: 300,
    disponible: false
}

const cliente = {
    nombre: "Juan",
    premium: true, 
    direccion: {
        ciudad:"Ciudad Meteoro",
        calle: "Calle México",
        cp:69310
    }
}

const { nombre } = producto
const { nombre: nameCustomer, direccion: {ciudad, calle ,cp}} = cliente

console.log(nombre)
console.log(nameCustomer)
console.log(ciudad)
console.log(calle)
console.log(cp)