$(document).ready(function(){

    

});

$(".clickBttn").click(function(){
    //loop through an array of answers from switch statement
    //append answers to DOM box
    $(".answerBox").append("<p></p>");

});

let userName = 'Jane';
let userQuestion = 'What is my future?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';



userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

console.log(`The user asked: ${userQuestion}`);



switch (randomNumber) {
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
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good'
        break;
    case 7:
        eightBall = 'Signs point to yes'
        break;
    case 8:
        eightBall = 'Definitely Not';
        break;
    default:
        eightBall = 'You win the lottery!';
        break;
}

console.log(`The eight ball answered: ${eightBall}`);

