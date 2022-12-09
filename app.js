const express = require ('express');
const path = require('path')
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const {getConnection} = require('../db');
const userService = require('./users_module/service')

const app = express();
const port = 3000

app.engine('handlebars', engine ());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname,'./Client/Public')))
app.use(bodyParser.json())

app.get('/', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, './Client/index.html'));
})

app.get('/signup', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, './Client/signup.html'));
})

app.get('/signin', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, './Client/signin.html'));
})

app.get('/leggings', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, './Client/leggings.html'));
})

app.get('/tops', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, './Client/tops.html'));
})

app.get('/accessories', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, './Client/accessories.html'));
})

app.get('/checkout', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, './Client/checkout.html'));
})

app.get('*', (req, resp) => {
    resp.send('./Client/Public/404.html');
})

app.get('/', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, 'Client/Public/styles.css'));
})

app.post('/signup', async (req, res) => {
    console.log(req.body)
    try {
        await userService.storeUser(req.body)
    } catch(err) {
        res.status(400).json({
            error: err
        })
        return
    } 
    res.status(200).json({
        message: "user created successfully"
    })
})

app.post('/signin', async (req, res) => {
    console.log(req.body)
    try {
        await userService.storeUser(req.body)
    } catch(err) {
        res.status(400).json({
            error: err
        })
        return
    } 
    res.status(200).json({
        message: "user signed in successfully"
    })
})

// app.get('user', (req, res) => {
//     res.render('profile', {
//         email: ""
//     })
// })


app.listen(port, async () => {
    console.log('listening on port ' + port);
    await getConnection ()
    console.log('connected to DB')
})