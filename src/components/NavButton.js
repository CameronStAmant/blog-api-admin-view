import { NavLink } from 'react-router-dom';

function NavButton(props) {
  return (
    <NavLink to={props.link} className="display: block">
      <li className="sm:col-start-3 lg:col-start-4 border-solid border-4 border-green-700 rounded-md bg-green-700 hover:bg-green-800 hover:border-green-800 active:bg-green-900 active:border-green-900 shadow-sm px-md text-base">
        {props.text}
      </li>
    </NavLink>
  );
}

export default NavButton;
