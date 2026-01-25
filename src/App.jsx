import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import ItemCount from './components/ItemCount'
import ItemListCountainer from './components/ItemListCountainer'

function App() {


  return (
    <>

      <NavBar />
      <ItemListCountainer mensaje='Bienvenido a mi App! ' />
      {/* <ItemCount /> */}

    </>
  )
}

export default App
