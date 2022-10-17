import React from "react";
import logoWeb from "../../assets/images/LogoTravel.png";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="footerSup container90">
        <div className="redes datos">
          <ul>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/?hl=es-la" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/home" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ingagonzalo/New-Trips/tree/main/ecommerce-react"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="logoFooter">
          <img src={logoWeb} alt="Logo de la Web" />
        </div>
        <div className="tarjetas datos">
          <ul>
            <li>
              <i className="fa-brands fa-cc-visa"></i>
            </li>
            <li>
              <i className="fa-brands fa-cc-paypal"></i>
            </li>
            <li>
              <i className="fa-brands fa-cc-mastercard"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="datosUtiles">
        <div>
          <i className="fa-solid fa-envelope"></i>
          <h3>Mail</h3>
          <p>NewTrips@gmail.com</p>
        </div>
        <div>
          <i className="fa-solid fa-phone"></i>
          <h3>Telefono</h3>
          <p>11 1353143146</p>
        </div>
        <div>
          <i className="fa-solid fa-location-dot"></i>
          <h3>Ubicacion</h3>
          <p>Buenos Aires, Argentina</p>
        </div>
      </div>
      <div className="copyright container90">
        <p>
          Copyright @ 2022 <strong>New Trips</strong>, Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
