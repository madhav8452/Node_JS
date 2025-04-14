const express = require('express');
const port = 3000;

const app = express()
const db = require('./config/db')
const Schema = require('./model/firstSchema')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

let students = []

app.get('/', async (req, res) => {
    await Schema.find({}).then((students) => {
        res.render('index', { students })
    })
})

app.post('/addData', async (req, res) => {
    await Schema.create(req.body).then(() => {
        res.redirect('/')
    })
})

app.get('/deleteData', async (req, res) => {
    await Schema.findByIdAndDelete(req.query.id).then(() => {
        res.redirect('/')
    })
})

app.get('/editData', async (req, res) => {
    await Schema.findById(req.query.id).then((singleData) => {
        res.render('edit', { singleData })
    })
})

app.post('/updateData', async (req, res) => {
    await Schema.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect('/')
    })
})

app.listen(port, (error) => {
    error ? console.log(error) : console.log(`Server Started on port : ${port}`)
})


