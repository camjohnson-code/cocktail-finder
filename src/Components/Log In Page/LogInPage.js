import './LogInPage.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/FirebaseConfig';
import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const LogInPage = ({ setIsLoggedIn, navigate }) => {
  const [error, setError] = useState(null);

  const signInWithGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then(() => {
        localStorage.setItem('isLoggedIn', true);
        setIsLoggedIn(true);
        navigate('/cocktail-finder/cocktailshome');
      })
      .catch((error) => setError(true));
  };

  const handleKeyDown = (event) => {
    if ((event.key = 'Enter' || event.key === ' ')) {
      event.preventDefault();
      signInWithGoogle();
    }
  };

  return (
    <section className='log-in-page'>
      <section className='log-in-box'>
        <h1 className='title'>Quintessential Cocktails</h1>
        <p className='tagline'>
          Discover timeless mixes with Quintessential Cocktails
        </p>
        <hr></hr>
        <img
          onKeyDown={(event) => handleKeyDown(event)}
          onClick={signInWithGoogle}
          tabIndex={0}
          className='sign-in-button'
          src={require('../../Images/web_light_rd_SI@4x.png')}
        />
        {error && <p>There was an error signing you in. Please try again.</p>}
      </section>
    </section>
  );
};

export default LogInPage;

LogInPage.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};
