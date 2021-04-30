const chai = require('chai')
const expect = chai.expect;

describe('Onliner homepage and navigation', () => {

  it('should be the same text on main nav', async function () {
    
    await browser.get('https://www.onliner.by/')

    const input_button_nav = await element(by.xpath('//*[@id="container"]/div/div/div/div/div[1]/div/div[1]/ul[2]/li[2]/a/span/span'))
    const inputText = await input_button_nav.getText()
    expect(inputText).to.equal('Наушники и гарнитуры')
    console.log(`inputText is : ${inputText}`);
  })

  it('click on main nav', async function () {
    
    await browser.get('https://www.onliner.by/')

    const input_button_nav = await element(by.xpath('//*[@id="container"]/div/div/div/div/div[1]/div/div[1]/ul[2]/li[2]/a/span/span'))
    await input_button_nav.click()
    await browser.sleep(3000)
  })

  it('should be the same text of authorization block', async function () {
    
    await browser.get('https://www.onliner.by/')

    const input_button = await element(by.xpath('//*[@id="userbar"]/div[2]/div/div/div[1]'))
    const inputText_enter = await input_button.getText()
    expect(inputText_enter).to.equal('Вход')
    console.log(`inputText_enter is : ${inputText_enter}`);
  })

  it('click on authorization block', async function () {
    
    await browser.get('https://www.onliner.by/')

    const input_button = await element(by.xpath('//*[@id="userbar"]/div[2]/div/div/div[1]'))
    const inputText_enter = await input_button.click()
    await browser.sleep(3000)
  })
  
})


