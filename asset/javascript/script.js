const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");
let gamePlaye = false;
let score = 0;
button.addEventListener("click", function () {
  if (!gamePlaye) {
    gamePlaye = true;
    gameArea.innerHTML = "";
    let score = 0;
    maker(5);
    button.innerHTML = "Check Combo";
    message.innerHTML = "Guess The Combo";
  } else {
    const numbers = document.querySelectorAll(".numb");
    score++;
    message.innerHTML = "Guesses:" + " " + score;
    let winCoundition = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].correct) {
        numbers[i].style.backgroundColor = "#388E3C";
        numbers[i].style.color = "white";
        winCoundition++;
      } else {
        let color =
          numbers[i].value < numbers[i].correct ? "#1A237E" : "#D32F2F";
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = "black";
      }
      if (winCoundition == numbers.length) {
        gameEnd();
      }
    }
  }
});
function gameEnd() {
  message.innerHTML =
    "You Solved The Combo in:" + " " + score + " " + "Guesses";
  gamePlaye = false;
  button.innerHTML = "Restart Game";
}
function maker(num) {
  for (let x = 0; x < num; x++) {
    let el = document.createElement("input");
    el.setAttribute("type", "number");
    el.max = 9;
    el.min = 0;
    el.size = 1;
    el.style.background = "#BDBDBD";
    el.style.width = "40px";
    el.classList.add("numb");
    el.correct = Math.floor(Math.random() * 10);
    el.value = 0;
    el.order = x;
    gameArea.appendChild(el);
  }
}
