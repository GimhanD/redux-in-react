import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import  { authActions } from '../store/auth';

const Header = () => {
  const dispatch = useDispatch();
  const isAutctd = useSelector((state) => state.auth.isAuthenticated);

  const logOutHandler = ( ) => {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAutctd && <nav>
        <ul>
          <li>
             <a href='/'>My Products</a>
          </li>
          <li>
             <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logOutHandler}>Logout</button>
          </li>
        </ul>
      </nav> }
    </header>
  );
};

export default Header;
