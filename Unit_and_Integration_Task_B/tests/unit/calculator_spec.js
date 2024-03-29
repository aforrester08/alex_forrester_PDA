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

  it('should add two numbers', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal)
  })

  it('should subtract two numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal)
  })

  it('should multiply two numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal)
  })

  it('should divide two numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal)
  })

  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick(5);
    calculator.numberClick(7);
    assert.equal(57, calculator.runningTotal)
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('=')

    assert.equal(9, calculator.runningTotal)
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
    assert.equal(9, calculator.previousTotal);
  })
});
