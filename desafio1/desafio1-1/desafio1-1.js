/* ------------------------------------------------ Desafio 1-1: Primeiros passos com JS ----------------------------------------------*/

// Cálculo de IMC

const name = "Renato"
const weight = 105
const height = 1.82

const imc = weight / (height * height)

if (imc >= 30){
    console.log(`${name} você está acima do peso.`)
} else {
    console.log(`${name} você não está acima do peso.`)
}

// Cálculo de aposentadoria

const name2 = "Maria"
const gender = "F"
const age = 56
const contribution = 30

const contributionCalcul = age + contribution

const manCanRetire = gender === "M" && age >= 35 && contributionCalcul >= 95
const womanCanRetire = gender === "F" && age>= 30 && contributionCalcul >= 85

if(manCanRetire || womanCanRetire){
    console.log(`${name2}, você pode se aposentar!`)
} else {
    console.log(`${name2}, você ainda não pode se aposentar!`)
}