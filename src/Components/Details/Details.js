import './Details.css'
import { mockDetails } from'./details-mock-data'

const Details = () => {
  return (
    <article className='details-container'>
      <h1>{`${mockDetails.strDrink}`}</h1>
    </article>
  )
}

export default Details