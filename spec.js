const chai = require('chai')
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Onliner homepage', () => {
  // let name = 'Вход'
  it('should be the same url', async function () {
    
    await browser.get('https://www.onliner.by/')
    console.log(25757686868686868756);
    const res = await browser.getCurrentUrl()
    console.log(21);
    console.log(res);
    expect(res).to.equal('https://www.onliner.by/')
  })
  
})













// console.log(browser.getCurrentUrl())














 // const elemText = element(by.xpath('//*[@id="container"]/div/div/div/div/div[1]/div/div[1]/ul[2]/li[6]/a/span/span'))

    // await expect(elemText.getText()).to.equal('Вход')
    // done()
//*[@id="container"]/div/div/div/div/div[1]/div/div[1]/ul[2]/li[6]/a/span/span