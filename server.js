const express = require('express');
const app = express();
const port = 8080;
const path = require('path')

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/hello', (req, res) => {
    res.sendFile(path.join(__dirname) + '/views/index.html')
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});