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

  it('choses travel destination from the drop list', () => {
    cy.get(destination_list).should('be.visible')
    cy.get(destination_list).select('8')
    cy.get('[value="8"]').should('be.visible')

    cy.get(destination_list).select('31')
    cy.get('[value="31"]').should('be.visible')

    cy.get(destination_list).select('51')
    cy.get('[value="51"]').should('be.visible')

  })

  it('choses number of kids from the drop list', () => {
    cy.get(number_of_kids).should('be.visible')
    //cy.get(number_of_kids).select('1').should('have.value', '1')
    cy.get('#Filter_ChildrensAge\[0\]').should("be.visible")

  })

  it('proves that invalid date will triger error message', () => {
    cy.get(checkin).clear()
    cy.get (checkin).type("20250808").invoke("val").should('eq', '20250808')
    cy.get(checkout).clear()
    cy.get (checkout).type("20240808").invoke("val").should('eq', '20240808')
  })

  it('proves that invalid number of adults will triger error message', () => {
    cy.get(number_of_adults).should('be.visible')
    cy.get(number_of_adults).select('-7').should('have.value', '-7')

  })

  it('proves that invalid number of children will triger error message', () => {
  cy.get(number_of_kids).should('be.visible')
  cy.get(number_of_kids).select('-15').should('have.value', '-15')

  })

})