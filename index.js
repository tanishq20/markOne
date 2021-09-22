var readlineSync = require('readline-sync');
const chalk = require('chalk');


var userInput = readlineSync.question(chalk.yellow('May I have your name? '));
console.log(chalk.green("Hii " + userInput + " welcome to my quiz zone."));
console.log(chalk.cyan("Let's Check How Well You Know Me!!"));
console.log("----------------------------------------");

var score = 0;

function play(question, answer){
  var userAnswer = readlineSync.question(chalk.red(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green(" Yayy You are Right!! "));
    score++;
  }
  else{
    console.log(chalk.bgRedBright.white(" You are wrong! "));
    // console.log(chalk.green(" Correct answer is: "+answer + " "));
    score--;
  }

  console.log(chalk.white.bold.bgBlue(`\n Your Current Score is: ${score>0 ? score : score=0} `));
  console.log("--------------------------------");
}

var questionOne = {
  question: "Where do i live? ",
  answer: "Singrauli"
}
var questionTwo = {
  question: "What's my favourite hobby? ",
  answer: "Stock Marketing"
}
var questionThree = {
  question: "Which series have I seen in the latest? ",
  answer: "Aspirants"
}
var questionFour = {
  question: "In which month my birthday falls? ",
  answer: "December"
}
var questionFive = {
  question: "My favourite series till date? ",
  answer: "Money Heist"
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for(var i=0; i<questions.length; i++){
  play(questions[i].question, questions[i].answer);
}

console.log(chalk.red.bold.bgWhite(" YAY! You scored: "+chalk.green.bold(score) + " "));

var highestScore = [
  {
    name: 'Swapnil',
    score: 4
  },
  {
    name: 'Tarun',
    score: 4
  }
]

console.log("--------------------------------");

console.log("Leaderboard:");
for(var i=0; i<highestScore.length; i++){
  console.log(highestScore[i].name, highestScore[i].score);
}

console.log("--------------------------------");

console.log(("If your score is highest then ping me")+chalk.blue.bold(" @tanishq_kumar20 ")+("with score ss😉"));