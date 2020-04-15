describe('Search', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should render the component', () => {
    cy.get('button').eq(1).click()
    .url().should('eq', 'http://localhost:5000/search')
  })
  it('should be able to search based on radio input: TITLE', () => {
    cy.get('button').eq(1).click()
    .get('.search-bar').type('Salt, Fat, Acid, Heat')
    .get('input[type="radio"]').eq(0).click()
    .get('button').click()
    .get('.each-book').first().contains('Salt, Fat, Acid, Heat')
  })
  it('should be able to search based on radio input: AUTHOR', () => {
    cy.get('button').eq(1).click()
    .get('.search-bar').type('Stephen King')
    .get('input[type="radio"]').eq(1).click()
    .get('button').click()
    .get('.each-book').first().contains('Stephen King, American Master')
  })
  it('should be able to search based on radio input: GENRE', () => {
    cy.get('button').eq(1).click()
    .get('.search-bar').type('Fiction')
    .get('input[type="radio"]').eq(2).click()
    .get('button').click()
    .get('.each-book').first().contains('Winter Baby')
  })
  it('should be able to search based on radio input: ISBN', () => {
    cy.get('button').eq(1).click()
    .get('.search-bar').type('9780385533140')
    .get('input[type="radio"]').eq(3).click()
    .get('button').click()
    .get('.each-book').first().contains('Damned')
  })
  it('should be able to refresh after a new search', () => {
    cy.get('button').eq(1).click()
    .get('.search-bar').type('Stephen King')
    .get('input[type="radio"]').eq(1).click()
    .get('button').click()
    .get('.each-book').first().contains('Stephen King, American Master')
    .get('.search-bar').type('Chuck Palahniuk')
    .get('input[type="radio"]').eq(1).click()
    .get('button').click()
    .get('.each-book').first().contains('Adjustment Day: A Novel')
  })

})
