import './LogInPage.css';
import App from '../App/App';
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';

const LogInPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then(() => {
        localStorage.setItem('isLoggedIn', true);
        setIsLoggedIn(true);
        navigate('/cocktailshome');
      })
      .catch((error) => console.log(error));
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
      </section>
    </section>
  );
};

export default LogInPage;
