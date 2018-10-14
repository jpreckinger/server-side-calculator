const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

let calculations = require('./modules/calculations.js');
let equationRunner = require('./modules/equationRunner.js');
let answer;

app.get('/calculation', (req, res) =>{
    console.log('in app.get')
    res.send(calculations);
});

app.post('/calculation', (req, res) => {
    let calcBody = req.body;
    console.log('calcBody is ', calcBody);
    answer = equationRunner(calcBody);
    console.log(answer);
    calculations.unshift(calcBody);
    res.sendStatus(201);
})

app.get('/answer', (req, res) =>{
    console.log('app.get part 2, electric boogaloo', answer);
    res.send(answer.toString());
})



app.listen(PORT, () =>{
    console.log('listening on port', PORT);
});
