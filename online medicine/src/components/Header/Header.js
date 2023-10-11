import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = ({ cartItems }) => {
  const { user, setUser } = useContext(UserContext);
  const { isLoggedIn } = user;

  const sumWithInitial = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    user.items
  ) || user.items;

  const handleLogout = () => {
    setUser({ isLoggedIn: false });
  };

  return (
    <header className='header'>
      <div>
        <h1>
          <Link to='/' className='logo'>
            medicine shopping
          </Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/products/syrup'>Products</Link>
        </li>
        <li>
          {!isLoggedIn && <Link to='/login'>Login</Link>}
          {isLoggedIn && (
            <Link to='/logout' onClick={handleLogout}>
              Logout
            </Link>
          )}
        </li>
        <li>{!isLoggedIn && <Link to='/registration'>Registration</Link>}</li>
        <li>
          <Link to='/shopping-bag'>Shopping Bag ({sumWithInitial})</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
