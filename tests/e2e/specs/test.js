describe('Page: Home', () => {
    it('Check showing Channel Manager by clicking the button', () => {
        cy.visit('/')
        cy.contains('button', 'Show channels')

        cy.get('button').click()
        cy.get('.channel-manager').should('be.visible')
    })

    it('Check Channels number (must be 5)', () => {
        cy.get('.channel-manager li').should('have.length', 5)
    })
})
