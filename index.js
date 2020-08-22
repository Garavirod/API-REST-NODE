const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


/**
 * Create the server instance
 */
const app = express();

/**
 * Connection with Mongo db
 */
const dbname = "resapis";
const uri = 'mongodb://localhost:27017/' + dbname;
const options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };
mongoose.connect(uri, options)
    .then(() => { console.log('Conectado a DB') }, err => { err });


/**
 * Enable body parser 
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/**
 * Importing API's routes
 */
const routes = require('./routes/index');


// Path Root
app.get('/', (req, res) => {
    res.send('WELCOME API REST GARAVIROD');
});


app.use('/api/v1.0/', routes);

/**
 * Settings port
 */
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
    console.log('Example app listening on port ' + app.get('puerto'));
});