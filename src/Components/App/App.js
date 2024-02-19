import './App.css';
import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';
import LogInPage from '../Log In Page/LogInPage';
import Details from '../Details/Details';
import SearchPage from '../Search Page/SearchPage';
import NotFoundPage from '../Not Found Page/NotFoundPage';
import RandomCocktailPage from '../Random Cocktail Page/RandomCocktailPage';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  const isValidRoute = () => {
    const validRoutes = ['/', '/cocktailshome', '/randomcocktail'];
    return (
      validRoutes.includes(location.pathname) ||
      location.pathname.startsWith('/details/')
    );
  };

  return (
    <main className='App'>
      {isLoggedIn && isValidRoute() && (
        <Nav setIsLoggedIn={setIsLoggedIn} navigate={navigate}></Nav>
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
        <Route
          path='/randomcocktail'
          element={
            isLoggedIn ? (
              <RandomCocktailPage />
            ) : (
              <NotFoundPage isLoggedIn={isLoggedIn} />
            )
          }
        ></Route>
        <Route
          path='*'
          element={<NotFoundPage isLoggedIn={isLoggedIn} />}
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
