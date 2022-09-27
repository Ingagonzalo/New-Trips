import React, { useContext } from 'react';
import { CartContext } from '../useContext';
import './Cart.css'
import { Link } from 'react-router-dom';




const Cart = () => {
    const {productCartList, removeItem, clearCart, getTotalPrice} = useContext(CartContext);

    return (
        <div>

            <div className='cart carritoElement'>
            
                {
                    productCartList.map((item) => {
                        return (
                            <div className='itemEnCarrito'>  
                            <h2 className='carritoElement'>Carrito:</h2>
                                <img className='imageCarrito' src={item.image} alt="Guitarra" />
                                <div className='datosCarrito '>
                                    
                                    <p className='tituloCarrito'>{item.title}</p>
                                    <div className='infoCarrito'>
                                        <p className='cantidadCarrito'>Experiencia reservada para <strong>{item.quantity}</strong> personas!</p>
                                        <p className='precioCarrito'>Vas a disfrutar de este viaje por solo <strong>ARG${item.price}</strong></p>
                                        <div className='buttonCarrito '>
                                            <button onClick={()=>removeItem(item.id)} className='remover'>Remover producto</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }   
            </div>
            {
                productCartList.length > 0 ?
                <div className='totalCarrito'>
                    <h3 className='carritoElement'>Total: ${getTotalPrice()}</h3>
                    <button onClick={()=>clearCart()} className='carritoElement buttonCarrito'>Vaciar carrito</button>
                </div>
                :
                <div className='carritoVacio'>
                    
                    <p className='carritoElement '><strong>El carrito está vacío</strong></p>
                    <Link to='/' className='carritoElement buttonCarrito'><button>Ver productos</button></Link>
                </div>
            }
        </div>
    )
}

export default Cart;


