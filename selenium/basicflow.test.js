var webdriver = require("selenium-webdriver");
var By = require("selenium-webdriver").By
const config = require('dotenv').config()

describe('Tests' , () => { 
    let driver
    let url
     
    beforeAll( async () => { 

       driver = await new webdriver.Builder()
                      .forBrowser('chrome')
                      .build();
    })
  
    beforeEach(async () => { 
          url = await process.env.FRONTEND_URL  
          await driver.get(url)
    },100000)
    

  it('Visits ToDdApp', async () => {
      let username = await driver.findElement(By.name('username'))
     expect(await username.getAttribute('value')).toEqual('in28minutes')
     await username.clear()
     await username.sendKeys('stein')
     expect(await username.getAttribute('value')).toEqual('stein')
     let password = await driver.findElement(By.name('password'))
     await password.sendKeys('coolpassword')
     expect(await password.getAttribute('value')).toEqual('coolpassword')
     let button = await driver.findElement(By.tagName('button'))
     await button.click()
     expect(await username.getAttribute('value')).toEqual('stein')
     expect(await password.getAttribute('value')).toEqual('coolpassword')
  },100000)

  it('should login sucessfully and dislay welcome page', async () =>{
      let password = await driver.findElement(By.name('password'))
      await password.sendKeys('dummy')
      await password.click()
     let welcomeMessag = await driver.findElement(By.tagName('div'))
       expect(await welcomeMessag.getText()).toContain('Sucsessfull Loging')
      
   },10000)

  it('should failure login' ,async  ()=>{
      let password = await driver.findElement(By.name('password'))
      await password.sendKeys('cool')
      let button = await driver.findElement(By.tagName('button'))
      await button.click()
      let logingPage = await driver.findElement(By.tagName('div')).findElement(By.tagName('div'))
      expect(await logingPage.getText()).toContain('Invalid Credentials')
  },100000)


  it("should display welcome page", async () => {  
     
       await driver.get(url+'/welcome')
       let welcomeMessag = await driver.findElement(By.tagName('div'))
       expect(await welcomeMessag.getText()).toContain('Welcome')
  },100000)


  xit('Visits ToDdApp', async () => {
        await driver.get( url + '/klmre')
  let message = await  driver.findElement(By.tagName('div'))
      expect(message.getText()).toEqual("Unknown Path")
  })


 
  it('should display login page', async  () => { 
      await driver.get(url)  
      let message = await driver.findElement(By.tagName('div'))
      expect(await message.getText()).toContain("User Name")
  },100000)

  afterAll(async () => {
    await driver.quit()
  })

})

