var PrimeTable = function() {
  this.primes = []
  this.grid = []
}

// helper function to determine whether n is prime
PrimeTable.prototype.isPrime = function(n) {
  // Only need to check up to sqrt of n as if divisble by a number larger than sqrt then also divisible by a number smaller - small performance improvement
  // no need to include 1 or n - start at 2
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false
    }
  }
  // n=2 automatically returns true as i starts at 2 so is never less than n
  return true
}

// helper function to list n prime numbers
PrimeTable.prototype.findPrimeNumbers = function(n) {
  const startTime = Date.now()
  // 1 has to be pushed in as the 1st element as this is used to calculate multiplication when making the grid - if 0 or empty string used, then the first element in every row would be 0
  // 2 is always the firstprime number so pushed in
  if (n === 0) {
    return []
  }

  this.primes.push(1, 2)

  let i = 3

  // loop untill length of array = n+1
  while (this.primes.length < n + 1) {
    if (this.isPrime(i)) {
      this.primes.push(i)
    }
    // only odd numbers need to checked
    i+=2
  }
  // console.log("primes", this.primes)
  const endTime = Date.now()
  console.log('findPrimeNumbers took', endTime - startTime, 'ms')
  return this.primes
}



// helper function to create matrix
function matrix(args) {
    // primesMulitplication will contain array of arrays which makes up the whole grid
  let primesMultiplication = []
  primesMultiplication.push(args) //args is equal to this.rimes and makes the first row of the matrix

  // start at 1st element of primesArray as 0 element will not be used to make another row.
  for (let i = 1; i < args.length; i++) {
    // this creates an empty array for each row required for the matrix
    let multiply = []

    for (let j = 0; j < args.length; j++) {
      // takes each element(i) of args and multiplies by every element(j) of args pushing into the array reated above
      multiply.push(args[i] * args[j])
    }
    primesMultiplication.push(multiply)
  }
  // console.log("primesMultiplication", primesMultiplication);

  primesMultiplication[0][0] = "" // empty string as 1 is not a prime number and no longer needed
  return primesMultiplication
}

PrimeTable.prototype.makeGrid = function(n) {
  this.findPrimeNumbers(n)
  this.grid = matrix(this.primes) //this.grid is an array of arrays
  // console.log("grid", this.grid)
  return this.grid
}

module.exports = PrimeTable
