describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:4200') // change URL to match your dev URL
      cy.contains('Increment').click();
      cy.contains('Decrement').click();
      cy.contains('Reset').click();
      
    })
  })