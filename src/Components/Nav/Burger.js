import './Nav.css';

const Burger = ({ burgerOpen }) => {
  return (
    <div className='hamburger'>
      <div className={ burgerOpen ? 'burger burger1' : 'burger'}/>
      <div className={ burgerOpen ? 'burger burger2' : 'burger'}/>
      <div className={ burgerOpen ? 'burger burger3' : 'burger'}/>
    </div>
  )
}

export default Burger;