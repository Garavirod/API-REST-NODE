const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// MongoDB 
const dbname = "resapis";
const uri = 'mongodb://localhost:27017/' + dbname;
const options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };
mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
    () => { console.log('Conectado a DB') },
    /** handle initial connection error */
    err => { err }
);

// Create server
const app = express();

// Enable body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Import routes 
const routes = require('./routes/index');


// Path Root
app.get('/', (req, res) => {
    res.send('WELCOME API REST GARAVIROD');
});


app.use('/api/v1.0/', routes);


app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
    console.log('Example app listening on port ' + app.get('puerto'));
});