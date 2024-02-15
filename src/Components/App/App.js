import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <header>
        <h1>Quintessential Cocktails</h1>;
        <nav>
          <NavLink to='/coctailshome' className='nav-link'>Home</NavLink>
          <NavLink to='/randomcocktail' className='nav-link'>Random Cocktail</NavLink>
          <NavLink to='/favorites' className='nav-link'></NavLink>
          <NavLink to='/' className='nav-link'>Sign Out</NavLink>
        </nav>
      </header>
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </main>
  )  
}

export default App;
