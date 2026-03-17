import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetRI from './CartWidgetRI';
import { NavLink } from 'react-router-dom';
import '../assets/css/NavBarBS.css';

function NavBarBS() {
    console.log('Navbar')
    return (
        <Navbar expand="lg" className="custom-navbar" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to='/'>
                    <img src='../exsoa.webp' alt='Exsoa' className="navbar-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link 
                            as={NavLink} 
                            to='/' 
                            className={({ isActive }) => isActive ? 'nav-link-custom active' : 'nav-link-custom'}
                            end
                        >
                            Home
                        </Nav.Link>
                        
                        <NavDropdown 
                            title="PRODUCTOS" 
                            id="basic-nav-dropdown" 
                            className="nav-dropdown-custom"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item 
                                as={NavLink} 
                                to="/category/Nuevos"
                                className={({ isActive }) => isActive ? 'dropdown-item-custom active' : 'dropdown-item-custom'}
                            >
                                ✨ Nuevos
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item 
                                as={NavLink} 
                                to="/category/Ofertas"
                                className={({ isActive }) => isActive ? 'dropdown-item-custom active' : 'dropdown-item-custom'}
                            >
                                🔥 Ofertas
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item 
                                as={NavLink} 
                                to="/category/Mas Vendidos"
                                className={({ isActive }) => isActive ? 'dropdown-item-custom active' : 'dropdown-item-custom'}
                            >
                                ⭐ Más Vendidos
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidgetRI />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarBS;