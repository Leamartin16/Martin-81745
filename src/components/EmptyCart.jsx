import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/EmptyCart.css' 

const EmptyCart = () => {
    return (
        <div className="empty-cart-container">
            <h1>Tu carrito esta vacio!</h1>
            <h2>Te invitamos a ver nuestros productos</h2>
            <Link className="btn-empty-cart" to='/'>Ir a home</Link>
        </div>
    )
}

export default EmptyCart