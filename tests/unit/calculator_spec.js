var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add 1 and 4 to get 5', function(){
    calculator.clearClick;
    calculator.numberClick(1);
    calculator.operatorClick("+")
    calculator.numberClick(4);
    calculator.operatorClick("=")
    assert.equal(5, calculator.previousTotal)
  })

  
});
