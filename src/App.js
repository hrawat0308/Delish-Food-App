import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import NavbarComponent from "./components/Navbar-component";
// import Menu from './components/Menu';
import CartModal from "./components/CartModal";
import { useSelector } from 'react-redux'; 

function App() {
  const cartShowing = useSelector(state => state.isCartShowing.isCartShowing);

  return (
    <Fragment>
       <NavbarComponent />
       {/* <Menu />  */}
      <CartModal show={cartShowing} />
    </Fragment>
  );
}

export default App;
