const chai = require('chai')
const expect = chai.expect

describe('Onliner homepage and navigation', () => {
  it('should be the same text on main nav', async function () {
    await browser.get('https://www.onliner.by/')

    const input_button_nav = await element(
      by.xpath(
        '//*[@id="container"]//span[contains(text(), "Наушники и гарнитуры")]'
      )
    )
    const inputText = await input_button_nav.getText()
    expect(inputText).to.equal('Наушники и гарнитуры')
    console.log(`inputText is : ${inputText}`)
  })

  it('click on main nav', async function () {
    await browser.get('https://www.onliner.by/')

    const input_button_nav = await element(
      by.xpath(
        '//*[@id="container"]//span[contains(text(), "Наушники и гарнитуры")]'
      )
    )
    await input_button_nav.click()
  })

  it('should be the same text of authorization block', async function () {
    await browser.get('https://www.onliner.by/')

    const input_button = await element(
      by.xpath('//*[@id="userbar"]/div[2]/div/div/div[1]')
    )
    const inputText_enter = await input_button.getText()
    expect(inputText_enter).to.equal('Вход')
    console.log(`inputText_enter is : ${inputText_enter}`)
  })

  it('click on Registration', async function () {
    await browser.get('https://www.onliner.by/')

    const input_button = await element(
      by.xpath('//*[@id="userbar"]/div[2]/div/div/div[1]')
    )
    await input_button.click()
    await element(by.id('auth-container'))
    await element(by.linkText('Зарегистрироваться на Onliner')).click()
    await element(by.xpath("//input[@type='email']")).sendKeys(
      'abc@mail.ru'
    )
    await element(by.xpath("//input[@type='password']")).sendKeys('12345678abc')
    await element(
      by.xpath('//input[@placeholder="Повторите пароль"]')
    ).sendKeys('12345678abc')
    const buttonText = await element(by.xpath('//button')).getText()
    expect(buttonText).to.equal('Зарегистрироваться')

    await element(by.xpath('//button')).click()

    // await browser.sleep(3000)
  })
})
