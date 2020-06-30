const db = require('../../config/db')
const { date } = require('../../lib/utils')

module.exports = {
    all(callback){
        
        db.query(`SELECT *
        FROM  students
        ORDER BY name ASC`, function(err,results){
            if(err) `DATABASE error! ${err}`

            callback(results.rows)
        })

    },
    create(data, callback){

        const query = `
            INSERT INTO students (
                avatar_url,
                name,
                email,
                birth_date,
                educational_level,
                time
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `

        const values = [
            data.avatar_url,
            data.name,
            data.email,
            date(data.birth).iso,
            data.educational_level,
            data.time
        ]

        db.query(query, values, function(err, results){
            if(err) `DATABASE error! ${err}`
            
            callback(results.rows[0])
        })
    },
    find(id, callback) {
        db.query(`SELECT * 
        FROM students 
        WHERE id = $1`, [id], function(err, results){
            if(err) throw `DATABASE error! ${err}`

            callback(results.rows[0])
        })
    },
    update(data, callback){
        const query = `
        UPDATE students SET
            avatar_url=($1),
            name=($2),
            email=($3)
            birth_date=($4),
            educational_level=($5),
            time=($6)
        WHERE id = $7
        `

        const values = [
            data.avata_url,
            data.name,
            data.email,
            date(data.birth).iso,
            data.educational_level,
            data.time
        ]

        db.query(query, values, function(err, results){
            if(err) `DATABASE error! ${err}`

            callback()
        })
    },
    delete(id, callback){
        db.query(`DELETE FROM students WHERE id = $1`, [id], function(err, results){
            if(err) throw `DATABASE error! ${err}`

            return callback()

        })
    }
}