const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/Node4to5')

const db = mongoose.connection

db.once('open', (error)=>{
    error ? console.log(error) : console.log('database connected')
})

module.export = db