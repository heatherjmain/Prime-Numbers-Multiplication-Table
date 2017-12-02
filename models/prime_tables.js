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
  return true
}

module.exports = PrimeTable
