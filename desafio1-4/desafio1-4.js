/* ------------------------------------------------ Desafio 1-4: Aplicação: Operações bancárias ----------------------------------------------*/

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

// Adicionar transação
function createTransaction(transaction){
    user.transactions.push(transaction)

    if (transaction.type === "credit"){
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

// Relatórios
function getHigherTransactionByTye(type){
    let higherTransaction
    let highValue = 0

    for(let transaction of user.transactions){
        if(transaction.type == type && transaction.value > highValue){
            highValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAvarageTransacrionValue(){
    let sum = 0

    for(let transaction of user.transactions){
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    }
    for (let transaction of user.transactions) {
        if (transaction.type === 'credit')
            count.credit++
        else
            count.debit++
    }

    return count
}

createTransaction({type: "credit", value: 50})
createTransaction({type: "credit", value: 120})
createTransaction({type: "debit", value: 80})
createTransaction({type: "debit", value: 30})

console.log(user.balance)

console.log(getHigherTransactionByTye("credit"))
console.log(getHigherTransactionByTye("debit"))

console.log(getAvarageTransacrionValue())

console.log(getTransactionsCount())