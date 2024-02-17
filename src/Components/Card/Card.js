import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, img, id }) => {
  return (
    <Link className='card' to={`/details/${id}`}>
      <img src={img}></img>
      <p className='drink-title'>{title}</p>
    </Link>
  );
};

export default Card;
