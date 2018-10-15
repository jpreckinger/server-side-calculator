const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

let calculations = require('./modules/calculations.js');
// this module was being used in base mode, no longer necessary in stretch
// let equationRunner = require('./modules/equationRunner.js');

app.get('/calculation', (req, res) =>{
    res.send(calculations);
});

app.post('/calculation', (req, res) => {
    let equation = req.body;
    answer = eval(equation.equation);
    calculations.unshift(equation);
    res.sendStatus(201);
})

app.get('/answer', (req, res) =>{
    console.log('app.get part 2, electric boogaloo', answer);
    res.send(answer.toString());
})



app.listen(PORT, () =>{
    console.log('listening on port', PORT);
});
