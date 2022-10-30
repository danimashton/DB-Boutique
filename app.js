const express = require ('express');
const path = require('path')
const app = express();
const port = 3000

app.get('/', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/', (req, resp) => {
    console.log('accessing route /, METHOD = get');
    resp.sendFile(path.join(__dirname, '/styles.css'));
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})