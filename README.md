# Prime Numbers Multiplication Table

A simple program which takes in a whole number, greater than 0, and returns a multiplication table showing n prime numbers on the x and y axis.  The application is written in vanilla javascript and tested using mocha.


Please clone repo - https://github.com/heatherrae150/Prime-Numbers-Multiplication-Table/tree/master
and run "npm install" in the terminal.

To run unit tests - please enter "npm run test" in the terminal

To run the program in the browser - please enter "npm run start" in the terminal to start the server, and then navigate to https://localhost:3000 in the browser

To use the program in the browser, please enter a number where prompted and click "SUBMIT".
To reset the program and enter a new value, please click "RESET".

(If you need to make any changes to the code, please run "npm run build" in the terminal to start webpack.  This will ensure bundle.js is updated and changes will show in the browser)


I am pleased I have been able to successfully implement the makeGrid function to output the desired response.  I have tried to keep the solution simple and have implemented 4 small functions, so each function has little responsibility.  I have used TDD to test the logic and have 12 passing tests.  I am also pleased with the output in the browser.

Given more time, I would aim to refactor the render function out the the app.js file and into a dedicated views file.  I would also add functionality to the submit button which would remove the need to refresh the page between user inputs.
