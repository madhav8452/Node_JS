const express = require('express')
const port = 3000
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join('public')))

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(port, (error)=>{
    error ? console.log(error) : console.log(`Started server on port : ${port}`)
})