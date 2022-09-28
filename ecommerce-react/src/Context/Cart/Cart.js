import React, { useContext } from 'react';
import { CartContext } from '../useContext';
import './Cart.css'
import { Link } from 'react-router-dom';
import {addDoc, collection,getFirestore} from 'firebase/firestore'




const Cart = () => {
    const {productCartList, removeItem, clearCart, TotalPrice} = useContext(CartContext);


    const order={
        buyer:{
            name: 'Gonzalo',
            email: 'Ingagonzalo1999@gmail.com',
            phone:'121343213',
            address: 'something',

        },
        items:productCartList.map(product =>({id:product.id, title:product.title, price:product.price, quantity:product.quantity })),
        total:TotalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    }

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
                    <h3 className='carritoElement'>Total: ${TotalPrice()}</h3>
                    <button onClick={()=>clearCart()} className='carritoElement buttonCarrito'>Vaciar carrito</button>
                    <button onClick={handleClick} className='carritoElement buttonCarrito'>Emitir Compra</button>
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


