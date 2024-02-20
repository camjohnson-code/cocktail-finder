import './NotFoundPage.css';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({ isLoggedIn }) => {
  return (
    <div className='not-found'>
      <h1 className='not-found-header'>
        {isLoggedIn
          ? 'Page not found!'
          : 'You must be signed in to view this page'}
      </h1>
      <p>
        {isLoggedIn ? (
          <>
            <Link to={'/'} className='return-home-link'>
              Click here
            </Link>{' '}
            to return home.
          </>
        ) : (
          <>
            <Link to={'/'} className='return-home-link'>
              Click here
            </Link>{' '}
            to return to the sign in page.
          </>
        )}
      </p>
    </div>
  );
};

export default NotFoundPage;

NotFoundPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
