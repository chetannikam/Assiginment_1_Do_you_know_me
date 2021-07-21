readLineSync=require("readline-sync");
chalk=require('chalk')
name=readLineSync.question("What is Your Name?")
console.log("")
console.log(chalk.yellow.bold("Welcome to the Game '------**DO YOU KNOW ME?**------' Mr."+name))
console.log("")
console.log(chalk.red.bold.underline("******************GAME RULES***********************"))
console.log()
console.log("I will ask You 5 question and Score will be Updated based on answers")
console.log("")
console.log("For correct answer Score will be updated by 1 and for wrong answer scores will not increment!!!")
console.log()
console.log("Okk...Lets start the game!!!!")
console.log("------------------------------------------------------")
score=0

function play(question,answer)
{
userans=readLineSync.question(question)
if (userans.toLowerCase()===answer)
{
console.log("Wow,You are right!")  
score+=1
}
else
{
  console.log("Wrong Answer!")

}
console.log("Your Score is:- "+chalk.yellow(score))
console.log("----------------------")
}
var questionOne={
  Question:"Am I older than 25?",
  Answer:"no"
}
var questionTwo={
  Question:"Am I From Sakri?",
  Answer:"yes"
}
var questionthree={
Question:'What is my favourite game?',
Answer:'cricket'
}
var questionFour={
Question:'In which city did I completed my Engineering?',
Answer:'pune'
}
var questionFive={
Question:'Whats my best drink?',
Answer:'tea'
}

function check_highscore(score,highscorearray)
{
  var flag=false;
  for(var i=0;i<highscorearray.length;i+=1)
  {
    if (score>=highscorearray[i].Score)
    {
      return true
    }
  }
  return false
}

var question=[questionOne,questionTwo,questionthree,questionFour,questionFive]
for(var i=0;i<question.length;i+=1)
{
  play(question[i].Question,question[i].Answer)
  console.log()
}
playerOne={
Name:"Shubham",
Score:"5"
}
playerTwo={
Name:"Ravi",
Score:"4"
}
playerThree={
Name:"Rushi",
Score:"4"
}



var highscorearray=[playerOne,playerTwo,playerThree]
console.log(chalk.cyan.underline(".............Thanks for playing the game!..........."))
console.log("")
console.log(chalk.yellow.bold.underline("Your Final Score is:-"+score))
console.log()
console.log(chalk.red.bold.underline("*****Checkout our Highest Scorers*********"))
console.log()
for(var i=0;i<highscorearray.length;i+=1)
{
  console.log("Name:-"+highscorearray[i].Name)
 
  console.log("Scores:-"+highscorearray[i].Score)
 console.log("--------------------------------------------")
}
var result=check_highscore(score,highscorearray)
if (result==true)
{
console.log(chalk.red("Congrats You are our next Highest Scorer!!!"))
console.log("")
console.log("Please send the screenshot of your score We will Update Your Name In above List....")
}
else
{
  console.log("If your score more than 3 then send the screenshot of the same we will update your score")
}
