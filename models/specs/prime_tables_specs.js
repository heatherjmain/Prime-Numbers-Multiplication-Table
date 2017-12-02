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



})
