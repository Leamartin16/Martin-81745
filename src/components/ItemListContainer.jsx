import { getProducts, productos } from "../mock/asyncData"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { Loader } from "./Loader"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"
import '../assets/css/ItemListContainer.css'

const ItemListContainer = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const { type } = useParams()



    useEffect(() => {
        setLoading(true)
        // ref coollect (1)
        const prodColl = type
            ? query(collection(db, "productos"), where("category", "==", type))
            : collection(db, "productos")
        // traer la info (2)
        getDocs(prodColl)
            .then((res) => {
                // limpiar data (3)
                const list = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setData(list)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [type])

    // const subirProd = ()=> {
    //     console.log('SUBIENDO')
    //     const collASubir = collection(db, "productos")
    //     productos.map((prod)=> addDoc(collASubir, prod))
    // }




        return (
        <>
            {loading ? (
                <Loader text={type ? 'Cargando Categoría...' : 'Cargando todos los productos...'} />
            ) : (
                <div className="products-container">
                    <h1 className="section-title">
                        {props.mensaje || "EXOA"}
                        {type && <span> - {type}</span>}
                    </h1>
                    
                    {data.length === 0 ? (
                        <p className="no-products">No hay productos disponibles</p>
                    ) : (
                        <div className="products-grid">
                            <ItemList data={data} />
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default ItemListContainer