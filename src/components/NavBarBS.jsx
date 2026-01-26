
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";


function NavBarBS() {


return (
    <Navbar expand="lg" className="bg-body-tertiary" >
        <Container >
            <Navbar.Brand href="#home" ><img src={"../public/store.png"} alt="Logo" width="50" height="50" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Nuevos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Ofertas
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Mas Vendidos</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <CartWidget />
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default NavBarBS;