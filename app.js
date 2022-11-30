const express = require ('express');
const path = require('path')
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname,'./Client/Public')))

app.get('/', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, './Client/index.html'));
})

app.get('/signup', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, './Client/signup.html'));
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

app.get('', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, './Client/404.html'));
})

app.get('/', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, 'Client/Public/styles.css'));
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})