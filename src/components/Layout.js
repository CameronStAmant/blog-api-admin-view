import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = (props) => {
  return (
    <div className="App">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
