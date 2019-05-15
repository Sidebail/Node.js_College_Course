const express = require('express'); //require is express
const app = express(); //init express
const PORT = 3000; //port out application wil run on
const handleHttpCalculation = require('./math');

app.get('/', handleHttpCalculation);
app.listen(PORT);
console.log(`Your application is running on https://localhost:${PORT}`);