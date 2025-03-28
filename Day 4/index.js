const express = require('express');
const port = 3000;

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}))

let students = []

app.get('/', (req, res)=>{
    res.render('index', {students})
})

app.post('/addData', (req, res)=>{
    students.push(req.body);
    res.redirect('/');
})

app.listen(port, (error)=>{
    error ? console.log(error) : console.log(`Server Started on port : ${port}`)
})