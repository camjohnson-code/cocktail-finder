describe('Search function', () => {
  beforeEach(() => {
    cy.intercept('https://www.thecocktaildb.com/api/json/v1/1/random.php', {
      response: 200,
      fixture: 'royalFizz'
    });
    cy.intercept('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita', {
      response: 200,
      fixture: 'margaritas'
    })
    cy.intercept('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007', {
      response: 200,
      fixture: 'margaritas'
    })
    
    cy.visit('http://localhost:3000/cocktail-finder/cocktailshome');
  });
  
  it(`Should search for a cocktail and have those drinks' cards rendered on the page`, () => {
    cy.get('.search').type('margarita').type('{enter}')
    cy.get('.card').first().contains('.drink-title', 'Margarita')
    cy.get('.card').first().find('img').should('have.attr', 'src', "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg")
    cy.get('.card').last().contains('.drink-title', `Tommy's Margarita`)
    cy.get('.card').last().find('img').should('have.attr', 'src', "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg");
  })

  it(`Should take the user to that cocktail's details page when card is clicked`, () => {
    cy.get('.search').type('margarita').type('{enter}').get('.card').first().click();
    cy.get('.title-container').contains('h2', 'Margarita');
    cy.get('.ingredients').contains('h3', 'Ingredients');
    cy.get('.ingredients').find('ul').first().contains('li', '1 1/2 oz | Tequila');
    cy.get('.ingredients').find('ul').last().contains('li', 'Salt');
    cy.get('.recipe').contains('h3', 'Recipe');
    cy.get('button').contains('Add to Favorites');
  })
})