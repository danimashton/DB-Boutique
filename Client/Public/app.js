const express = require ('express');
const path = require('path')
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname,'client/public')))

app.get('/', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, '/client/index.html'));
})

app.get('/', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, '/client/public/styles.css'));
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})