import React from "react";
import './ItemCount.css';
import { useState } from "react";

const ItemCount = ({item, stock, initial, onAdd}) => {
    
    const [ItemCount, setItemCount] = useState(initial);
        const sumar = () => {
            
            if (ItemCount < stock){
                setItemCount(ItemCount + 1);
            } else {
                setItemCount(1);
            }
        }
        const restar = () => {
            if (ItemCount > 1){
                setItemCount(ItemCount - 1);
            } else {
                setItemCount(stock);
            }
        }

    return (
        <div className="counterContainer">

            <div className="counter">
                <div className="icon itemCountButton" onClick={restar}><h4>-</h4></div>
                <div className=" itemCount">{ItemCount} personas</div>
                <div className="icon itemCountButton" onClick={sumar}><h4>+</h4></div>
                <button className="buttonCount" onClick={()=>onAdd(ItemCount)}>Agregar al carrito</button>
            </div>
            
        </div>
    );
}

export default ItemCount;