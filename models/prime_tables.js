var PrimeTable = function() {
  this.primes = []
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
  // as empty space is required in this.primes[0]
  this.primes.push("")

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

module.exports = PrimeTable
