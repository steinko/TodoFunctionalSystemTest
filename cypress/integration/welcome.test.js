beforeEach('', () => { 
    cy.visit('/')
      cy.get('input[type= "password"]').type('dummy')
      cy.get('button').click()
      cy.contains('Welcome')

})

it('should diplay a hello world message on welcome page', ()=>{
     
      cy.get('#helloWorldButton').click()
      cy.contains('Hello World')
   })

   it('should diplay a hello world bean message on welcome page', ()=>{
     
      cy.get('#helloWorldBeanButton').click()
      cy.contains('Hello World Bean')
   })

   it('should diplay a hello world message witn name on welcome page', ()=>{
     
      cy.get('#helloWorldNameButton').click()
      cy.contains('Hello World in28minutes')
   })