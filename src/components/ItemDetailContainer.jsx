import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../mock/asyncData'
import ItemDetail from './ItemDetail'



function ItemDetailContainer() {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getOneProduct(id)
            .then((data) => {
                setProducto(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center my-5">Cargando producto...</div>;
    if (error) return <div className="text-center my-5 text-danger">Error: {error}</div>;
    if (!producto) return <div className="text-center my-5">Producto no encontrado</div>;

    return <ItemDetail {...producto} />;
}

export default ItemDetailContainer;