
//4. CUANDO QUIERO USAR UN CONTEXTO IMPORTO EL HOOK PARA USAR EL CONTEXT Y EL CONTEXTO QUE QUIERO USAR
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ({ detail }) => {
    const [purchase, setPurchase] = useState(false)
    const { cart, addItem, itemQty, } = useContext(CartContext)
    const [randomDetail, setRandomDetail] = useState('')

    console.log(cart)
    const onAdd = (cantidad) => {
        // alert(`Agregaste al carrito ${cantidad} unidades del producto ${detail.name}`)
        addItem(detail, cantidad)
        setPurchase(true)

    }

    useEffect(() => {
        const details = [
            'Edición limitada',
            'Envío gratis',
            'Oferta exclusiva online',
            'Últimas unidades'
        ];
        const randomIndex = Math.floor(Math.random() * details.length);
        setRandomDetail(details[randomIndex]);
    }, []);


    const stockActualizado = detail.stock - itemQty(detail.id)

        return (
        <div className="item-detail-container"> {/* Contenedor principal */}
            <h2>Detalle de {detail.name}</h2>
            
            <img src={detail.img} alt={detail.name} />
            
            <p>{detail.description}</p>
            
            <p>${detail.price},00</p>
            
            <span className="badge bg-info text-dark fs-6 p-2"> {/* Mantenemos clases de Bootstrap pero con estilos personalizados */}
                {randomDetail}
            </span>
            
            <p>Stock: {stockActualizado} unidades disponibles</p>
            
            {purchase ? (
                <Link className='btn-dark' to='/cart'>Ir al carrito</Link>
            ) : (
                <div className="item-count-container">
                    <ItemCount stock={stockActualizado} onAdd={onAdd} />
                </div>
            )}
        </div>
    )
}

export default ItemDetail