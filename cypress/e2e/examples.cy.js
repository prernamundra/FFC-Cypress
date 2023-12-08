describe('Various examples', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/examples')
    })
it('intercepts', () => {
    
    cy.intercept("POST", 'http://localhost:3000/examples', {
        fixture: 'example.json'
    })
    cy.get('[data-test="post-button"]').click()
})
})