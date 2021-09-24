import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className="bg-gray-600 min-h-screen">
      <div className="grid grid-rows-layout p-0 m-0 list-none max-w-screen-xl mx-auto min-h-screen bg-gray-100">
        <Header authState={props.authState} />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
