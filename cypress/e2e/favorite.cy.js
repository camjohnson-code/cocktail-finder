describe('Favoriting a Cocktail', () => {
  beforeEach(() => {
    cy.intercept('https://www.thecocktaildb.com/api/json/v1/1/random.php', {
      response: 200,
      fixture: 'royalFizz'
    })
    cy.intercept('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12055', {
      response: 200,
      fixture: 'royalFizz'
    })
    cy.visit('http://localhost:3000/cocktailshome');
  });

  it('Can click on a cocktail and see the details', () => {
    cy.get('.card').click()
    cy.get('h2').contains('Royal Fizz')
      .get('p').contains('Contemporary Classics')
      .get('.ingredients')
      .get('.ingredients h3').contains('Ingredients')
      .get('.ingredients ul').children('li').should('have.length', 4)
      .get('.ingredients ul li').first().contains('1 oz | Gin')
      .get('.ingredients ul li').last().contains('Coca-Cola')
      .get('.recipe')
      .get('.recipe h3').contains('Recipe')
      .get('.recipe p').contains('Shake all ingredients (except cola) with ice and strain into a chilled collins glass. Fill with cola and serve.')
  })

  it('Can add the cocktail to favorites', () => {
    cy.get('.card').click()
    cy.get('button').contains('Add to Favorites').click().contains('Added!')
  })

  it('Can see the favorited cocktail in the favorites page', () => {
    cy.get('.card').click()
    cy.get('button').contains('Add to Favorites').click()
    cy.get('.hamburger').first().click()
      .get('.nav-link').eq(2).click()
    cy.get('.drink-title').contains('Royal Fizz')
  })

  it('Can remove the favorited cocktail', () => {
    cy.get('.card').click()
    cy.get('button').contains('Add to Favorites').click()
    cy.get('.hamburger').first().click()
      .get('.nav-link').eq(2).click()
    cy.get('.remove-button').click()
    cy.get('.favorites-container p').contains('Save your favorite cocktails in the cocktail details page!')
  })
})