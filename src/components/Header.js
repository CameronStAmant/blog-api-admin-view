import NavButton from './NavButton';

const Header = (props) => {
  return (
    <div className="grid grid-cols-3 row-start-1 bg-dark-cyan py-2 text-white text-center text-lg mb-6 bg-gradient-to-t from-dark-cyan to-dark-green">
      <ul className="flex justify-between space-x-3 col-span-full grid-flow-col place-items-center mx-4 p-smd">
        <NavButton link="/" text="Home" />
        <div>
          {!props.authState && <NavButton link="/login" text="Login" />}
          {props.authState && <NavButton link="/logout" text="Log out" />}
        </div>
      </ul>
    </div>
  );
};

export default Header;
