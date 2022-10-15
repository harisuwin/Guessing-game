const agianBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
let highScoreEl = document.querySelector(".highscore");
let numberEl = document.querySelector(".number")
let secretNumber = Math.trunc(Math.random() * 6 +1);

let score = 20;
let highScore = 0;

checkBtn.addEventListener("click", function(){
  let guess = Number(document.querySelector(".guess").value);
  if(!guess || guess > 20){
    messageEl.textContent = "Not a Number or Number is above 20"
  }else if(guess === secretNumber){
    messageEl.textContent = "you win congrats"
    numberEl.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    if(score > highScore){
      highScore = score;
      highScoreEl.textContent = highScore;
    }

  }else if(guess !== secretNumber){
    if(score > 1){
      messageEl.textContent = guess > secretNumber? "too high" : "too low"
      score--;
      scoreEl.textContent = score;
    }else{
      messageEl.textContent = "you lost"
      scoreEl.textContent = 0;
    }
  }
})

agianBtn.addEventListener("click", function(){
  messageEl.textContent = "Start guessing...";
  score = 20;
  scoreEl.textContent = score;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".guess").value = "";
  secretNumber = Math.trunc(Math.random() * 6 +1);
  numberEl.textContent = "?";

})
