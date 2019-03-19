This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### For winning

I've left a console statement in there when new sequence is loaded to cheat the game. It shows the sequence in console so game can be reached to conclusion

### Problem statement

The task is to create a simple memory game in React, where the user is presented with 4 coloured squares (red, green, blue and orange). When the player presses the 'start game' button, the game generates a random sequence of 4 colours which will be displayed to the user by highlighting the corresponding colour squares in order, for a short time. When this finishes, the user will be asked to recreate this pattern by clicking on the coloured squares in the same order. If the sequence was repeated correctly, the game restarts but with 1 more coloured square added (to make 5). This cycle continues until the player either a) makes a mistake, or b) completes a sequence of 9 elements (and completes the game).
The same colour can be shown more than once in a sequence, but not twice in a row (e.g. [red, green, red] is permitted, but [red, red, green] is not). If the player makes a mistake, the game ends and displays a score (the length of the last completed sequence).
