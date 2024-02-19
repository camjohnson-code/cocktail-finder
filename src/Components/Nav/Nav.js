import './Nav.css';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/FirebaseConfig';

const Nav = ({ setIsLoggedIn, navigate }) => {
  const signOutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        localStorage.setItem('isLoggedIn', false);
        setIsLoggedIn(false);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <header>
        <h1>Quintessential Cocktails</h1>
        <nav>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/randomcocktail" className="nav-link">
            Random Cocktail
          </NavLink>
          <NavLink to="/favorites" className="nav-link">
            Favorites
          </NavLink>
          <NavLink to="/" className="nav-link" onClick={signOutWithGoogle}>
            Sign Out
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Nav;
