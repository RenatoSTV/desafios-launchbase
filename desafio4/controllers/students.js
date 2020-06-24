const fs = require('fs')
const data = require('../data.json')
const { age, grade, date } = require('../utils')
const Intl = require('intl')

//index
exports.index =  function (req, res) {
    for(studentsout in data.students){
        const students = {
                ...studentsout,
                grade:grade(studentsout.grade)
        }
        return students
    }

    return res.render("students/index", {  students })
}

//show
exports.show = function(req,res){
    const { id } = req.params

    const foundStudent = data.students.find(function(student){
        return student.id == id
    })

    if (!foundStudent) return res.send("Student not found!")

    const student = {
        ...foundStudent,
        birth:date(foundStudent.birth).birthDay,
        grade:grade(foundStudent.grade),
    }

    return res.render("students/show", { student })

}

//create
exports.create = function (req, res) {
    return res.render("students/create")
}

// post
exports.post =  function (req, res) {

    const keys = Object.keys(req.body)

    for(key of keys){
        if(req.body[key] == "")
            return res.send("Please, fill all fields!")
    }

    birth = Date.parse(req.body.birth)

    let id = 1
    const lastStudent = data.students[data.students.length - 1]

    if(lastStudent){
        id = lastStudent.id + 1
    }

    data.students.push({
        id,
        ...req.body,
        birth 
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error!")
        
        return res.redirect("/students")
    })

}

// edit
exports.edit = function(req,res){
    const { id } = req.params

    const foundStudent = data.students.find(function(student){
        return student.id == id
    })

    if (!foundStudent) return res.send("Student not found!")

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).iso
    }

    return res.render('students/edit', { student })
}

// put
exports.put = function(req,res){
    const { id } = req.body
    let index = 0

    const foundStudent = data.students.find(function(student, foundIndex){
        if (id == student.id){
            index = foundIndex
            return true
        }
    })

    if (!foundStudent) return res.send("Student not found!")

    const student = {
        ...foundStudent,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.students[index] = student

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write error!")
        return res.redirect(`/students/${id}`)
    })

}

//delete
exports.delete = function(req,res){
    const { id } = req.body

    const filteredStudents = data.students.filter(function(student){
        return student.id != id
    })

    data.students = filteredStudents

    fs.writeFile("data.json", JSON.stringify(data, null, 2),function(err){
        if(err) return res.send("Write error!")
        return res.redirect("/students")
    })
}