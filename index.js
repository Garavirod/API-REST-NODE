const express = require('express');
// Create server
const app = express();


// Routes Import
const routes = require('./routes/index');


// Path Root
app.get('/', (req, res) => {
    res.send('WELCOME API REST GARAVIROD');
});


app.use('/API', routes);


app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
    console.log('Example app listening on port ' + app.get('puerto'));
});