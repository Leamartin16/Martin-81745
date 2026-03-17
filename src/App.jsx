
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBs';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
//3. importamos al proveedor para dar acceso al contexto
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';
import Footer from './components/Footer'


function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <NavBarBS />
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje='Exsoa' />} />
          <Route path='/category/:type' element={<ItemListContainer mensaje='Colección Exclusiva' />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App