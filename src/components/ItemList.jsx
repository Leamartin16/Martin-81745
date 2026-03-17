import React from 'react'
import Item from './Item'

const ItemList = ({ data }) => {
  return (
    <>
      {data.map(prod => (
        <Item key={prod.id} prod={prod} />
      ))}
    </>
  )
}

export default ItemList