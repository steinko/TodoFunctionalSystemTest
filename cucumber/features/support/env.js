 var chrome = require("selenium-webdriver/chrome")
 var chromeDriverPath = require("chromedriver").path

 chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriverPath).build())

 function Init() {
     this.driver = new chrome.Driver()
  }
module.export =  function()  {  
   this.World = Init
 }
