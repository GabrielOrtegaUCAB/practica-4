require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');


describe('TC-0001', function() {
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
    it('AGREGAR AL CARRITO SIN INICIAR SESIÓN', async function() {
        await driver.manage().window().maximize();
        await driver.get("https://buhocenter.herokuapp.com/home")
        await driver.wait(until.elementLocated(By.css(".fa-tv")), 30000)
        await driver.findElement(By.css(".fa-tv")).click()
        await driver.wait(until.elementLocated(By.css(".col-sm-6:nth-child(1) .v-list-item__title")), 30000)
        await driver.findElement(By.css(".col-sm-6:nth-child(1) .v-list-item__title")).click()
        await driver.wait(until.elementLocated(By.css(".mb-4:nth-child(1) .pl-0:nth-child(3) > .row")), 30000)
        await driver.findElement(By.css(".mb-4:nth-child(1) .pl-0:nth-child(3) > .row")).click()
        await driver.wait(until.elementLocated(By.css(".v-select__slot:nth-child(2) > .v-select__selections")), 30000)
        await driver.findElement(By.css(".v-select__slot:nth-child(2) > .v-select__selections")).click()
        await driver.wait(until.elementLocated(By.css(".v-list-item.v-list-item--link.theme--light:nth-child(1) > .v-list-item__content")), 30000)
        await driver.findElement(By.css(".v-list-item.v-list-item--link.theme--light:nth-child(1) > .v-list-item__content")).click()
        await driver.wait(until.elementLocated(By.css(".overline .v-btn__content")), 30000)
        await driver.findElement(By.css(".overline .v-btn__content")).click()
    })
})