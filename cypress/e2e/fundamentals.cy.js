describe('Fundamental test', () => {
  beforeEach(()=>{
    cy.visit('/fundamentals')
  })
  it('hello1', () => {
    // cy.get('[data-test="fundamentals-header"]').contains(/fundamentals/i)
    cy.getDataTest('fundamentals-header').contains(/fundamentals/i)
    // cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')
  })
  it('hello2', () => {
    
    cy.contains(/Your tests will exist in a describe block. This block takes two arguments./i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block. This block takes two arguments./i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block. This block takes two arguments./i).should('not.be.visible')
})
})