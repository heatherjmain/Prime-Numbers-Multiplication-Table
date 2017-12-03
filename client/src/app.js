var displayPrimeTable = require("./models/prime_tables.js")

window.addEventListener("load", function() {
  var run = new displayPrimeTable()

  displayPrimeTable.prototype.render = function() {
    var button = document.getElementById("submit-button")

    button.addEventListener("click", function() {
      var userInputField = document.getElementById("user-input")
      var requestedNumber = parseInt(userInputField.value)
      // console.log("user input", requestedNumber)

      var getTable = run.makeGrid(requestedNumber)
      console.log("table", getTable)
    })
  }
  run.render()
})
