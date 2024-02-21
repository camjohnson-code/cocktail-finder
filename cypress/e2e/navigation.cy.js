describe('Search function', () => {
  beforeEach(() => {
    cy.intercept('https://www.thecocktaildb.com/api/json/v1/1/random.php', {
      response: 200,
      fixture: 'royalFizz'
    })
    
    cy.visit('http://localhost:3000/cocktailshome');
    cy.viewport(1021, 660)
  });

  it('Should allow the user to navigate between pages', () => {
    cy.get('header').contains('h1', 'Quintessential Cocktails')
    cy.get('.nav-link').first().contains('Home').should('have.class', 'active')
    cy.get('.nav-link').last().contains('Sign Out')
    cy.get('.random').click().should('have.class', 'active')
    cy.get('.random-title').contains('h1', 'Random Cocktail Generator')
    cy.get('.favorites').click().should('have.class', 'active')
    cy.get('p').contains('Save your favorite cocktails in the cocktail details page!')
    cy.get('.home').click().should('have.class', 'active')
    cy.get('.featured-cocktail-title').contains('h2', 'Cocktail of the Day')
  })
})