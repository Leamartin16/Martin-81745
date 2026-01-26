import "../assets/css/NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";

const NavBar = () => {
    console.log('NavBar');
    return (
        <nav className= 'nav-container'>
            <a className= 'anchor-nav' href="">
                <img src={ "../public/store.png"} alt="Logo" width="80" height="80" />
            </a>
            <a className= 'anchor-nav' href="">Nuevos</a>
            <a className= 'anchor-nav' href="">Ofertas</a>
            <a className= 'anchor-nav' href="">Mas Vendidos</a>
            <CartWidget/>
        </nav>
    );
};

export default NavBar