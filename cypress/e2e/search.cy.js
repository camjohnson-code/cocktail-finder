describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('https://www.thecocktaildb.com/api/json/v1/1/random.php', {
      response: 200,
      fixture: 'royalFizz'
    })
    
    cy.visit('http://localhost:3000/cocktailshome');
  });
  
  it('passes', () => {
    cy.get('header').contains('h1', 'Quintessential Cocktails');
  })
  
})