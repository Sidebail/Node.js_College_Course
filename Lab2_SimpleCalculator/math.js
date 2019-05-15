/**
 * This metgod handles the calculation.
 * Using the switch it takes the method string parameter, which was given 
 * in URL and determines the right method to execute
 * 
 * It can get either string or symbol, like "add" and "+"
 * 
 * In return it outputs the object, which has result number value and 
 * operator string value.
 * 
 * UNIQUE ADDED - power, modulus
 * @param {string} method 
 * @param {number} x 
 * @param {number} y 
 */
const handleCalculation = (method, x, y)=>{
    switch (method.toLowerCase()){
        case 'add':
        case '+': 
            return {result: x + y, operator: '+'}
        case 'subtract':
        case '-':
            return {result: x - y, operator: '-'}
        case 'multiply':
        case '*':
            return {result: x * y, operator: '*'}
        case 'divide':
        case '/':
            return {result: x / y, operator: '/'}
        case 'modulus':
        case '%':
            return{result: x % y, operator: '%'}
        case 'power':
        case '^':
            return{result: Math.pow(x,y), operator: '^'}
        default:
            return 'This is an invalid op, please try again with valid input!'
    }
}

//Declaring all possible methods
validOptions = ['add', '+','subtract','-', 'multiply', '*', 'divide', '/','modulus','%', 'power', '^']

/**
 * This method gets triggered whenever URL is passed and called through server.js
 * Method handles the input validation and output
 * 
 * @param {request} req 
 * @param {responce} res 
 */
const handleHttpCalculation = (req,res) => {
    const query = req.query;

    //Check if x and y are valid numbers
    if(isNaN(query.x) || isNaN(query.y)){
        return res.send('Both X and Y must be number!');
    }


    const method = query.method;

    //Check if method is valid string and list of valid options has it
    if(!method || !validOptions.includes(method.toLowerCase())){
        return res.send(`Method must be included from following: ${
            validOptions.join(
                ', '
            )
        }`);
    }

    //output the operands, operator and result
    res.send(`${query.x} ${handleCalculation(method, Number(query.x), Number(query.y)).operator} ${query.y} = ${handleCalculation(method, Number(query.x), Number(query.y)).result}`);
};

module.exports = handleHttpCalculation; //Export our calculation fucntion