// Returns the Vuex store.
export const getStore = () => (cy.window() as any).its('__app__.$store')
