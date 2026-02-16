import {useState} from "react"

const ItemCount = (props) => {
        

        const [count, setCount]= useState(1)
        const [comprar, setComprar]= useState(false)

    const sumar = () => {
    if (count < props.stock){
        setCount(count + 1)
    }

    }
    const restar = () => {
    if (count > 0){
        setCount(count - 1)
    }
}
    return (
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
        </div>
    )
}
export default ItemCount;