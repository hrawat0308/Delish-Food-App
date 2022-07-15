import { Fragment } from "react";
import { Navbar, Container } from "react-bootstrap";
import BannerImageHeader from "./BannerImageHeader";
import CartButton from "./CartButton";

const NavbarComponent = function(){
    return(
        <Fragment>
        <Navbar bg="dark" variant="dark" fixed="">
            <Container >
                <Navbar.Brand><h1>Delish</h1></Navbar.Brand>
                <CartButton />
            </Container>
        </Navbar>
        <BannerImageHeader />
        </Fragment>
    );
};

export default NavbarComponent;

