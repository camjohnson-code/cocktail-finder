import './App.css';
import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import LogInPage from '../Log In Page/LogInPage';
import Details from '../Details/Details';
import SearchPage from '../Search Page/SearchPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <main className='App'>
      {isLoggedIn && (
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
            <NavLink to='/' className='nav-link'>
              Sign Out
            </NavLink>
          </nav>
        </header>
      )}
      <Routes>
        <Route path='/' element={<LogInPage />}></Route>
        <Route path='/cocktailshome' element={<SearchPage />}></Route>
        <Route path='/details' element={<Details />}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </main>
  );
}

export default App;
