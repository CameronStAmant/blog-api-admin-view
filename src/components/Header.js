import NavButton from './NavButton';

const Header = (props) => {
  return (
    <div className="grid grid-cols-3 row-start-1 bg-gradient-to-b from-green-900 to-green-400 py-2 text-white text-center text-lg">
      <ul className="flex gap-4 col-span-full grid-flow-col place-items-center mx-4">
        <NavButton link="/" text="Home" />
        {!props.authState && <NavButton link="/login" text="Login" />}
        {props.authState && <NavButton link="/logout" text="Log out" />}
      </ul>
    </div>
  );
};

export default Header;
