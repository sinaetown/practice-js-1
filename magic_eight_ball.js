let userName = '';
let userQuestion = 'Should I go there?';
let randomNumber = Math.floor(Math.random()*8);
let eightBall = '';

userName ? console.log(`Hello ${userName}!`):
console.log("Hello!");

userName? console.log(`${userName}\'s question is... : ${userQuestion}`):
console.log(`Your question is... : ${userQuestion}`);

switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Signs point to yes';
    break;
  case 4:
    eightBall = 'Cannot predict now';
    break;
  case 5:
    eightBall = 'Do not count on it';
    break;
  case 6:
    eightBall = 'My sources say no';
    break;
  case 7:
    eightBall = 'Outlook not so good';
    break;
  default:
    eightBall = "Error occured";
    break;
}

console.log(`The magic ball says... : ${eightBall}`);