import './RandomCocktailPage.css';
import React, { useState } from 'react';
import { getRandomCocktail } from '../../ApiCalls';
import Card from '../Card/Card';

const RandomCocktailPage = () => {
  const [randomCocktail, setRandomCocktail] = useState('');
  const [error, setError] = useState('');

  const spirits = [
    'Vodka',
    'Rum',
    'Whiskey',
    'Gin',
    'Tequila',
    'Brandy',
    'Wine',
    'Bourbon',
    'Scotch',
    'Absinthe',
  ];

  const generateRandomNumber = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  const handleOnClick = () => {
    const randomSpirit = spirits[generateRandomNumber(spirits)];

    getRandomCocktail(randomSpirit)
      .then((cocktails) => {
        updateRandomDrink(cocktails.drinks);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateRandomDrink = (cocktails) => {
    const randomIndex = generateRandomNumber(cocktails);
    const randomCocktail = cocktails[randomIndex];

    setRandomCocktail(randomCocktail);
  };

  return (
    <section className='random-cocktail-section'>
      <section className='left-half'>
        <h1 className='random-title'>Random Cocktail Generator</h1>
        <p className='random-text'>
          Can't decide what to drink? Let us choose for you!
        </p>
        <button className='random-cocktail-button' onClick={handleOnClick}>
          {!randomCocktail && !error ? 'Get Me A Cocktail' : 'Try again'}
        </button>
      </section>
      <section className='right-half'>
        <section className='random-cocktail-results'>
          {!randomCocktail && !error ? (
            <p className='side-text random-text'>Click the button to find a cocktail</p>
          ) : (
            <Card
              key={randomCocktail.idDrink}
              id={randomCocktail.idDrink}
              title={randomCocktail.strDrink}
              img={randomCocktail.strDrinkThumb}
            />
          )}
          {error && <p>{error}</p>}
        </section>
      </section>
    </section>
  );
};

export default RandomCocktailPage;
