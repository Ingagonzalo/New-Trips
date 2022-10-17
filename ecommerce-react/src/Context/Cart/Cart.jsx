import { CartContext } from "../useContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebase";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { productCartList, removeItem, clearCart, TotalPrice } =
    useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
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

    const queryRef = collection(db, "orders");
    addDoc(queryRef, order).then((response) => {
      setOrderId(response.id);
      clearCart();
    });
  };

  const getDate = () => {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    return date;
  };

  return (
    <div className="cart">
      {!orderId ? (
        <div>
          <div className="cart carritoElement">
            {productCartList.map((item) => {
              return (
                <div className="itemEnCarrito">
                  <img
                    className="imageCarrito"
                    src={item.image}
                    alt="Guitarra"
                  />
                  <div className="datosCarrito ">
                    <p className="tituloCarrito">{item.title}</p>
                    <div className="infoCarrito">
                      <p className="cantidadCarrito">
                        Experiencia reservada para{" "}
                        <strong>{item.quantity}</strong> personas!
                      </p>
                      <p className="precioCarrito">
                        Vas a disfrutar de este viaje por solo{" "}
                        <strong>ARG${item.price}</strong>
                      </p>
                      <div className="buttonCarrito ">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="remover"
                        >
                          Remover producto
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {productCartList.length > 0 ? (
            <div className="totalCarrito">
              <div className="botonesCart">
                <button
                  className=" buttonReserva button type2"
                  onClick={() =>
                    (document.querySelector("#formulario").style.display =
                      "flex")
                  }
                >
                  {" "}
                  Reservar
                </button>
                <button
                  onClick={() => clearCart()}
                  className="buttonReserva clearCarrito button type2 "
                >
                  Vaciar carrito
                </button>
              </div>
              <form
                id="formulario"
                className="form__group fiel"
                onSubmit={handleClick}
              >
                <button
                  className="cierreForm"
                  onClick={() =>
                    (document.querySelector("#formulario").style.display =
                      "none")
                  }
                >
                  X{" "}
                </button>
                <h2 className="tituloForm">Datos de reservación</h2>
                <div className=" formElement form__group field">
                  <input
                    type="input"
                    className="form__field"
                    placeholder="Nombre"
                    required
                  />
                  <label for="name" className="form__label">
                    Nombre
                  </label>
                </div>
                <div className=" formElement form__group field">
                  <input
                    type="input"
                    className="form__field"
                    placeholder="Teléfono"
                    required
                  />
                  <label for="telefono" className="form__label">
                    Teléfono
                  </label>
                </div>
                <div className=" formElement form__group field">
                  <input
                    type="email"
                    className="form__field"
                    placeholder="Email"
                    required
                  />
                  <label for="email" className="form__label">
                    Email
                  </label>
                </div>
                <h3 className="priceTotal">
                  Total del viaje:{" "}
                  <strong className="priceTotal">${TotalPrice()}</strong>
                </h3>
                <button className=" buttonReserva button type2" type="sumbit">
                  {" "}
                  Confirmar Reserva
                </button>
              </form>
            </div>
          ) : (
            <div className="carritoVacio">
              <p className="carritoElement ">
                <strong>El carrito está vacío</strong>
              </p>
              <Link to="/" className="carritoElement buttonCarrito">
                <button>Ver productos</button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="orden">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/coderhouse-react-4ef4c.appspot.com/o/ViajePromo1.jpg?alt=media&token=e42dedd8-dcef-47ea-ba1c-ff7cc5a91589"
            alt="Imagen orden correcta"
          />
          <h3 className="carritoElement ordenOk">
            Tu orden ha sido registrada!
          </h3>
          <h4 className="h4Link backOrden">
            {" "}
            Regresa a la{" "}
            <NavLink to="/">
              {" "}
              <strong className="strongH4">Home</strong>{" "}
            </NavLink>
          </h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
