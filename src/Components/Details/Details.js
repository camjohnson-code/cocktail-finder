import './Details.css'
import { mockDetails } from'./details-mock-data'

const Details = () => {

  const listIngredients = () => {
    return Object.entries(mockDetails).reduce((a, c) => {
      const ing = 'Ingredient';
      const mea = 'Measure'
      const num = c[0].length - 1
      if (c[0].includes(ing) || c[0].includes(mea)) {
        a[c[0][num]] = a[c[0][num]] || []
        a[c[0][num]].push(c[1])
      }
      return a
    }, {})
  }

  const renderlist = () => {
    return (
      <ul>
        { Object.keys(listIngredients()).map(key => (
          <li>{ listIngredients()[key].join(' | ') }</li>          
        )) }
      </ul>
    )
  }

  return (
    <section className='details-container'>
      <h1>{`${mockDetails.strDrink}`}</h1>
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