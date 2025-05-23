// code.js
const board = document.getElementById("board");
const message = document.getElementById("message");
const resetBtn = document.getElementById("resetBtn");

let squares = [];
let currentPlayer = "X";
let boardState = Array(9).fill(null);
let gameActive = true;

function createBoard() {
  for (let i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("click", () => handleSquareClick(i));
    board.appendChild(square);
    squares.push(square);
  }
}

function handleSquareClick(index) {
  if (!gameActive || boardState[index]) return;

  boardState[index] = currentPlayer;
  squares[index].textContent = currentPlayer;
  squares[index].classList.add("active");

  if (checkWin()) {
    message.textContent = `${currentPlayer} wins! 🔥🔥🔥`;
    gameActive = false;
    highlightWinningSquares();
    return;
  }

  if (boardState.every((cell) => cell !== null)) {
    message.textContent = "It's a draw... try again? 😉";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  message.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
  const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // cols
    [0,4,8], [2,4,6]           // diagonals
  ];

  for (const combo of winningCombos) {
    const [a,b,c] = combo;
    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      winningSquares = combo;
      return true;
    }
  }
  return false;
}

let winningSquares = [];

function highlightWinningSquares() {
  winningSquares.forEach(i => {
    squares[i].style.background = "#ff4136";
    squares[i].classList.add("active");
  });
}

resetBtn.addEventListener("click", resetGame);

function resetGame() {
  boardState = Array(9).fill(null);
  gameActive = true;
  currentPlayer = "X";
  message.textContent = `Player ${currentPlayer}'s turn`;
  squares.forEach(sq => {
    sq.textContent = "";
    sq.style.background = "#111";
    sq.classList.remove("active");
  });
}

createBoard();
message.textContent = `Player ${currentPlayer}'s turn`;
let wildcardUsed = { X: false, O: false };

function handleSquareClick(index) {
  if (!gameActive) return;

  // If square empty, normal move
  if (!boardState[index]) {
    makeMove(index);
  } else if (
    boardState[index] !== currentPlayer &&
    !wildcardUsed[currentPlayer]
  ) {
    // Wildcard overwrite
    if (confirm(`Use your seductive power move to overwrite opponent's square?`)) {
      wildcardUsed[currentPlayer] = true;
      makeMove(index);
    }
  }
}

function makeMove(index) {
  boardState[index] = currentPlayer;
  squares[index].textContent = currentPlayer;
  squares[index].classList.add("active");

  if (checkWin()) {
    message.textContent = `${currentPlayer} wins! 🔥🔥🔥`;
    gameActive = false;
    highlightWinningSquares();
    return;
  }

  if (boardState.every((cell) => cell !== null)) {
    message.textContent = "It's a draw... try again? 😉";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  message.textContent = `Player ${currentPlayer}'s turn`;
}
