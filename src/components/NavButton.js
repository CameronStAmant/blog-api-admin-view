import { NavLink } from 'react-router-dom';

function NavButton(props) {
  return (
    <li className="sm:col-start-3 lg:col-start-4 bordber-solid border-4 border-green-700 rounded-md bg-green-700 hover:bg-green-800 hover:border-green-800 w-5/6 active:bg-green-900 active:border-green-900 shadow-sm">
      <NavLink to={props.link} className="display: block">
        {props.text}
      </NavLink>
    </li>
  );
}

export default NavButton;
