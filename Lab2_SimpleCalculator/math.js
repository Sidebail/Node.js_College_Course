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
        default:
            return ' This is an invalid op'
    }
}

validOptions = ['add', '+','subtract','-', 'multiply', '*', 'divide', '/']

const handleHttpCalculation = (req,res) => {
    const query = req.query;

    if(isNaN(query.x) || isNaN(query.y)){
        return res.send('Both X and Y must be number!');
    }


    const method = query.method;

    if(!method || !validOptions.includes(method.toLowerCase())){
        return res.send(`Method must be included from following: ${
            validOptions.join(
                ', '
            )
        }`);
    }
    res.send(`${query.x} ${handleCalculation(method, Number(query.x), Number(query.y)).operator} ${query.y} = ${handleCalculation(method, Number(query.x), Number(query.y)).result}`);
};

module.exports = handleHttpCalculation; //Export our calculation fucntion