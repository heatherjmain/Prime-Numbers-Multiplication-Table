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
