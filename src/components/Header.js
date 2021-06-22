import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="display: grid grid-cols-3 col-span-3 row-start-1 bg-green-100 py-2">
      <ul className="display: grid col-start-1 col-span-full grid-flow-col place-items-center text-center">
        <li className="border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-5/6 active:bg-green-400 active:border-green-400 shadow-sm">
          <NavLink to="/" className="display: block">
            Home
          </NavLink>
        </li>
        {!props.authState && (
          <li className="sm:col-start-3 lg:col-start-4 bordber-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-5/6 active:bg-green-400 active:border-green-400 shadow-sm">
            <NavLink to="/login" className="display: block">
              Login
            </NavLink>
          </li>
        )}
        {props.authState && (
          <li className="sm:col-start-4 lg:col-start-5 border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-5/6 active:bg-green-400 active:border-green-400 shadow-sm">
            <NavLink to="/logout" className="display: block">
              Log out
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
