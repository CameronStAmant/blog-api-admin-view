import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="header">
      <ul className="headerNav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {!props.authState && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        {props.authState && (
          <li>
            <NavLink to="/logout">Log out</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
