
import { getProductos } from "../mock/asyncData"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListCountainer = (props) => {
    const [data, setData] = useState([])

    useEffect(()=>{
        getProductos()
        .then((res)=> setData(res))
        .catch((error)=> console.log(error))
        },[])

    console.log('imteListContainerdata', data)

    return (
        <div> 
            <h1>{props.mensaje}</h1>
            {/* {data.map((prod)=> <p key={prod.id}>{prod.name}</p>)} */}
            <ItemList data={data}/>
        </div>
    )
}   
export default ItemListCountainer;