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
    const quotesColl = db.collection('quotes');

    app.use(express.static('public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));
    app.set('view engine', 'ejs');

    app.listen(3000, function() {
        console.log('listening on port 3000');
    })

    app.get('/', (req, res) => {
        const cursor = db.collection('quotes').find().toArray()
            .then(results => {
                res.render('index.ejs', {quotes: results});
            })
            .catch(error => console.error(error))
        //res.sendFile(`${__dirname}/index.html`);
        
    })

    app.post('/quotes', (req, res) => {
        quotesColl.insertOne(req.body)
            .then(result => {
                res.redirect('/');
            })
            .catch(error => console.error(error));
    })

    app.put('/quotes', (req, res) => {
        console.log(req.body);
    })
})

