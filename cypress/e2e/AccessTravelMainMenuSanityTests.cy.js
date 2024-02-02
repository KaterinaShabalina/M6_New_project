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

  it('verifies clickability of tabs of the main page', () => {
    cy.get('.hotels').click()
    cy.get('[id="Filter_DestinationId"]').should("be.visible")

    cy.get('.guides').click()
    cy.get('[id="Filter_DestinationId"]').should("be.visible")

    cy.get('.js-list-tours').click()
    cy.get('[id="Filter_DestinationId"]').should("be.visible")

    cy.get('.attraction-link').click()
    cy.get('[id="Filter_DestinationId"]').should("be.visible")
  })

  it('verifies that buttons login and signup functioning', () => {
  
//cy.get('.mobile-menu > :nth-child(3) > :nth-child(1)').should("be.visible")
//cy.get('.mobile-menu > :nth-child(3) > :nth-child(1)').should("have.text", "login")

//cy.get('.mobile-menu > :nth-child(3) > :nth-child(2)').should("be.visible")
//cy.get('.mobile-menu > :nth-child(3) > :nth-child(2)').should("have.text", "signup")

//cy.contains('login').should("be.visible")
//cy.get('[type="login"]').should("be.visible")

//cy.contains('signup').should("be.visible")

//cy.get(':nth-child(3) > :nth-child(1) > a').invoke('attr', 'aria-hidden').should('eq', 'true')

})

})