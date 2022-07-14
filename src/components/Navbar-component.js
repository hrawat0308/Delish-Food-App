import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";

const NavbarComponent = function(){
    return(
        <Navbar bg="dark" variant="dark" fixed="">
            <Container >
                <Navbar.Brand><h1>Delish</h1></Navbar.Brand>
                <Nav >
                    <Button size="lg">Cart <Badge pill bg="danger">4</Badge> </Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;

