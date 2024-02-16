import './Card.css';

const Card = ({ title, img }) => {
  return (
    <section className='card'>
      <img src={img}></img>
      <p className='drink-title'>{title}</p>
    </section>
  );
};

export default Card;
