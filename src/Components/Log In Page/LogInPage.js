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
        navigate('/cocktailshome');
        setIsLoggedIn(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className='log-in-page'>
      <section className='log-in-box'>
        <h1 className='title'>Quintessential Cocktails</h1>
        <p className='tagline'>
          Discover timeless mixes with Quintessential Cocktails
        </p>
        <hr></hr>
        <GoogleButton onClick={signInWithGoogle} />
      </section>
    </section>
  );
};

export default LogInPage;
