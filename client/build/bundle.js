/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var displayPrimeTable = __webpack_require__(1)

window.addEventListener("load", function() {
  var run = new displayPrimeTable()

  displayPrimeTable.prototype.render = function() {
    let button = document.getElementById("submit-button")

    button.addEventListener("click", function() {
      let userInputField = document.getElementById("user-input")
      let requestedNumber = parseInt(userInputField.value)
      // console.log("user input", requestedNumber)

      let table = run.makeGrid(requestedNumber)
      // console.log("table", table)
      for (let row of table) {
        let tableWrapper = document.getElementById("table-wrapper")
        let table = document.createElement("table")
        let tableRow = document.createElement("tr")

        for (element of row) {
          let number = document.createElement("td")
          let value = document.createTextNode(element)
          number.appendChild(value)
          tableRow.appendChild(number)
          table.appendChild(tableRow)
          tableWrapper.appendChild(table)
        }

      }
    })
  }
  run.render()
})


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var PrimeTable = function() {
  this.primes = []
  this.grid = []
}

// helper function to determine whether n is prime
PrimeTable.prototype.isPrime = function(n) {
  // divide n by each number smaller than n
  // no need to include 1 - start at 2
  // no need to include n
  let i

  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      // if divisible by any other number then not prime
      return false
    }
  }
  // n=2 automatically returns true as i starts at 2 so is never less than n
  return true
}


// helper function to list n prime numbers
PrimeTable.prototype.findPrimeNumbers = function(n) {
  // 1 has to be pushed in as the 1st element as this is used to calculate multiplication when making the grid - if 0 or empty string used, then the first element in every row would be 0
  this.primes.push(1)

  // 2 is the first prime number and should be the first number pushed into the array
  let i = 2

  // loop untill length of array = n+1
  while (this.primes.length < n + 1) {
    if (this.isPrime(i)) {
      this.primes.push(i)
    }
    i++
  }
  // console.log("primes", this.primes)
  return this.primes
}


// helper function to create matrix
// args used as length of array will vary each time
function matrix(args) {
  // create primesArray to hold this.primes info (passed in as args) as otherwise unable to access - this is a temporary array to be used to create grid
  let primesArray = []

  // loop through args(this.primes) and push each element into primesArray
  for (let i = 0; i < args.length; i++) {
    // loop through args, pushing each element into a temporary array
    primesArray.push(args[i])
  }

  // primesMulitplication will contain array of arrays which makes up the whole grid
  let primesMultiplication = []
  primesMultiplication.push(primesArray)

  // start at 1st element of primesArray as 0 element is empty string
  for (let i = 1; i < primesArray.length; i++) {
    // multiply array will collect the multiplied numbers for each row
    // this creates an array which will make up each row
    let multiply = []

    for (let j = 0; j < primesArray.length; j++) {
      multiply.push(primesArray[i] * primesArray[j])
    }
    primesMultiplication.push(multiply)
  }
  // console.log("primesMultiplication", primesMultiplication);
  return primesMultiplication
}

PrimeTable.prototype.makeGrid = function(n) {
  this.findPrimeNumbers(n)
  // grid attribute required in constructor
  // grid will be an array of arrays
  this.grid = matrix(this.primes)
  // console.log("grid", this.grid)
  return this.grid
}

// TEST
// var run = new PrimeTable
// run.makeGrid(3)


module.exports = PrimeTable


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map