const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
// tecnologias.push('Nest.js') // agregamos un nuevo valor al array

// const nuevoArray=['Nest.js', ...tecnologias] // podemos agegar el nuevo valor al inicio o al final una vez copiado el array original
// console.log(nuevoArray)
// console.table(nuevoArray)

// tecnologias.shift()//elimina el primer elemento del array
// console.log(tecnologias)


// const tecnologias2 = tecnologias.filter(function(tech) {  //filter no muta
//     if(tech !== 'HTML') {
//     // if(tech === 'HTML') {
//         return tech
//     }
// })

const tecnologias2 = tecnologias.map(function(tech) {
    if(tech === 'Node.js') { //buscamos Node.js para reemplazar con Nest.js
        return 'Nest.js'
    } else {
        return tech
    }
})

console.log(tecnologias2)