import React from "react"
import Item from "./Item"
import { Link } from 'react-router-dom';

function ItemList({ productos }) {
    return (
        <div className="container my-4">
            <div className="row">
                {productos.map((prod) => (
                    <div key={prod.id} className="col-md-4 mb-3">
                        <Link to={`/item/${prod.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Item {...prod} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemList