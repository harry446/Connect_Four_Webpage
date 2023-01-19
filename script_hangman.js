
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

let options = {
  fruits: ["hi", "hello"],
  animals: ["Hi", "Hello"],
  countries: ["HI", "HELLO"],

}

let winCount = 0;
let count = 0;
let chosenWord = "";

const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Please Select an Option</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};

//generate words
const generateWord = (optionValue) => {
  let optionsButtons = document.quaerySelectorAll(".options");

  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });
}

//initialize
const initializer = () => {
  winCount = 0;
  count = 0;
  displayOptions();
};

//new game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;

