import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className="display: grid grid-cols-3 grid-rows-layout min-h-screen grid-flow-col p-0 m-0 list-none">
      <Header authState={props.authState} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
