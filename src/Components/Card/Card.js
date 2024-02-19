import './Card.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Card = ({ title, img, id, removeFavorite}) => {
  return (
    <Link className='card' to={`/details/${id}`}>
      { useLocation().pathname.includes('/favorites') && 
      <button onClick={(() => removeFavorite(id))}>X</button>}
      <img src={img}></img>
      <p className='drink-title'>{title}</p>
    </Link>
  );
};

export default Card;
