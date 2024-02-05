describe('template spec', () => {

  const destination_list = '[name="Filter.DestinationId"]'
  const number_of_kids = '[name="Filter.ChildrenNum"]'
  const number_of_adults = '[name="Filter.AdultNum"]'
  const checkin = '[name="Filter.CheckIn"]'
  const checkout = '[name="Filter.CheckOut"]'


  beforeEach(() => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
  })

  it('navigates to the hotel page', () => {
    cy.url().should('eq', 'https://www.accesstravel.com/en-US/Hotel/List')
  })

  it('search travel destination to Jerusalim', () => {
    cy.get(destination_list).should('be.visible')
    cy.get(destination_list).select('Jerusalem')
    cy.get('button').contains('Search').click()
    cy.contains('Jerusalem').should('be.visible')

  })
  it('search travel destination to London', () => {
    cy.get(destination_list).should('be.visible')
    cy.get(destination_list).select('London')
    cy.get('button').contains('Search').click()
    cy.contains('London').should('be.visible')
  })
  it('search travel destination to New York', () => {
    cy.get(destination_list).should('be.visible')
    cy.get(destination_list).select('New York')
    cy.get('button').contains('Search').click()
    cy.contains('New York').should('be.visible')
  })

  it('choses number of kids from the drop list', () => {
    cy.get(destination_list).select('Jerusalem')
    cy.get(number_of_kids).should('be.visible')
    cy.get('#Filter_ChildrenNum').clear().type('1').blur().invoke('val').should('eq', '1')
    cy.get('input[id="Filter_ChildrensAge[0]"]').should('be.visible')
    cy.get('button').contains('Search').click()
    cy.contains('Jerusalem').should('be.visible')
  })

  it('proves that invalid date will triger error message', () => {
    cy.get(destination_list).select('Jerusalem')
    cy.get(checkin).clear()
    cy.get (checkin).type("20250808").invoke("val").should('eq', '20250808')
    cy.get(checkout).clear()
    cy.get (checkout).type("20240808").invoke("val").should('eq', '20240808')
    cy.get('button').contains('Search').click()
    cy.get('.field-validation-error').contains('20250808').should('be.visible')
  })

  it('proves that invalid number of adults will triger error message', () => {
    cy.get(destination_list).select('Jerusalem')
    cy.get(number_of_adults).should('be.visible')
    cy.get(number_of_adults).clear().type('-7').should('have.value', '-7')
    cy.get('button').contains('Search').click()
    cy.get('.field-validation-error').contains('Invalid value').should('be.visible')

  })

  it('proves that invalid number of children will triger error message', () => {
    cy.get(destination_list).select('Jerusalem')
  cy.get(number_of_kids).should('be.visible')
  cy.get(number_of_kids).clear().type('-15').should('have.value', '-15')
  cy.get('button').contains('Search').click()
  cy.get('.field-validation-error').contains('Invalid number').should('be.visible')

  })

})