/**
 * This is a Rock-Paper-Scissors game made by 
 * Vladimir Vatsurin
 * 200363172
*/
/**
 * The goal is to create a simple RockPaperScissors game
 * TODO:
 *  - Initialize Player and AI objects with stats
 *  - Initialize boolean checkers
 *      - isGameOver
 *  - Initialize array of the readable console commands
 *      - rock
 *      - paper
 *      - scissors
 *      - achievements
 *  - Make Reading
 *  - Check the input
 *      - Perform round act if input is correct
 *      - Give out the achievements progress and restart the round
 *  - If players lost 3 times in a row - end the game, give out the score
 *  - Show player a HighScore table and write him into it
 *  - Promt a player for a new game
 *   
*/


//Variable initializing
var Player = {
    score: 0,
    nickname: `Default`
}

var AI = {
    score: 0
}

const aiChoices = [`rock`,`paper`,`scissors`]

const maxFails = 2;
var currentFails = 0;

var highScoreTable = [[`Vlad`, 25],[`Ivan`, 15],[`Vasiliy`,5]];

var timeout = 3000;

function getRandomInt(max){
    return Math.floor(Math.random()*Math.floor(max));
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = questionText => new Promise (resolve =>{
    rl.question(questionText, answer => resolve(answer))
});

const newGame = async() =>{
    console.clear();
    Player.score = 0;
    AI.score = 0;
    const choice = await question(`
    |------------Welcome to the RPS Game: New Dawn!------------| 
    | You will be competing with AI in Rock-Paper-Scissors game|
    | Whenever you lose 3 times in a row, the game is over     |
    | Compete for highest score and unlock achievements!       |
    ------------------------------------------------------------
                            Game commands:                                 
                           rock - play rock                               
                          paper - play paper                              
                       scissors - play scissors                       
                   achievements - show your progress on achievements

    ->  Please, type in your nickname and then make a choice  <-
    `);

    Player.nickname = choice;
    console.log(`
    ->  ............Game will start in 3 seconds............  <-
   
    `);
    newRound();

    /**
     * var aiCurrentMove = aiChoices[getRandomInt(3)];
    console.log(aiCurrentMove);

    if (commands.includes(choice.toLowerCase())){
        if(choice == aiCurrentMove){
            console.log("There was a tie!");
            newRound();
        }else if(
            (choice == 'rock' && aiCurrentMove =='scissors') ||
            (choice == 'scisors' && aiCurrentMove =='paper') ||
            (choice == 'paper' && aiCurrentMove =='rock')
        ){
            console.log(`You have won!`)
            Player.score+=1;
            newRound();
        }else{
            console.log(`AI has won!`)
            AI.score+=1;
            newRound();
        }
    }
     */
    
}

const newRound= function(){
    setTimeout(function() {
    console.clear();
    const playARound = async() => {   
    const choice = await question(`
    |||||||||||||||||||| RPS: NEW DAWN||||||||||||||||||||||||
    ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                        ----------------
                        |Player: ${Player.score}     |
                        |    AI: ${AI.score}     |
                        ----------------
    ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    Go on! Choose rock, paper or scissors!
    `);

    roundEnd(choice);
    }
 playARound();
    },timeout);
}

newGame();

function roundEnd(choice){
    var aiCurrentMove = aiChoices[getRandomInt(3)];
  
    if (aiChoices.includes(choice.toLowerCase())){
        if(choice.toLowerCase() == aiCurrentMove){
            console.log(`

                    |Your ${choice.toLowerCase()} VS AI's ${aiCurrentMove}|

    You have a tie! Commencing new round in....3`)
                setTimeout(function(){
                    console.log(`
    TIE             Commencing new round in....2             TIE
                    `)

                },1000);
                setTimeout(function(){
                    console.log(`
    TIE             Commencing new round in....1             TIE
                    `)

                },2000);
            newRound();
        }else if(
            (choice.toLowerCase() == 'rock' && aiCurrentMove =='scissors') ||
            (choice.toLowerCase() == 'scisors' && aiCurrentMove =='paper') ||
            (choice.toLowerCase() == 'paper' && aiCurrentMove =='rock')
        ){
            console.log(`
            
                  |Your ${choice.toLowerCase()} VS AI's ${aiCurrentMove}|
                
    You have won! Commencing new round in....3`)
                setTimeout(function(){
                    console.log(`
    VICTORY       Commencing new round in....2         VICTORY
                    `)

                },1000);
                setTimeout(function(){
                    console.log(`
    VICTORY       Commencing new round in....1         VICTORY
                    `)

                },2000);
            Player.score+=1;
            currentFails = 0;
            newRound();
        }else{
            if(currentFails==maxFails){
                isGameOver = true;
                highScoreTable.push([Player.nickname, Player.score]);
                highScoreTable.sort(sortFunction);
                highScoreTable.reverse();
                
                console.log(`
                GAME OVER-GAME OVER-GAME OVER-GAME OVER
                       YOUR SCORE IS --------- ${Player.score}
                            HIGHSCORE TABLE:

                `);
                
                for (i = 0; i<highScoreTable.length;i++){
                    console.log(`
                            ${i+1}) ${highScoreTable[i][1]} -- ${highScoreTable[i][0]}
                    `);
                }

                console.log(`
                Game will be restarted in 10 seconds. 
                Try to do better!
                `);

                setTimeout(function(){
                    newGame();
                },10000)
                
            }else{

            console.log(`
            
                  |Your ${choice.toLowerCase()} VS AI's ${aiCurrentMove}|
                
    AI have won!  Commencing new round in....3`)
                setTimeout(function(){
                    console.log(`
    TRY AGAIN     Commencing new round in....2     TRY AGAIN
                    `)

                },timeout/3);
                setTimeout(function(){
                    console.log(`
    TRY AGAIN     Commencing new round in....1     TRY AGAIN
                    `)

                },timeout/3*2);
            AI.score+=1;
            currentFails+=1;
            

            newRound();
            }  
        }
    }else if(choice==`achievements`){
        showAchievements();
    }else{
        console.log(`
    INVALID COMMAND! Use rock,paper,scissors or achievements
            ||||||||||||||||||||||||
            |${timeout/1000 * 2} seconds till re-play|    
            `);
        setTimeout(function(){
            newRound();

        },timeout*2);
    }
}

function showAchievements(){
    setTimeout(function(){
        console.log(`
    INVALID COMMAND! Use rock,paper,scissors or achievements
            ||||||||||||||||||||||||
            |${timeout/1000 * 2} seconds till re-play|    
            `);
    },timeout*2)
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
function sortFunction(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}
//SERVER START-UP!
/**
 * var http = require('http');
http.createServer(function(req, res) {
   res.writeHead(200, {
   'Content-Type': 'text/plain'
   });
   res.end('Hello World');

   newGame();
}).listen(3000);
console.log('Server running at http://localhost:3000/');
 */

