import './App.css';
import React from 'react';
import UseLocalStorage from './UseLocaStorage';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';
import LogInPage from '../Log In Page/LogInPage';
import Favorites from '../Favorites/Favorites'
import Details from '../Details/Details';
import SearchPage from '../Search Page/SearchPage';
import NotFoundPage from '../Not Found Page/NotFoundPage';
import RandomCocktailPage from '../Random Cocktail Page/RandomCocktailPage';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = UseLocalStorage('isLoggedIn', false);
  const [favorites, setFavorites] = UseLocalStorage('stored-faves', []);
  
  const isValidRoute = () => {
    const validRoutes = ['/', '/cocktailshome', '/randomcocktail', '/favorites'];
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
          path='/cocktail-finder/'
          element={isLoggedIn ? <SearchPage /> : <LogInPage navigate={navigate} setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route
          path='/cocktailshome/'
          element={
            isLoggedIn ? (
              <SearchPage />
            ) : (
              <NotFoundPage isLoggedIn={isLoggedIn} />
            )
          }
        ></Route>
        <Route
          path='/randomcocktail/'
          element={
            isLoggedIn ? (
              <RandomCocktailPage />
              ) : (
                <NotFoundPage isLoggedIn={isLoggedIn} />
              )
            }
        ></Route>
        <Route
          path="/favorites/"
          element={isLoggedIn ? (
            <Favorites favorites={favorites} setFavorites={setFavorites}/>
            ) : (
              <NotFoundPage isLoggedIn={isLoggedIn} />
            )
          }
        ></Route>
        <Route
          path="/details/:id/"
          element={isLoggedIn ? (
            <Details favorites={favorites} setFavorites={setFavorites} /> 
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
