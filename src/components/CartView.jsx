import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import '../assets/css/CartView.css';

const CartView = () => {
    const { cart, removeItem, clear, total } = useContext(CartContext)
    return (
        <div className="cart-container">
            <h1 className="cart-title">Tu carrito 🛒</h1>
            <div className="cart-items">
                {
                
                    cart.map((compra) => (
                        <div key={compra.id} className="cart-item">
                            <img src={compra.img} alt={compra.name} className="cart-item-image" />
                            <div className="cart-item-info">
                                <div className="cart-item-name">{compra.name}</div>
                                <div className="cart-item-price">${compra.price},00</div>
                            </div>
                            <div className="cart-item-quantity">
                                <span>Cantidad: {compra.quantity}</span>
                            </div>
                            <div className="cart-item-subtotal">
                                <span>Precio final: </span>
                                <strong>${compra.quantity * compra.price},00</strong>
                            </div>
                            <button
                                className="cart-item-remove"
                                onClick={() => removeItem(compra.id)}
                            >
                                ✕
                            </button>
                        </div>
                    ))}
            </div>

            <div className="cart-total">
                <span className="cart-total-label">Total a pagar:</span>
                <span className="cart-total-amount">${total()},00</span>
            </div>

            <div className="cart-actions">
                <button className="btn-clear-cart" onClick={clear}>
                    Vaciar Carrito
                </button>
                <Link className="btn-checkout" to='/checkout'>
                    Terminar compra
                </Link>
            </div>
        </div>
    )
}

export default CartView