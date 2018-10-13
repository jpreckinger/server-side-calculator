const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

let calculations = require('./modules/calculations.js');

app.get('/calculation', (req, res) =>{
    res.send(calculations);
});



app.listen(PORT, () =>{
    console.log('listening on port', PORT);
});
