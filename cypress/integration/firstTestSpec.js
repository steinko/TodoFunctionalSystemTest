describe('Test Login', function() {
  beforeEach('', ()=>{
   
     cy.visit('/')
   })
  it('Visits ToDdApp', function() {
    cy.get('input[type="text"]').should('have.value', 'in28minutes').as('username')
    cy.get('@username').clear().type('stein')
    cy.get('@username').should('have.value','stein')
    cy.get('input[type= "password"]').should('have.value', '').as('password')
    cy.get('@password').type('coolpassword')
    cy.get('@password').should('have.value','coolpassword')
    cy.get('button').click()
    cy.get('@username').should('have.value','stein')
    cy.get('@password').should('have.value','coolpassword')
  })

  it('should login sucessfully and dislay welcome page', ()=>{
      cy.get('input[type= "password"]').type('dummy')
      cy.get('button').click()
      cy.contains('Welcome')
   })


   

  it('should failure login' , ()=>{
      cy.get('input[type= "password"]').type('cool')
      cy.get('button').click()
      cy.contains('Invalid Credentials')
  })


})
describe("Welcome page", () => {
  it("should display welcome page", () => {  
       cy.visit('/welcome')
       cy.contains( 'Welcome')
  })
})



describe('Test Error', () => {
  beforeEach('', ()=>{
    cy.visit('/klmrl')
   })
  xit('Visits ToDdApp', () => {
      cy.contains("Unknown Path")
  })

})

describe('Login', () => { 
  it('should display login page', () => {   
       cy.visit('/')
       cy.contains( 'User Name')
  })
})
