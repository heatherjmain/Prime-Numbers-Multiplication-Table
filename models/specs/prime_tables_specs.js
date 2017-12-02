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


})
