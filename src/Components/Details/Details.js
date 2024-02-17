import { useParams } from 'react-router-dom';
import './Details.css';
import { useEffect, useState } from 'react';
import { getCocktailDetails } from '../../ApiCalls';

const Details = () => {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [error, setError] = useState('');
  const id = useParams().id;

  useEffect(() => {
    getCocktailDetails()
      .then((data) => {
        setSelectedCocktail(data.drinks[0]);
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
        <img src={selectedCocktail.strDrinkThumb} alt=''></img>
      </hgroup>
    </section>
  );
};

export default Details;
