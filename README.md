Tic Tac Toe Game

Overview

This is a simple implementation of the classic Tic Tac Toe game, built using React , Java Script and CSS.

Features

- 3x3 grid for playing the game.
- Two player modes: X and O.
- Game reset and play again functionality.
- Display of winner and game status.
- Responsive design for desktop and mobile devices.

Components

- 1. Board.js: main game board component for rendering the squares and handling game logic.
- 2. GameDrawn.js: component for displaying the game drawn message.
- 3. PlayAgain.js: component for displaying the play again button.
- 4. ResetGame.js: component for displaying the reset game button.
- 5. Square.js: individual square component for rendering the game board.
- 6. Turn.js: component for displaying the current turn (X or O).
- 7. WinnerBoard.js: component for displaying the winner of the game.
- 8. Style.js: styles for the game board and components.

Hooks

- useState: used for managing the game state (squares, game won, winner, turn, game drawn).

Functions

- 1. checkWinner: checks if there is a winner based on the current game state.
- 2. CheckGameDrawn: checks if the game is drawn based on the current game state.
- 3. handleOnClick: handles the click event for each square.
- 4. playAgain: resets the game state and starts a new game.
- 5. resetGame: resets the game state to its initial state.

Style

- Style.js: styles for the game board and components.

How to Play

1. Clone the repository and run npm start to start the game.
2. Play the game by clicking on the squares to place your mark (X or O).
3. The game will automatically check for a winner or game drawn status.
4. Use the reset game button to start a new game.

