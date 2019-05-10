const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = questionText => new Promise (resolve =>{
    rl.question(questionText, answer => resolve(answer))
});

const validOptions = ['rock','paper','scissors'];

function getRandomInt(max){
    return Math.floor(Math.random()*Math.floor(max));
}

const game = async() => {
    let choice = null;

    while(!validOptions.includes(choice)){
    const choice = await question(`Hi there, killer! Choose one of the following:
    _____________________
    Rock (Dwayne Johnson)
    Paper (just paper)
    Scissors (Les... nah, not gonna make that ref)
    _____________________
    
    Ignore the brackets tho
    
    `);
    
    choice = choice.toLowerCase();
    
    console.log(validOptions.includes(choice))
    
    const computerChoice = validOptions[getRandomInt(2)];

    if(choice == computerChoice){
        console.log("There was a tie");
    }else if(
        (choice == 'rock' && computerChoice =='scissors') ||
        (choice == 'scisors' && computerChoice =='paper') ||
        (choice == 'paper' && computerChoice =='rock')
    ){
        console.log('The player won!');
    }else {
        console.log('The AI won!')
    }

    console.log(`Player chose ${choice}, AI chose ${computerChoice}`);
}
};



game();

