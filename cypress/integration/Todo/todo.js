       import  {Then} from 'cypress-cucumber-preprocessor/steps'
       import  {When} from 'cypress-cucumber-preprocessor/steps'
       import  {Given} from 'cypress-cucumber-preprocessor/steps'

        
      Given('I am logged out', function ()  {
          cy.visit('http://localhost:9000/')   
      })
       
       When('I enter the password "dummy"' ,  function (string) {
          cy.get("[type='password']").type('dummy')
       })
       
      When('Click on Login button', function () {
          cy.get('button').click()
      })
       
      Then('I should see a Welcome message been displayed', function () {
          cy.contains('Welcome')
      })

      Then('Click Get Welcome button', function() { 
          cy.get('button').contains('Get Welcome Message').click()
      })

     Then('I should see the Hello World message been displayed', function(){ 
         cy.contains('Hello World')
     })


   
