
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom';

function NavBarBS() {

    const categories = ['Nuevos', 'Ofertas', 'Mas Vendidos'];

    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ padding: '1rem 0' }}>
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img src="/store.png" alt="Logo" width="50" height="50" />
                    Mi Tienda
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            {categories.map((cat) => (
                                <NavDropdown.Item
                                    key={cat}
                                    as={NavLink}
                                    to={`/category/${cat.toLowerCase().replace(' ', '')}`}
                                >
                                    {cat}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarBS;