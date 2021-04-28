describe('Channels', () => {
    it('"Show channels" button exists on the home page', () => {
        cy.visit('/')
        cy.contains('button', 'Show channels').click()
        cy.get('.channel-manager').should('be.visible')
    })

    it('Remove button decreases the channels', () => {
        cy.get('.channel-manager li').then(listing => {
            const listingCount = Cypress.$(listing).length

            // Remove one item
            cy.contains('button', 'Remove').click()

            cy.get('.channel-manager li').should('have.length', listingCount - 1)
        })
    })

    it('"Apply" button saves the state of the modified channels', () => {
        cy.get('.channel-manager li').then(listing => {
            const listingCount = Cypress.$(listing).length

            // Remove one item
            cy.contains('button', 'Remove').click()

            cy.contains('button', 'Apply').click()

            cy.contains('button', 'Show channels').click()

            cy.get('.channel-manager li').should('have.length', listingCount - 1)
        })
    })

    it('filter channels by typing in Add Channel input', () => {
        cy.visit('/')
        cy.contains('button', 'Show channels').click()

        // Filter by cal
        cy.get('input[name="add-channel"]').type("cal")
        cy.get('.channel-manager li').should('have.length', 2)

        // Filter by NewItem
        cy.get('input[name="add-channel"]').clear().type("NewItem")
        cy.get('.channel-manager li').should('have.length', 0)
    })

    it('filtering by none existing channel and then enter leads to new item', () => {
        cy.visit('/')
        cy.contains('button', 'Show channels').click()

        // Filter by NewItem
        cy.get('input[name="add-channel"]').type("NewItem").type("{enter}")
        cy.get('.channel-manager li').should('have.length', 6)
    })

    // Unhappy test
    it('typing Enter in empty filter box must be ignored', () => {
        cy.visit('/')
        cy.contains('button', 'Show channels').click()

        // Filter by NewItem
        cy.get('input[name="add-channel"]').type("{enter}")
        cy.get('.channel-manager li').should('have.length', 5)
    })
})
