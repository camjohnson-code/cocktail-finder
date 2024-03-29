import './Details.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCocktailDetails } from '../../ApiCalls';
import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ favorites, setFavorites }) => {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [error, setError] = useState('');
  const [buttonText, setButtonText] = useState('Add to Favorites');
  const id = useParams().id;

  const addToFavorites = () => {
    const alreadyInFavorites = favorites.some(
      (drink) => drink.idDrink === selectedCocktail.idDrink
    );

    if (!alreadyInFavorites) {
      const updatedFavorites = [...favorites, selectedCocktail];
      setFavorites(updatedFavorites);
      setButtonText('Added!');
    }
  };

  useEffect(() => {
    getCocktailDetails(id)
      .then((data) => {
        setSelectedCocktail(data.drinks[0]);
        const alreadyInFavorites = favorites.some(
          (drink) => drink.idDrink === data.drinks[0].idDrink
        );
        if (alreadyInFavorites) setButtonText('Added!');
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const listIngredients = () => {
    return Object.entries(selectedCocktail).reduceRight((a, c) => {
      const num = c[0].length - 1;
      const key = c[0][num];
      if (c[1] !== null) {
        if (c[0].includes('Ingredient') || c[0].includes('Measure')) {
          a[key] = a[key] || [];
          a[key].push(c[1]);
        }
      }
      return a;
    }, {});
  };

  const renderlist = () => {
    return (
      <ul>
        {Object.keys(listIngredients()).map((item) => (
          <li key={item}>{listIngredients()[item].join(' | ')}</li>
        ))}
      </ul>
    );
  };

  if (!selectedCocktail || error.length)
    return <p className='error'>{error}</p>;

  return (
    <section className='details-container'>
      <img
        className='drink-pic'
        src={selectedCocktail.strDrinkThumb}
        alt=''
      ></img>
      <h1>{`${selectedCocktail.strDrink}`}</h1>
      <div className='accent-container'>
        <p className='accent-text'>{`${selectedCocktail.strCategory}`}</p>
      </div>
      <article className='ingredients'>
        <h3>Ingredients</h3>
        {renderlist(listIngredients())}
      </article>
      <article className='recipe'>
        <h3>Recipe</h3>
        <p>{`${selectedCocktail.strInstructions}`}</p>
      </article>
      <hgroup className='title-container'>
        <h2>{`${selectedCocktail.strDrink}`}</h2>
        <p>Contemporary Classics</p>
      </hgroup>
      <button onClick={() => addToFavorites()}>{buttonText}</button>
    </section>
  );
};

export default Details;

Details.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavorites: PropTypes.func.isRequired,
};
