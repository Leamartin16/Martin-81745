import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'
import '../assets/css/Checkout.css'

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validMail, setValidMail] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clear } = useContext(CartContext)

    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value

            }
        )
    }



    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!buyer.name || !buyer.lastname || !buyer.address || !buyer.email || !validMail) {
            setError('Por favor complete todos campos')
        } else if (buyer.email !== validMail) {
            setError('Los correos no coinciden')
        } else {
            setLoading(true)
            setError(null)
            let order = {
                comprador: buyer,
                compras: cart,
                total: total(),
                fecha: serverTimestamp()
            }
            const orderColl = collection(db, "orders")
            addDoc(orderColl, order)
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))
        }
    }

    if (!cart.length && !orderId) {
        return <EmptyCart />
    }

        return (
        <>
            {orderId ? (
                <div className="checkout-container order-confirmation">
                    <h1>Muchas gracias por tu compra! 🥳</h1>
                    <h3>Su orden es: {orderId}</h3>
                    <Link className="btn-home" to='/'>Volver a Home</Link>
                </div>
            ) : (
                <div className="checkout-container">
                    <h1>Completa los campos para terminar la compra</h1>
                    {error && <span className="error-message">{error}</span>}
                    <form onSubmit={finalizarCompra}>
                        <input
                            name='name'
                            placeholder='Ingrese su nombre'
                            className='form-control'
                            type="text"
                            onChange={buyerData}
                        />
                        <input
                            name='lastname'
                            placeholder='Ingrese su apellido'
                            className='form-control'
                            type="text"
                            onChange={buyerData}
                        />
                        <input
                            name='address'
                            placeholder='Ingrese su dirección'
                            className='form-control'
                            type="text"
                            onChange={buyerData}
                        />
                        <input
                            name='email'
                            placeholder='Ingrese su correo'
                            className='form-control'
                            type='email'
                            onChange={buyerData}
                        />
                        <input
                            name='secondemail'
                            placeholder='Repita su correo'
                            className='form-control'
                            type="email"
                            onChange={(e) => setValidMail(e.target.value)}
                        />
                        <button
                            type='submit'
                            className='btn-submit'
                            disabled={loading}
                        >
                            {loading ? 'Procesando Compra...' : 'Generar Orden'}
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}

export default Checkout