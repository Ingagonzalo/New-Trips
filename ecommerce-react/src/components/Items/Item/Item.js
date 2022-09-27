import React  from "react";
import './Item.css';
import { Link } from "react-router-dom";
const Item = ({ image, title, price, category,description,id }) => { /*Exporto como se va a ver */
  return (
    <div className="containerItem">
      
      <div className="card">
        <div className="imageStock">
         <img  src={image} alt="Guitarra" />
        </div>
      
    <div className="infoItem">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <h3 className="price">Desde ARG${price} Imp incl</h3>
    </div>
        <Link to={`/viajes/${category}/${id}`}>
          <button className="botonItem">Ver más</button></Link>
      </div>
    </div>
  );
};

export default Item;

