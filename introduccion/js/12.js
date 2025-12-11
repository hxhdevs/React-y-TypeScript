const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'TypeScript']

// for(let i = 0; i < tecnologias.length; i++) {
//     console.log(tecnologias[i] )
// }

// forEach
// tecnologias.forEach(function(tech) {
//     console.log(tech)
// })

// map 
const arrayMap = tecnologias.map(function(tech) {
    return tech
})

// for ... of aqui ejecuta un bloque de codigo por cada elemento del arreglo
for(let tech of tecnologias) {
    console.log(tech)
}

// console.log(arrayMap)

// ASKIN: diferencia entre map y foreach
// map genera un nuevo array en base a la funcion o condicion dada y foreach solamente ejecuta una funcion dada por la cantidad de veces que tenga el arreglo
//  va sobre del mismoarray ya existente