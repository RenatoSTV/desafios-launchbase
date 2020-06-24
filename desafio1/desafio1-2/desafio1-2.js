/* ------------------------------------------------ Desafio 1-2: Lidando com objetos e vetores ----------------------------------------------*/

// Construção e impressão de objetos

const company = {
    name: "Rocketseat",
    color: "purple",
    focus: "Programming",
    address: {
        street: "Guilhermina Gembala Street",
        number: 260
    }
}

console.log(`The company ${company.name} is located at ${company.address.street}, ${company.address.number}`)

// Vetores e objetos

const user = {
    name: "Renato",
    age: 27,
    stacks:[
        {name:"C++", specialty: "Desktop"},
        {name: "Python", specialty: "Data Science"},
        {name:"Javascript", specialty: "Web/Mobile"}
    ]
}

console.log(`User ${user.name} is ${user.age} years old and uses the technology ${user.stacks[0].name} whith specialty in ${user.stacks[0].specialty}.`)