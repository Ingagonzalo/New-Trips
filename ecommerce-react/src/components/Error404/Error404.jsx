import React from "react";
import { NavLink } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="error404">
      <div className="imgError404">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/coderhouse-react-4ef4c.appspot.com/o/Error404.png?alt=media&token=20d5a820-16dc-4734-989f-675f9b29f50e"
          alt="Error404"
        />
      </div>
      <div className="txtError404">
        <h2>
          Estamos trabajando para que su experiencia con nosotros sea la más
          perfecta
        </h2>
        <h4 className="h4Link">
          {" "}
          Regresa a la{" "}
          <NavLink to="/">
            {" "}
            <strong className="strongH4">Home</strong>{" "}
          </NavLink>
        </h4>
      </div>
    </div>
  );
};

export default Error404;
