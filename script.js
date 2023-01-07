const X_CLASS = "x";
const O_CLASS = "o";
const WINNING_STATES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winningMsgElement = document.getElementById("winningMessage");
const winningMsgText = document.querySelector("[data-winning-message-text]");
const restartButton = document.getElementById("restartButton");

let oTurn;

//start-up
startUp();

function startUp() {
  cellElements.forEach(cell => {
    //reset board
    oTurn = false;
    cell.classList.remove(X_CLASS);
    cell.classList.remove(O_CLASS);
    cell.removeEventListener("click", onClick);

    cell.addEventListener("click", onClick, {once: true})
  });
  setBoardClass();

  winningMsgElement.classList.remove("show");
}

//restart
restartButton.addEventListener("click", startUp);



function onClick(e) {
  const cell = e.target;
  const curClass = oTurn ? O_CLASS : X_CLASS;

  //place piece
  placePiece(cell, curClass);

  //check for win
  if (winBoard(curClass)) {
    endGame(false);
    return;
  }

  //check for draw
  if (isDraw()) {
    endGame(true);
    return;
  }

  //switch turns
  oTurn = !oTurn;
  setBoardClass();
}

function placePiece(cell, curClass) {
  cell.classList.add(curClass);
  curClass = "hi";
}

function setBoardClass() {
  if (oTurn) {
    board.classList.remove(X_CLASS);
    board.classList.add(O_CLASS);
    return;
  }
  board.classList.remove(O_CLASS);
  board.classList.add(X_CLASS);
}

function winBoard(curClass) {
  return WINNING_STATES.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(curClass);
    });
  });
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
  });
}

function endGame(draw) {
  if (draw) {
    winningMsgText.innerText = "Draw!";
  }
  else {
    winningMsgText.innerText = oTurn ? "O's Wins!" : "X's Wins!";
  }
  winningMsgElement.classList.add("show");
}