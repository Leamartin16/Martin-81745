import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import './App.css'
import ItemCount from './components/ItemCount'
import ItemListCountainer from './components/ItemListCountainer'
import NavBarBS from './components/NavBarbs';

function App() {


  return (
    <>

      <NavBarBS />
      <ItemListCountainer mensaje='Bienvenido a mi App! ' />
      {/* <ItemCount /> */}

    </>
  )
}

export default App
