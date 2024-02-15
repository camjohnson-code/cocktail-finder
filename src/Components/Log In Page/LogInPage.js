import './LogInPage.css';
import GoogleButton from 'react-google-button';

const LogInPage = () => {
  return (
    <section className='log-in-page'>
      <section className='log-in-box'>
        <h1 className='title'>Quintessential Cocktails</h1>
        <p className='tagline'>Discover timeless mixes with Quintessential Cocktails</p>
        <hr></hr>
        <GoogleButton
          onClick={() => {
            console.log('Google button clicked');
          }}
        />
      </section>
    </section>
  );
};

export default LogInPage;
