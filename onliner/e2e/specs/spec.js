const chai = require('chai')
const expect = chai.expect;

describe('Onliner homepage', () => {

  it('should be the same url', async function () {
    
    await browser.get('https://www.onliner.by/')
    // const input_button = await element(by.css('div.auth-bar div.auth-bar__item--text')).click()
    // const inputText = input_button.getText()
    // expect(input_button.getText()).to.equal('Вход')
  })
  
})


