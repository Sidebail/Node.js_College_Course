/**
 * Lab 2 - Simple Calculator
 * Vladimir Vatsuirn
 * 200363172
 */

const express = require('express'); //require is express
const app = express(); //init express
const PORT = 3000; //port out application wil run on
const handleHttpCalculation = require('./math');

/**
 * Here we are getting the information from the URL and passing it to handler method
 */
app.get('/', handleHttpCalculation);
app.listen(PORT);
console.log(`Your application is running on https://localhost:${PORT}`);
