describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should visit the search bar after clicking teh Search For Books button', () => {
    cy.get('button').eq(1).click()
    .url().should('eq', 'http://localhost:5000/search')
  })

  it('should take me back to the home page', () => {
    cy.get('button').eq(1).click()
    .url().should('eq', 'http://localhost:5000/search')
    cy.get('img').eq(0).click()
    .url().should('eq', 'http://localhost:5000/')
  })

  it('should take in a username and password', () => {
    cy.get('input').eq(0).type('Hello')
    cy.get('input').eq(1).type('World')
  })

  it('the login button should be disabled until values are entered for username and password', () => {
    cy.get('button').eq(0).should('be.disabled')
    cy.get('input').eq(0).type('Hello')
    cy.get('input').eq(1).type('World')
    cy.get('button').eq(0).should('be.disabled')
  })
})
