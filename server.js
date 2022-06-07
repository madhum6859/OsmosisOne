const express = require('express')

const app = express()

const PORT = process.env.PORT || 7000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/loginUser', (req, res) => {
    res.render('loginUser')
})
app.get('/loginAdmin', (req, res) => {
    res.render('loginAdmin')
})
app.get('/loginSME', (req, res) => {
    res.render('loginSME')
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})