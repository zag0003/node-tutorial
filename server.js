//console.log('May Node be with you');

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

MongoClient.connect('connection-string', (err, client) => {
    //something here...
})

app.use(bodyParser.urlencoded({ extended: true}));



app.listen(3000, function() {
    console.log('listening on port 3000');
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

app.post('/quotes', (req, res) => {
    console.log(req.body);
})