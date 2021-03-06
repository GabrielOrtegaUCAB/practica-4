// Generated by Selenium IDE
require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('TC-0004', function() {
  jest.setTimeout(300000);
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('TC-0004', async function() {
    await driver.manage().window().maximize();
    await driver.get("https://buhocenter.herokuapp.com/home")
    await driver.wait(until.elementLocated(By.css(".hidden-sm-and-down .v-btn--text > .v-btn__content")), 30000)
    await driver.findElement(By.css(".hidden-sm-and-down .v-btn--text > .v-btn__content")).click()
    await driver.wait(until.elementLocated(By.xpath("//div[@id=\'inspire\']/div/div/main/div/main/div/div/div/div/form/div[3]/div/div/div/div/input")), 30000)
    await driver.findElement(By.xpath("//div[@id=\'inspire\']/div/div/main/div/main/div/div/div/div/form/div[3]/div/div/div/div/input")).click()
    await driver.findElement(By.xpath("//div[@id=\'inspire\']/div/div/main/div/main/div/div/div/div/form/div[3]/div/div/div/div/input")).sendKeys("admin@gmail.com")
    await driver.wait(until.elementLocated(By.xpath("//div[@id=\'inspire\']/div/div/main/div/main/div/div/div/div/form/div[4]/div/div/div/div/input")), 30000)
    await driver.findElement(By.xpath("//div[@id=\'inspire\']/div/div/main/div/main/div/div/div/div/form/div[4]/div/div/div/div/input")).click()
    await driver.findElement(By.xpath("//div[@id=\'inspire\']/div/div/main/div/main/div/div/div/div/form/div[4]/div/div/div/div/input")).sendKeys("123456")
    await driver.findElement(By.css(".login100-form-btn")).click()
    await driver.wait(until.elementLocated(By.css(".pr-4 .v-icon")), 30000)    
    await driver.manage().window().maximize();
    await driver.findElement(By.css(".pr-4 .v-icon")).click()
    {
      const elements = await driver.findElements(By.css(".cart-empty"))
      assert(!elements.length)
    }
    await driver.wait(until.elementLocated(By.css(".v-select__slot:nth-child(2) > .v-input__append-inner")), 30000)
    await driver.findElement(By.css(".v-select__slot:nth-child(2) > .v-input__append-inner")).click()
    await driver.findElement(By.xpath("//div[3]/div/div[3]/div/div")).click()
  })
})
