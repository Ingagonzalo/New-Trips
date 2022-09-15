import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

const ItemDetail = ({dataDetail}) => { /*Exporto como se va a ver */
const [contador, setContador] = useState("0");

    const onAdd = (cantidad)=>{
        setContador(cantidad)
    }


  return (
    <div className="itemDetail">
        <div>
            <img className="imageStockDetail" src={dataDetail.image} alt="Guitarra" />
        </div>
      
      <div className="cardDetail">
        <h2 className="titleDetail">{dataDetail.title}</h2>
        <h3 className="priceDetail">{dataDetail.price}</h3>
        <p className="descriptionDetail">{dataDetail.description}</p>
        <ItemCount nameProduct={dataDetail.title} stock={10} initial={1} onAdd={onAdd} /> 
        <p>Cantidad: {contador}</p>
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default ItemDetail