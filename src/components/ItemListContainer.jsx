import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { getProductos } from "../mock/asyncData"
import ItemList from "./ItemList"

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProductos()
            .then((data) => {
                if (categoryId) {
                    const filtered = data.filter(
                        (prod) => prod.category.toLowerCase().replace(/\s+/g, '') === categoryId.toLowerCase()
                    );
                    setProductos(filtered);
                } else {
                    setProductos(data);
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) return <div className="text-center my-5">Cargando productos...</div>;
    if (error) return <div className="text-center my-5 text-danger">Error: {error}</div>;
    if (productos.length === 0) return <div className="text-center my-5">No hay productos en esta categoría</div>;

    return <ItemList productos={productos} />;
}

export default ItemListContainer;