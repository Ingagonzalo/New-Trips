import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import { CartProvider } from './Context/useContext';
import Cart from './Context/Cart/Cart';
import Home from './components/Home/Home';
import ContactoPage from './components/ContactoPage';



function App() {
  return (
<CartProvider>
    <BrowserRouter>
          <div className='App'>
            <div>
              <NavBar/>

              <Routes>
                
                <Route path='/' element={<Home/>}></Route>
                <Route path='/productos/:categoryId' element={<ItemListContainer/>}></Route>
                <Route path='/productos/:categoryId/:detalleId' element={<ItemDetailContainer/>}> </Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/contacto' element={<ContactoPage/>}></Route>
            
              </Routes>
              <Footer/>
            </div>
          </div>
    </BrowserRouter>
</CartProvider>
  


  );
}

export default App;
