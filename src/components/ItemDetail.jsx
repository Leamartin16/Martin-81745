import React from 'react'
import { useState, useEffect } from 'react';
import ItemCount from './ItemCount'

function ItemDetail({ name, price, stock, description, img }) {
    const [randomDetail, setRandomDetail] = useState('');

    useEffect(() => {
        const details = [
            'Edición limitada',
            'Incluye estuche de regalo',
            'Garantía de 2 años',
            'Envío gratis',
            'Disponible en 3 colores',
            'Resistente al agua',
            'Material reciclado',
            'Edición especial',
            'Oferta exclusiva online',
            'Últimas unidades'
        ];
        const randomIndex = Math.floor(Math.random() * details.length);
        setRandomDetail(details[randomIndex]);
    }, []);

    const handleAddToCart = (quantity) => {
        alert(`Agregaste ${quantity} unidad(es) de ${name} al carrito`);
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={img} alt={name} className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <h2>{name}</h2>
                    <p className="text-muted">{description}</p>
                    <h3 className="text-primary">${price}</h3>
                    <p>Stock disponible: <strong>{stock} unidades</strong></p>
                    <p className="badge bg-info text-dark fs-6 p-2">
                        ✨ Detalle especial: {randomDetail}
                    </p>
                    <div className="mt-4">
                        <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;