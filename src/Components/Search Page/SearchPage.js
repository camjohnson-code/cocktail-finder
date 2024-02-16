import { useState } from 'react';
import './SearchPage.css';
import Card from '../Card/Card';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [drinks, setDrinks] = useState([]);

  const cocktailCards = drinks.map((drink) => {
    return <Card title={drink.strDrink} img={drink.strDrinkThumb} />;
  });

  const getCocktail = (drink) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      .then((response) => response.json())
      .then((drinks) => {
        drinks.drinks ? setDrinks(drinks.drinks) : setDrinks([]);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchValue ? getCocktail(searchValue) : setDrinks([]);
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
        {cocktailCards.length
          ? cocktailCards
          : 'No results found. Please try again.'}
      </div>
    </section>
  );
};

export default SearchPage;
