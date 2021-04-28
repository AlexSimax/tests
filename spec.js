const chai = require('chai')
const expect = chai.expect;

describe('Onliner homepage', () => {

  it('should be the same url', async function () {
    
    await browser.get('https://www.onliner.by/')
    const res = await browser.getCurrentUrl()
    expect(res).to.equal('https://www.onliner.by/')
  })
  
})



