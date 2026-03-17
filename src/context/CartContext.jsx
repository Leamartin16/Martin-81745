import {createContext, useEffect, useState} from 'react'

export const CartContext = createContext()

const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(carritoLS)
    
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    const addItem = (item, qty) => {
        if (isInCart(item.id)) {
            setCart(
                cart.map((prod) => {
                    if (item.id === prod.id) {
                        return { ...prod, quantity: prod.quantity + qty }
                    } else {
                        return prod
                    }
                })
            )

        } else {
            //no existe, lo agrego
            setCart([...cart, { ...item, quantity: qty }])
        }
    }

    //borrar el carrito entero (CART VIEW Y CHECKOUT)
    const clear = () => {
        setCart([])
    }

    //elimine un item del carrito (CARTVIEW)

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    //retornar in bool (context)
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }


    //total a pagar
        const total = ()=> {
            return cart.reduce((acc, prod)=> acc += (prod.price * prod.quantity), 0)
        }
          //OPCIONAL total a pagar C/ IMP
        const totalConImp = ()=> {
            return cart.reduce((acc, prod)=> acc += (prod.price * prod.quantity), 0.5)
        }

    //total de items
        const totalQty = ()=> {
            return cart.reduce((acc, prod)=> acc += prod.quantity,0)
        }


    //OPCIONAL
    const itemQty = (id) => {
        const itemIn = cart.find((prod) => prod.id === id)
        if (itemIn) {
            return itemIn.quantity
        } else {
            return 0
        }
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, itemQty, totalQty, total }}>
            {/* {props.children} */}
            {children}
        </CartContext.Provider>
    )
}