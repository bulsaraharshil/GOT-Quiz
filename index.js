var readLineSync = require("readline-sync")
const chalk = require('chalk');
var userName = readLineSync.question("What is your name? ")
console.log(chalk.yellow("Welcome"), userName, chalk.yellow("to DO YOU KNOW GOT!!!"))
console.log(chalk.cyan("If you don't know what GOT is, the please quit"))
var score = 0
var highScore = 0
function play(question, answer){
  var userAnswer = readLineSync.question(question)
  if(userAnswer == answer){
    console.log(chalk.green("You are right"))
    score++
  }else{
    console.log(chalk.red("You are wrong"))
    score--
  }
}

var questions = [
  questionOne = {
    question:"How did Daenerys Targaryen eventually hatch her dragon eggs? \n a)In a lightning storm \n b)In a funeral pyre \n c)In a fireplace \n d)In a frozen cave \n Your Answer:",
    answer:"b"
  },

  questionTwo = {
    question:"The phrase 'Valar Morghulis' or 'all men must die' is usually responded with: \n a)Valar Dohaeris or 'all men must serve' \n b)Valar Rohnas or 'all men must live' \n c)Valar GoGo or 'all men must dance'\n Your Answer:",
    answer:"a"
  },

  questionThree = {
    question:"American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise: \n a)Lord of the Rings \n b)Highlander \n c)The Chronicles of Narnia \n d)The Legend of Zelda \n Your Answer:",
    answer:"c"
  },

  questionFour = {
    question:"What is the only thing that can put out volatile Wildfire? \n a)Sand \n b)Water \n c)Dragon's blood \n d)Sunlight \n Your Answer:",
    answer:"a"
  },

  questionFive = {
    question:"Besides dragonglass, what is the only other substance capable of defeating White Walkers? \n a)Weirwood \n b)Wildfire \n c)Valyrian Steel \n d)Snowballs \n Your Answer:",
    answer:"c"
  }
]

for(i=0; i<questions.length; i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
  console.log("-----------")
}
// play(questionOne.question, questionOne.answer)
// play(questionTwo.question, questionTwo.answer)
// play(questionThree.question, questionThree.answer)
if(score> highScore){
  console.log(chalk.yellow("Congratulations!!! You have highest score, Please share your Screenshot"))
highScore = score
}
console.log(chalk.green("Your total score is:")+ score)

