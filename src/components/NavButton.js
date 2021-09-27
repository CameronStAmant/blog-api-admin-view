import { NavLink } from 'react-router-dom';

function NavButton(props) {
  return (
    <NavLink to={props.link} className="display: block">
      <li className="sm:col-start-3 lg:col-start-4 border-solid border-4 border-cyan rounded-md bg-cyan hover:bg-hover-cyan hover:border-hover-cyan active:bg-cyan active:border-cyan shadow-sm px-md text-base">
        {props.text}
      </li>
    </NavLink>
  );
}

export default NavButton;
