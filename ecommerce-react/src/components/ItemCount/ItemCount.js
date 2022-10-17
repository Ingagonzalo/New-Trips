import React from "react";
import './ItemCount.css';
import { useState } from "react";
import '../boton/Boton.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [ItemCount, setItemCount] = useState(initial);
    const sumar = () => {

        if (ItemCount < stock) {
            setItemCount(ItemCount + 1);
        } else {
            setItemCount(1);
        }
    }
    const restar = () => {
        if (ItemCount > 1) {
            setItemCount(ItemCount - 1);
        } else {
            setItemCount(stock);
        }
    }

    return (
        <div className="counterContainer">

            <div className="counter">
                <div className="addPerson">
                    <div className="icon itemCountButton" onClick={restar}><h4>-</h4></div>
                    <div className=" itemCount">{ItemCount} personas</div>
                    <div className="icon itemCountButton" onClick={sumar}><h4>+</h4></div>
                </div>
                <button className="buttonCount button type2" onClick={() => onAdd(ItemCount)}>Agregar al carrito</button>
            </div>

        </div>
    );
}

export default ItemCount;