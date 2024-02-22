import './Card.css';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, img, id, removeFavorite }) => {
  return (
    <Link className='card' to={`/cocktail-finder/details/${id}`}>
      {useLocation().pathname.includes('/favorites') && (
        <Link className='remove-button' to={'/cocktail-finder/favorites'}>
          <button onClick={() => removeFavorite(id)}>X</button>
        </Link>
      )}
      <img src={img}></img>
      <p className='drink-title'>{title}</p>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeFavorite: PropTypes.func,
};
