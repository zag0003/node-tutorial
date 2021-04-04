//console.log('May Node be with you');

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const { DB_STRING } = require('./options');
const app = express();

MongoClient.connect(DB_STRING, {useUnifiedTopology: true}, (err, client) => {
    //something here...
    if (err) return console.error(err);
    console.log('Connected to Database');
    const db = client.db('star-wars');
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