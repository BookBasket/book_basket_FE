describe('User', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('it should render the component', () => {
    cy.get('input').eq(0).type('Hello')
    cy.get('input').eq(1).type('World')
    cy.get('input').eq(0).click()
    cy.get('button').eq(0).click()
    .url().should('eq', 'http://localhost:5000/user')
  })
})
