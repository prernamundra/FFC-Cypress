describe('form tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/forms')
    })
    it('testing of forms', () => {
        cy.contains(/testing forms/i)
        cy.get('[data-test="submit"]').click().as('submit-input')
        cy.get('@submit-input').type('hello@gmail.com')
        cy.contains(/Successfully subbed: hello@gmail.com!/i).should('not.exist')
        cy.get('[data-test="submite-btn"]').click()
        cy.contains(/Successfully subbed: hello@gmail.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: hello@gmail.com!/i).should('not.exist')

        cy.get('@submit-input').type('ryan@coderyan.io')
        cy.contains(/invalid email: ryan@coderyan.io!/i).should('not.exist')
        cy.get('[data-test="submite-btn"]').click()
        cy.contains(/invalid email: ryan@coderyan.io!/i).should('exist')
        cy.wait(3000)
        cy.contains(/invalid email: ryan@coderyan.io!/i).should('not.exist')

        cy.contains(/fail!/i).should('not.exist')
        cy.get('[data-test="submite-btn"]').click()
        cy.contains(/fail!/i).should('exist')

        
    })
})