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

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen)
  }

  const signOutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        navigate('/');
      })
      .catch((error) => {
        alert('There was an error signing you out. Please try again later.');
      });
  };

  return (
    <>
      <header>
        <h1>Quintessential Cocktails</h1>
        <nav className={ burgerOpen ? `nav-column` : ''} onClick={() => setBurgerOpen(false)}>
          <NavLink to="/cocktailshome" className="nav-link">
            Home
          </NavLink>
          <NavLink to='/randomcocktail' className='nav-link'>
            Random Cocktail
          </NavLink>
          <NavLink to='/favorites' className='nav-link'>
            Favorites
          </NavLink>
          <NavLink to='/' className='nav-link' onClick={signOutWithGoogle}>
            Sign Out
          </NavLink>
        </nav>
        <div className='hamburger' onClick={toggleBurger}>
          <Burger burgerOpen={burgerOpen} />
        </div>
      </header>
    </>
  );
};

export default Nav;

Nav.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};
