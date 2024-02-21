describe('Random Cocktail Generator', () => {
  beforeEach(() => {
    cy.intercept('https://www.thecocktaildb.com/api/json/v1/1/random.php', {
      response: 200,
      fixture: 'royalFizz'
    })
    
    cy.visit('http://localhost:3000/randomcocktail');
  });
  
  it('Visits the random generator page', () => {
    cy.get('h1').contains('Random Cocktail Generator')
    .get('.random-text').contains('Can\'t decide what to drink? Let us choose for you!')
    .get('.random-cocktail-button').contains('Get Me A Cocktail')
    .get('.side-text').contains('Click the button to find a cocktail')
  })

  it('Can generate a random cocktail and see its info when clicked', () => {
    cy.intercept('GET', `**/filter.php?i=Vodka`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Rum`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Whiskey`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Gin`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Tequila`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Brandy`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Wine`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Bourbon`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Scotch`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Absinthe`, { fixture: 'royalFizz.json' });
    cy.get('.random-cocktail-button').click()
      .get('.random-cocktail-button').contains('Try again')
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
    cy.get('button').contains('Add to Favorites').click().contains('Added!')
  });

  it('Can add the random cocktail to favorites', () => {
    cy.intercept('GET', `**/filter.php?i=Vodka`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Rum`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Whiskey`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Gin`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Tequila`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Brandy`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Wine`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Bourbon`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Scotch`, { fixture: 'royalFizz.json' });
    cy.intercept('GET', `**/filter.php?i=Absinthe`, { fixture: 'royalFizz.json' });
    cy.get('.random-cocktail-button').click()
    cy.get('.card').click()
    cy.get('button').contains('Add to Favorites').click().contains('Added!')
  });
  
})