       
        var defineFeature = require('jest-cucumber').defineFeature()
        var loadFeature = require('jest-cucumber').loadFeature()
        var webdriver = require("selenium-webdriver")
        var By = require("selenium-webdriver").By
        const feature = loadFeature('./cucumber/features/todo.feature')
        let driver

        defineFeature(feature, test => {
           test('Launching a SpaceX rocket', ({ given, when, then }) => {


             given('I am logged out', async function () {
               driver = await new webdriver.Builder()
                      .forBrowser('chrome')
                      .build()
               await driver.get('http://localhost:4200/')
             })
       
  
              when('I enter the password {string}', async function (string) {
                let password = await driver.findElement(By.name('password'))
                console.info(string)
                await password.sendKeys(string)
              })
       
   

             when('Click on Login button', async function () {
               let button = await driver.findElement(By.tagName('button'))
               await button.click()
             })
       
  

            then('I should sea Sucessfull Login message been displayd', async function () {
               let welcomeMessag = await driver.findElement(By.tagName('div'))
              expect(await welcomeMessag.getText()).toContain('Sucsessfull Loging')
            })
   })
})
   
