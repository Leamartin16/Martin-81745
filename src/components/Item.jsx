import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Item({ name, price, img, description }) {
    return (
        <div className="card h-100 shadow-sm">
            <img src={img} className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-muted">{description}</p>
                <p className="card-text fw-bold">${price}</p>
            </div>
        </div>
    );
}

export default Item;