describe('App', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should visit the search bar after clicking teh Search For Books button', () => {
    cy.get('button').eq(1).click()
    .url().should('eq', 'http://localhost:5000/search')
  })
  it('should render books after searching', () => {
    cy.get('button').eq(1).click()
    .get('.search-bar').type('Stephen King')
    .get('input[type="radio"]').eq(1).click()
    .get('button').click()
    .get('.each-book').first().contains('Stephen King, American Master')
  });
  it('should take me back to the home page', () => {
  })
})
