import React from "react";
import './Item.css';
import { Link } from "react-router-dom";
import '../../boton/Boton.css'
const Item = ({ image, title, price, category, description, id }) => {
  return (
    <div className="containerItem">

      <div className="card">
        <div className="imageStock">
          <img src={image} alt="Stock" {title} />
        </div>

        <div className="infoItem">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <h3 className="price">Desde ARG${price} Imp incl</h3>
        </div>
        <Link to={`/viajes/${category}/${id}`}>
          <div className="container ">
            <button className="button type2 ">
              Ver mas
            </button>
          </div></Link>
      </div>
    </div>
  );
};

export default Item;

