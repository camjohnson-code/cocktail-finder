import './Details.css'
import { mockDetails } from'./details-mock-data'

const Details = () => {

  const listIngredients = () => {
    return Object.entries(mockDetails).reduceRight((a, c) => {
      const num = c[0].length - 1;
      const key = c[0][num];
      if (c[1] !== null) {
        if (c[0].includes('Ingredient') || c[0].includes('Measure')) {
          a[key] = a[key] || [];
          if (a[key] !== null) a[key].push(c[1]);
        }
      } 
      return a
    }, {})
  }

  const renderlist = () => {
    return (
      <ul>
        { Object.keys(listIngredients()).map(item => (
          <li key={item}>{ listIngredients()[item].join(' | ') }</li>          
        )) }
      </ul>
    )
  }

  return (
    <section className='details-container'>
      <h1>{`${mockDetails.strDrink}`}</h1>
      <div className='accent-container'>
        <p className='accent-text'>{`${mockDetails.strCategory}`}</p>
      </div>
      <article className='ingredients'>
        <h3>Ingredients</h3>
        { renderlist(listIngredients()) }
      </article>
      <article className='recipe'>
        <h3>Recipe</h3>
        <p>{`${mockDetails.strInstructions}`}</p>
      </article>
      <hgroup className='title-container'>
        <h2>{`${mockDetails.strDrink}`}</h2>
        <p>For the Love of Brunch</p>
        <img src={mockDetails.strDrinkThumb} alt=''></img>
      </hgroup>
    </section>
  )
}

export default Details