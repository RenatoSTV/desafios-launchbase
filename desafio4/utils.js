module.exports = {
    age: function (timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) {
            age = age - 1
        }

        return age
    },
    graduation: function (graduation) {
        switch (graduation) {
            case ("medio"): return "Ensino médio Completo";
            case ("superior"): return "Ensino Superior Completo";
            case ("mestrado"): return "Mestrado";
            case ("doutorado"): return "Doutorado"
        }
    },
    date: function (timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }

    },
    grade: function (grade) {
        switch (grade) {
            case ("5EF"): return "5º ano do ensino fundamental";
            case ("6EF"): return "6º ano do ensino fundamental";
            case ("7EF"): return "7º ano do ensino fundamental";
            case ("8EF"): return "8º ano do ensino fundamental";
            case ("9EF"): return "9º ano do ensino fundamental";
            case ("1EM"): return "1º ano do ensino médio";
            case ("2EM"): return "2º ano do ensino médio";
            case ("3EM"): return "3º ano do ensino médio";
        }
    }
}