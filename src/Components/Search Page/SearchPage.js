import { useState } from 'react';
import './SearchPage.css';
import Card from '../Card/Card';
import { getCocktail } from '../../ApiCalls';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState('');

  const cocktailCards = drinks.map((drink) => {
    return (
      <Card
        key={drink.idDrink}
        id={drink.idDrink}
        title={drink.strDrink}
        img={drink.strDrinkThumb}
      />
    );
  });

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchValue
        ? getCocktail(searchValue)
            .then((drinks) => {
              drinks.drinks ? setDrinks(drinks.drinks) : setDrinks([]);
            })
            .catch((error) => {
              setError(error.message);
            })
        : setDrinks([]);
    }
  };

  return (
    <section className='search-form'>
      <input
        type='text'
        placeholder='Search for a cocktail'
        className='search'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={handleKeyPress}
      />
      <div
        className={`search-results ${
          cocktailCards.length ? 'has-results' : ''
        }`}
      >
        {cocktailCards.length ? (
          cocktailCards
        ) : error ? (
          <p className='error'>{error}</p>
        ) : (
          'No results found. Please try again.'
        )}
      </div>
    </section>
  );
};

export default SearchPage;
