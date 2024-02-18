import './App.css';
import React, { useEffect, useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import LogInPage from '../Log In Page/LogInPage';
import Details from '../Details/Details';
import SearchPage from '../Search Page/SearchPage';
import NotFoundPage from '../Not Found Page/NotFoundPage';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/FirebaseConfig';
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  const signOutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        localStorage.setItem('isLoggedIn', false);
        setIsLoggedIn(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isValidRoute = () => {
    const validRoutes = ['/', '/cocktailshome'];
    return (
      validRoutes.includes(location.pathname) ||
      location.pathname.startsWith('/details/')
    );
  };

  return (
    <main className='App'>
      {isLoggedIn && isValidRoute() && (
        <header>
          <h1>Quintessential Cocktails</h1>
          <nav>
            <NavLink to='/cocktailshome' className='nav-link'>
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
        </header>
      )}
      <Routes>
        <Route
          path='/'
          element={<LogInPage setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route
          path='/cocktailshome'
          element={
            isLoggedIn ? (
              <SearchPage />
            ) : (
              <NotFoundPage isLoggedIn={isLoggedIn} />
            )
          }
        ></Route>
        <Route
          path='/details/:id'
          element={
            isLoggedIn ? <Details /> : <NotFoundPage isLoggedIn={isLoggedIn} />
          }
        ></Route>
        <Route></Route>
        <Route
          path='*'
          element={<NotFoundPage isLoggedIn={isLoggedIn} />}
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
