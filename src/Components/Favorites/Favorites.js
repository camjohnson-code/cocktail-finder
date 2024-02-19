import './Favorites.css'
import Card from '../Card/Card';


const Favorites = ({favorites}) => {
  const cocktailCards = favorites.map((drink) => {
    return (
      <Card
        key={drink.idDrink}
        id={drink.idDrink}
        title={drink.strDrink}
        img={drink.strDrinkThumb}
      />
    );
  });

  return (
    <section
      className={`favorites-container ${
        cocktailCards.length ? 'has-favorites' : ''
      }`}
      >
      {cocktailCards.length ? ( cocktailCards ) : (
        <p>Save your favorite cocktails in the cocktail details page!</p>
      )}
    </section>
  )
}

export default Favorites