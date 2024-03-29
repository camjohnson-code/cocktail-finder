import './Nav.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/FirebaseConfig';
import React from 'react';
import PropTypes from 'prop-types';
import Burger from './Burger';

const Nav = ({ setIsLoggedIn, navigate }) => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') toggleBurger();
  };

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const signOutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        navigate('/cocktail-finder');
      })
      .catch((error) => {
        alert('There was an error signing you out. Please try again later.');
      });
  };

  return (
    <>
      <header>
        <h1>Quintessential Cocktails</h1>
        <div
          className='hamburger'
          tabIndex={0}
          onClick={toggleBurger}
          onKeyDown={(e) => handleKeyDown(e)}
        >
          <Burger burgerOpen={burgerOpen} />
        </div>
        <nav
          className={burgerOpen ? `nav-column` : ''}
          onClick={() => setBurgerOpen(false)}
        >
          <NavLink
            to='/cocktail-finder/cocktailshome'
            className='nav-link home'
          >
            Home
          </NavLink>
          <NavLink
            to='/cocktail-finder/randomcocktail'
            className='nav-link random'
          >
            Random Cocktail
          </NavLink>
          <NavLink
            to='/cocktail-finder/favorites'
            className='nav-link favorites'
          >
            Favorites
          </NavLink>
          <button className='sign-out-button nav-link' onClick={signOutWithGoogle}>
            Sign Out
          </button>
        </nav>
      </header>
    </>
  );
};

export default Nav;

Nav.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};
