import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/useContext";

const ItemDetail = ({ dataDetail }) => {
  const [contador, setContador] = useState("0");
  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setContador(cantidad);
    addItem(dataDetail, cantidad);
  };

  return (
    <>
      <div className="itemDetail">
        <div>
          <img
            className="imageStockDetail"
            src={dataDetail.image}
            alt="Error al cargar"
          />
        </div>
        <div className="cardDetail">
          <p className="OfertaDetail">Disfruta de la oferta hoy</p>
          <h2 className="titleDetail">
            Descuento por reserva anticipada en {dataDetail.title}
          </h2>
          <p className="descriptionDetail">{dataDetail.description}</p>
          <h3 className="priceDetail">Desde ARG${dataDetail.price} Imp incl</h3>

          <ItemCount
            nameProduct={dataDetail.title}
            stock={10}
            initial={1}
            onAdd={onAdd}
          />
          <p>Cantidad: {contador}</p>
          <div className="botonesDetail">
            <Link to={`/cart`}>
              <button className="botonItemDetail">Quiero Reservar</button>
            </Link>
            <Link to={`/`}>
              <button className="botonItemDetail btnBlanco">Ver más</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="infoLugar ">
        <div className="container60 datosLugar">
          <div className="titleLugar">
            <h2>Experiencias Gastronomicas</h2>
            <p>{dataDetail.comida}</p>
          </div>
          <div className="imgInfo">
            <img src={dataDetail.comidaImage} alt="Gastronomia" />
          </div>
        </div>
        <div className="container60 datosLugar textRight ">
          <div className="imgInfo">
            <img src={dataDetail.culturaImage} alt="Cultura" />
          </div>
          <div className="titleLugar">
            <h2>Nuestra Cultura</h2>
            <p>{dataDetail.cultura}</p>
          </div>
        </div>
        <div className="container60 datosLugar ">
          <div className="titleLugar">
            <h2>Naturaleza y Aire libre</h2>
            <p>{dataDetail.naturaleza}</p>
          </div>
          <div className="imgInfo">
            <img src={dataDetail.naturalezaImage} alt="Naturaleza" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
