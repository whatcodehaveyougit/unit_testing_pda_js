const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('number buttons should update the display of the running total', function(){
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    running_total = element(by.css('#running_total'))
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })


  it('should update running total with total of previous calculation', function(){
      element(by.css('#number2')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_add')).click();
      running_total = element(by.css('#running_total'))
      expect(running_total.getAttribute('value')).to.eventually.equal('4')
    })

  it('should chain multiple operations together', function(){
      element(by.css('#number2')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_add')).click();
      running_total = element(by.css('#running_total'))
      expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })

    it('should concatanate multiple number clicks', function(){
      element(by.css('#number2')).click();
      element(by.css('#number2')).click();
      element(by.css('#number2')).click();
      running_total = element(by.css('#running_total'))
      expect(running_total.getAttribute('value')).to.eventually.equal('222')
    })


      it('should chain muliple operations together', function(){
        element(by.css('#number2')).click();
        element(by.css('#operator_add')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_add')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_add')).click();
        running_total = element(by.css('#running_total'))
        expect(running_total.getAttribute('value')).to.eventually.equal('6')
      })

      it('should give expected outcome when its positive',  function(){
        element(by.css('#number2')).click();
        element(by.css('#operator_add')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_add')).click();
        running_total = element(by.css('#running_total'))
        expect(running_total.getAttribute('value')).to.eventually.equal('4')
      })

      it('should give expected outcome when its negative',  function(){
        element(by.css('#number2')).click();
        element(by.css('#operator_subtract')).click();
        element(by.css('#number3')).click();
        element(by.css('#operator_equals')).click();
        running_total = element(by.css('#running_total'))
        expect(running_total.getAttribute('value')).to.eventually.equal('-1')
      })

      it('should give expected outcome when calculating decimals',  function(){
        element(by.css('#number2')).click();
        element(by.css('#operator_divide')).click();
        element(by.css('#number4')).click();
        element(by.css('#operator_equals')).click();
        running_total = element(by.css('#running_total'))
        expect(running_total.getAttribute('value')).to.eventually.equal('0.5')

      })


  it('should add very large numbers', function(){
      element(by.css('#number2')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number2')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_add')).click();
      running_total = element(by.css('#running_total'))
      expect(running_total.getAttribute('value')).to.eventually.equal('400000000')
  })

  it('should return error when divided a number by 0', function(){
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    running_total = element(by.css('#running_total'))
      expect(running_total.getAttribute('value')).to.eventually.equal('Error')
  })








});
