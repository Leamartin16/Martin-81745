import { PiShoppingCartLight } from "react-icons/pi";
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <PiShoppingCartLight color="rgb(43, 191, 220)" fontSize={'2rem'}/>
            <Badge bg="danger">4</Badge>
        </div>
    );
};
export default CartWidget;