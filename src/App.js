import { Fragment, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import NavbarComponent from "./components/Navbar-component";
import CartModal from "./components/CartModal";
import { useSelector } from 'react-redux'; 



function App() {
  const cartShowing = useSelector(state => state.isCartShowing.isCartShowing);
  return (
    <Fragment>
       <NavbarComponent />
      <CartModal show={cartShowing} />
    </Fragment>
  );
}

export default App;
