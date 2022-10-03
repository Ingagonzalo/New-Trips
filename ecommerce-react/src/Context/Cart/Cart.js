
import { CartContext } from '../useContext';
import './Cart.css'
import { Link } from 'react-router-dom';
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../../utils/firebase'
import React, { useContext, useState } from 'react';



const Cart = () => {
    const {productCartList, removeItem, clearCart, TotalPrice} = useContext(CartContext);
    const [ orderId, setOrderId ] = useState("");

    const handleClick = (event) => {
        event.preventDefault();
        // console.log("Orden enviada", event);
        // console.log("nombre", event.target[0].value);
        const order = {
          buyer: {
            name: event.target[0].value,
            phone: event.target[1].value,
            email: event.target[2].value,
          },
          items: productCartList,
          total: TotalPrice(),
          date: getDate(),
        };
        console.log("order", order);
    
        const queryRef = collection(db, "orders");
        addDoc(queryRef, order).then((response) => {
          console.log("response", response);
          setOrderId(response.id);
          clearCart()
        });
      };
    
      const getDate = () => {
        const today = new Date()
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        return date
     
      };

    return (
        <div className='cart'>
            {!orderId ?
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
                            <form onSubmit={handleClick}>
                                <label>Nombre:</label>
                                <input type="text"></input>
                                <label>Telefono:</label>
                                <input type="text"></input>
                                <label>Correo:</label>
                                <input type="email"></input>
                                <button type="submit">Enviar pedido</button>
                            </form>
                            
                        </div>
                        :
                        <div className='carritoVacio'>
                            
                            <p className='carritoElement '><strong>El carrito está vacío</strong></p>
                            <Link to='/' className='carritoElement buttonCarrito'><button>Ver productos</button></Link>
                        </div>
                    }
                </div>
                    :
                    <h3 className='carritoElement'>Tu orden ha sido registrada!</h3>
            }
     </div>
    )
}

export default Cart;


