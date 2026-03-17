import { FaCartShopping } from "react-icons/fa6";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import '../assets/css/CartWidgetRI.css';

const CartWidgetRI = ()=> {
    const {cart, totalQty}= useContext(CartContext)
    
    return(
        <Link to="/cart" className="cart-widget-link">
        <div className="cart-widget-container">
            <FaCartShopping className="cart-icon"/>
            {cart.length > 0 && <Badge bg="warning" className="cart-badge">{totalQty()}</Badge>}
        </div>
        </Link>
    )
}
export default CartWidgetRI