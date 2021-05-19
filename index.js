var readlinesync=require('readline-sync')
const chalk=require('chalk')
console.log(chalk.blue("Namaste"))
var score=0;
var userName = readlinesync.question("what is your name ");
console.log("welcome "+ userName+ " to play who know's Ayaz well");

function play(question,answer)
{
var userAnswer=readlinesync.question(question)
  if(userAnswer === answer)
  {
    console.log("Sahi jawab")
    score=score+1;
  }
  else
  {
    console.log("Galat jawab")
    console.log("Answer was- "+answer+ " - better luck next time")
  }
  console.log("current score is "+score)
}
var questions=[{
  question:"where do Ayaz live ",
  answer:"kurnool"},
  {question: "what is Ayaz's fav color ",
  answer: "black"
}];
for(var i=0;i<questions.length;i++)
{
var currentQuestion=questions[i]
 play(currentQuestion.question,currentQuestion.answer)
 }