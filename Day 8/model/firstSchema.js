const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    course : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    }
})

const firstSchema = mongoose.model('student', Schema)

module.exports = firstSchema