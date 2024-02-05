describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
  })

  it('navigates to the main page', () => {
    cy.url().should('eq', 'https://www.accesstravel.com/en-US/Home/Index')
  })


  it('verifies tabs on the main page', () => {
    cy.get('.hotels').should("be.visible")
    cy.get('.guides').should("be.visible")
    cy.get('.js-list-tours').should("be.visible")
    cy.get('.attraction-link').should("be.visible")

  })

  it('verifies text of the tabs of the page', () => {
    cy.get('.hotels').should("have.text", " Hotels")
    cy.get('.guides').should("contain", "Guides")
    cy.get('.js-list-tours').should("contain", "Tours")
    cy.get('.attraction-link').should("contain", "Things to do")

  })

  it('verifies clickability of the Hotel tab', () => {
    cy.get('.hotels').click()
    cy.get('[id="Filter_DestinationId"]').should("be.visible")
  })
  it('verifies clickability of Guides tab', () => {

    cy.get('.guides').click()
    cy.get('[id="Filter_DestinationId"]').should("be.visible")
  })

  it('verifies clickability of Tours tab', () => {
    cy.get('.js-list-tours').click()
    cy.get('[id="Filter_DestinationId"]').should("be.visible")
  })
  it('verifies clickability of Things to do', () => {
    cy.get('.attraction-link').click()
    cy.get('[id="itemsForms"]').should("be.visible")
  })

  it('verifies that buttons login functioning', () => {
    cy.get("#burger").click()
    cy.get('a').contains('Login').click({force: true})
    cy.url().should('eq', 'https://www.accesstravel.com/en-US/Account/Login')
  })

it('verifies that buttons signup functioning', () => { 
  cy.get("#burger").click()
  cy.get('a').contains('Signup').click({force: true})
  cy.url().should('eq', 'https://www.accesstravel.com/en-US/Account/Register')
})

})