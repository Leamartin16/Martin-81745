import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/asyncData'
import { useParams } from 'react-router-dom'
import { Loader } from './Loader'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import '../assets/css/ItemDetail.css';



const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const [invalid, setInvalid] = useState(null)
    const { id } = useParams()
    


    useEffect(() => {

        const prodRef = doc(db, "productos", id)
        getDoc(prodRef)
        .then((res) => {
        if (res.data()) {
            setDetail({ id: res.id, ...res.data() })
        } else {
            setInvalid(true)
        }
        })
            .catch ((error) => console.log(error))
            .finally(() => setLoading(false))
    },[id])

    if(invalid){
      return(
        <div>
          <h1> ⚠️El producto no existe ⚠️</h1>
          <Link className='btn btn-dark' to='/'>Volver a Home</Link>
        </div>
      )
    }
    

return (
    <div>
        {loading ? <Loader text='Cargando detalle...' /> : <ItemDetail detail={detail} />}
    </div>
    
    
)
}

export default ItemDetailContainer