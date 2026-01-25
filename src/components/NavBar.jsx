import "../assets/css/NavBar.css"
import logoSrc from "../assets/react.svg"
import CartWidget from "./CartWidget";

const NavBar = () => {
    console.log('NavBar');
    return (
        <nav className= 'nav-container'>
            <a className= 'anchor-nav' href="">
                <img src={logoSrc} alt="Logo" width="40" height="40" />
            </a>
            <a className= 'anchor-nav' href="">Nuevos</a>
            <a className= 'anchor-nav' href="">Ofertas</a>
            <a className= 'anchor-nav' href="">Mas Vendidos</a>
            <CartWidget/>
        </nav>
    );
};

export default NavBar