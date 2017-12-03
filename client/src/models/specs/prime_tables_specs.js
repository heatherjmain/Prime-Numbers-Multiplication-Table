var assert = require("assert")
var PrimeTable = require("../prime_tables.js")

describe("Prime Table", function() {
  var primeTable

  beforeEach(function() {
    primeTable = new PrimeTable()
  })

  it("should start as an empty array", function() {
    assert.strictEqual(0, primeTable.primes.length)
  })

  it("should be able to check a number to dentermine if prime when given prime number 2", function() {
    assert.strictEqual(true, primeTable.isPrime(2))
  })

  it("should be able to check a number to dentermine if prime when given prime number 13", function() {
    assert.strictEqual(true, primeTable.isPrime(13))
  })

  it("should be able to check a number to dentermine if prime when given prime number 113", function() {
    assert.strictEqual(true, primeTable.isPrime(113))
  })

  it("should be able to check a number to dentermine if prime when given a non prime number 25", function() {
    assert.strictEqual(false, primeTable.isPrime(25))
  })

  it("should be able to check a number to dentermine if prime when given a non prime number 100", function() {
    assert.strictEqual(false, primeTable.isPrime(100))
  })

  it("should be able to check a number to dentermine if prime when given a non prime number 333", function() {
    assert.strictEqual(false, primeTable.isPrime(333))
  })

  it("should be able to list n prime numbers in the primes array(n=3)", function() {
    primeTable.findPrimeNumbers(3)
    assert.strictEqual(4, primeTable.primes.length)
    assert.deepStrictEqual([1, 2, 3, 5], primeTable.primes)
  })

  it("should be able to list n prime numbers in the primes array(n=9)", function() {
    primeTable.findPrimeNumbers(9)
    assert.strictEqual(10, primeTable.primes.length)
    assert.deepStrictEqual([1, 2, 3, 5, 7, 11, 13, 17, 19, 23], primeTable.primes)
  })

  it("should return an array with 1 empty string if 0 passed in", function() {
    primeTable.findPrimeNumbers(0)
    assert.strictEqual(1, primeTable.primes.length)
    assert.deepStrictEqual([1], primeTable.primes)
  })

  it("should be able to make a grid of multiplied prime numbers", function() {
    assert.deepStrictEqual([['' ,2, 3, 5], [2, 4, 6, 10], [3, 6, 9, 15], [5, 10, 15, 25]], primeTable.makeGrid(3))
  })

  it("should be able to make a grid of multiplied prime numbers", function() {
    assert.deepStrictEqual([['' ,2, 3, 5, 7], [2, 4, 6, 10, 14], [3, 6, 9, 15, 21], [5, 10, 15, 25, 35], [7, 14, 21, 35, 49]], primeTable.makeGrid(4))
  })

})
