import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../assets/css/Item.css'

const Item = ({ prod }) => {
    // Si no hay producto, no renderizar
    if (!prod) return null;

    return (
        <Card className="product-card">
            <div className="product-image-container">
                <Card.Img 
                    variant="top" 
                    src={prod.img || 'https://via.placeholder.com/300'} 
                    className="product-image"
                />
                {prod.category === 'Ofertas' && (
                    <span className="product-badge">OFERTA</span>
                )}
            </div>
            <Card.Body className="product-info">
                <Card.Title className="product-name">{prod.name || 'Producto'}</Card.Title>
                <Card.Text className="product-description">
                    {prod.description || 'Sin descripción'}
                </Card.Text>
                <div className="product-price">${prod.price || 0}</div>
                <Card.Text className={`product-stock ${prod.stock === 0 ? 'out-of-stock' : ''}`}>
                    {prod.stock > 0 ? `Stock: ${prod.stock}` : 'Sin stock'}
                </Card.Text>
                <Link className="btn-details" to={`/item/${prod.id}`}>
                    VER MÁS
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Item