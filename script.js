"use strict";
//selecting elements
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".newgame");
const rollBtn = document.querySelector(".rolldice");
const holdBtn = document.querySelector(".holddice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");


let scores , currentScore,activePlayer,eventplay;


//Starting Conditions

const init = function(){
  scores = [0, 0];
  currentScore =0 ;
  activePlayer = 0;
  eventplay = true;


  score0.textContent = 0;
  score1.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;


  player0El.classList.remove("winner");
  player1El.classList.remove("winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();



const playerSwitch = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  //switching to other player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//Fuction of roll dice
rollBtn.addEventListener("click", function () {
  //console.log(eventplay)
  if (eventplay) {
    //1.Random Dice roll

    const dice = Math.trunc(Math.random() * 6) + 1;
    
    //2.Display the number
    diceEl.src = `dice-${dice}.png`;

    //3.Check for 1 or not
    if (dice != 1) {
      //add to current score

      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //resetting the score for current player =0
      playerSwitch();
    }
  }
});


//hold button case

holdBtn.addEventListener("click", function () {
    if(eventplay){

  //1.Add score to active player score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  scores[activePlayer];

  //2.condition for winning the game;score greater than 70

  if (scores[activePlayer] >= 30) {
    eventplay = false;
    document.querySelector(`.player--${activePlayer}`).classList.add("winner");
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
  } else {

    //Switching to next player

    playerSwitch();
  }
}
});

//Resetting the game
btnNew.addEventListener("click", init);