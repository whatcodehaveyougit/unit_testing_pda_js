var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
    calculator.clearClick;
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add 1 and 4 to get 5', function(){

    calculator.numberClick(1);
    calculator.operatorClick("+")
    calculator.numberClick(4);
    calculator.operatorClick("=")
    assert.equal(5, calculator.previousTotal)
  })

  it('should subtract 4 from 7 and get 3', function(){
    calculator.numberClick(7);
    calculator.operatorClick("-");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(3, calculator.previousTotal)
  })

  it('multiply 3 and 5 to ge 15', function(){
    calculator.numberClick(3);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(15, calculator.previousTotal)
  })

  it('divide 21 by 7 to get 3', function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick("/");
    calculator.numberClick(7);
    calculator.operatorClick("=");
    assert.equal(3, calculator.previousTotal)
  })
//
//   calculator.numberClick() - concatenate multiple number button clicks
// calculator.operatorClick() - chain multiple operations together


    it('should clear running total without affecting calculation', function(){
      calculator.numberClick(2);
      calculator.operatorClick("+");
      calculator.numberClick(2);
      calculator.operatorClick("+");
      calculator.numberClick(4);
      calculator.clearClick()
      calculator.operatorClick("=");
      assert.equal(4, calculator.previousTotal)
    })




});
