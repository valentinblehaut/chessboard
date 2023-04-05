// chess.js
const board = document.getElementById('board');
const squares = [];
const pieces = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜', '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'];
let selectedSquare = null;

// Initialize the board
for (let i = 0; i < 64; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.innerHTML = pieces[i];
  square.addEventListener('click', () => selectSquare(square));
  squares.push(square);
  board.appendChild(square);
  if ((i + Math.floor(i / 8)) % 2 === 0) {
    square.classList.add('white');
  } else {
    square.classList.add('black');
  }
}

// Function to handle square selection
function selectSquare(square) {
  if (selectedSquare) {
    // Move piece from selected square to current square
    square.innerHTML = selectedSquare.innerHTML;
    selectedSquare.innerHTML = '';
    selectedSquare.classList.remove('selected');
    selectedSquare = null;
  } else {
    // Select square
    square.classList.add('selected');
    selectedSquare = square;
  }
}
