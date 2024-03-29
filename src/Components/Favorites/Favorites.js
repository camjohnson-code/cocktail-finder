import './Favorites.css';
import Card from '../Card/Card';
import React from 'react';
import PropTypes from 'prop-types';

const Favorites = ({ favorites, setFavorites }) => {
  const removeFavorite = (id) => {
    const filtered = favorites.filter((favorite) => favorite.idDrink !== id);
    setFavorites(filtered);
  };

  const cocktailCards = favorites.map((drink) => {
    return (
      <Card
        key={drink.idDrink}
        id={drink.idDrink}
        title={drink.strDrink}
        img={drink.strDrinkThumb}
        removeFavorite={removeFavorite}
      />
    );
  });

  return (
    <section
      className={`favorites-container ${
        cocktailCards.length ? 'has-favorites' : ''
      }`}
    >
      {cocktailCards.length ? (
        cocktailCards
      ) : (
        <p>Save your favorite cocktails in the cocktail details page!</p>
      )}
    </section>
  );
};

export default Favorites;

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavorites: PropTypes.func.isRequired,
};
