import './Card.css';
import { Link, useLocation } from 'react-router-dom';

const Card = ({ title, img, id, removeFavorite }) => {

  return (
    <Link className='card' to={`/details/${id}`}>
      {
        useLocation().pathname.includes('/favorites') && 
        <Link className='remove-button' to={'/favorites'}>
          <button onClick={() => removeFavorite(id)}>X</button>
        </Link>
      }
      <img src={img}></img>
      <p className='drink-title'>{title}</p>
    </Link>
  );
};

export default Card;
