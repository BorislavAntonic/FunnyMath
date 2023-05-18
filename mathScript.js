const start = document.getElementById("start");
const game = document.getElementById("game");
const gameOver = document.getElementById("game-over");
const wrong = document.getElementById("wrong");
const correct = document.getElementById("correct");
const overTime = document.getElementById("overtime");
const time = document.getElementById("time");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const answer = document.getElementById("answer");
let level = 1;
let points = 0;
let score = 0;


function timer(x){ 
    time.innerHTML=`${x}`;
     if(x>0){timeout= setTimeout(() => { x--; timer(x); }, 1000)}
     
     else{
     overTime.style.display = "block";
     game.style.display = "none"
     clearTimeout(timeout);
     }   
}
function getArray(start,next,end){
    let array=[];
     for (let index = start ; index <=end; index+=next) 
     { array.push(index); }
    return array;
    }

function getNumber(someArray){
    let num = Math.floor(Math.random()*someArray.length) 
        return someArray[num]; 
     }
function setExpression(n1,n2,n3)
    { num1.innerHTML = n1;
      num2.innerHTML = n2; 
      num3.innerHTML = n3;
    }
    function startGame(){
      timer(60);
      setExpression(getNumber(getArray(1,1,9)),getNumber(getArray(10,5,99)),getNumber(getArray(100,25,999)));
      game.style.display = "block";
      start.style.display = "none"
      answer.focus();

    }
    function cancel(){
         answer.value = "";
    }
    function check(){
        clearTimeout(timeout)
        game.style.display = "none"
        let myAnswer = answer.value;
        let correctAnswer =
        parseInt(num1.innerHTML)*
        parseInt(num2. innerHTML)+
        parseInt(num3.innerHTML); 
        if(myAnswer==correctAnswer) { 
            correct.style.display="block";
            points+= parseInt(time.innerHTML)*5;
            score++;
       }
       else{ ; 
         wrong.style.display="block";
        document.getElementById("correct-answer").innerHTML = correctAnswer;}
       }

   function next(){
    wrong.style.display = "none";
    correct.style.display = "none";
    overTime.style.display = "none";
    if(level<10){
    level++;
    startGame();
    cancel();
}
else{
  document.getElementById("score").innerHTML = score;
  document.getElementById("points").innerHTML = points;
   gameOver.style.display="block";
}
   }
function playAgain(){
  gameOver.style.display = "none";
  points = 0;
  score = 0;
  level = 1;
  startGame();
}
