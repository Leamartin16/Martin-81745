import { useState } from "react"

const ItemCount = (props) => {
    const [count, setCount] = useState(1)




    const sumar = () => {
        if (count < props.stock) {
            setCount(count + 1)
        }

    }
    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }

    }

    const shop = () => {
        props.onAdd(count)
    }




    return (
        <>
            {
                props.stock > 0
                    ? <div>
                        <div className="count-controls">
                            <button onClick={restar}>-</button>

                            <span>{count}</span>

                            <button onClick={sumar}>+</button>
                        </div>

                        <button className="btn-add-to-cart" disabled={count === 0 || props.stock === 0} onClick={() => props.onAdd(count)}>
                            Comprar
                        </button>
                    </div>
                    : <p>Lo sentimos no tenemos stock 😭</p>
            }
        </>
    )
}
export default ItemCount