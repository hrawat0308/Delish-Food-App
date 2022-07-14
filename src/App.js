import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import NavbarComponent from "./components/Navbar-component";
import Menu from './components/Menu';


function App() {
  return (
    <Fragment>
       <NavbarComponent />
       <Menu /> 
    </Fragment>
  );
}

export default App;
