/* ------------------------------------------------ Desafio 1-3: Funções e estruturas de repetição ----------------------------------------------*/

// Usuários e tecnologias
const users = [
    {name:"Carlos", technologys: ["HTML", "CSS"]},
    {name:"Jasmine", technologys: ["JavaScript", "CSS"]},
    {name:"Tuane", technologys: ["HTML", "Node.js"]}
] 


for(let i = 0; i < users.length; i++){
    console.log(`${users[i].name} works with ${users[i].technologys}.`)
}

//Busca por tecnologia

function checkIfUserUseCSS(user){

    for(let technology of user.technologys){
        if(technology == "CSS"){
            return true
        }
    }

    return false
}

for (let i = 0; i < users.length; i++){
    const userWorksWithCSS = checkIfUserUseCSS(users[i])

    if(userWorksWithCSS){
        console.log(`User ${users[i].name} works with CSS`)
    }
}

// Sum of expenses and revenues

const users2 = [
    {
        name: "Salvio",
        revenues: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: "Marcio",
        revenues: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        revenues: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
];

function calculBalance(revenues, expenses) {
    let sumRevenues = sumNumbers(revenues)
    let sumExpenses = sumNumbers(expenses)
    return sumRevenues - sumExpenses
}

function sumNumbers(numbers) {
    let sum = 0
    for (i = 0; i < numbers.length; i++){
        sum = sum + numbers[i]
    }
    return sum
}


for(let user of users2){
    const balance = calculBalance(user.revenues, user.expenses)

    if (balance > 0){
        console.log(`${user.name} has a POSITIVE balance of ${balance.toFixed(1)}.`)
    } else {
        console.log(`${user.name} has a NEGATIVE balance of ${balance.toFixed(1)}`)
    }
}
