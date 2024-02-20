import React, { useState, useEffect } from 'react';
import './CocktailOfTheDay.css';
import { getCocktailOfTheDay } from '../../ApiCalls';
import Card from '../Card/Card';

const CocktailOfTheDay = () => {
  const [cocktailOfTheDay, setCocktailOfTheDay] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCocktailOfTheDay()
      .then((drink) => {
        setCocktailOfTheDay(drink);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  return (
    <div className='featured-cocktail-section'>
      <h2 className='featured-cocktail-title'>Cocktail of the Day</h2>
      {error ? (
        <p>There was an error loading today's featured cocktail.</p>
      ) : cocktailOfTheDay ? (
        <Card
          key={cocktailOfTheDay.idDrink}
          id={cocktailOfTheDay.idDrink}
          title={cocktailOfTheDay.strDrink}
          img={cocktailOfTheDay.strDrinkThumb}
        />
      ) : (
        <p>Loading cocktail...</p>
      )}
    </div>
  );
};

export default CocktailOfTheDay;
