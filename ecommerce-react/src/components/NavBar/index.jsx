import LogoWeb from '../../assets/images/LogoTravel.png'
import Counter from "../Counter/Counter";
import {Link, NavLink} from "react-router-dom"

const NavBar = () => {
  
  return (
    <div className="nav_container">
      <div className="nav_menu">
        <Link to='/home'> <img to='/home' className='logoNavBar' src={LogoWeb} alt="" /> </Link>
      </div>

      <div className="nav_menu">
        {/*<NavLink to='/productos' className={({isActive}) =>isActive ? "activa nav_item" : "inactiva nav_item"} > Catálogo </NavLink> proximo menu desplegable*/}
        <NavLink to='/home' className={({isActive}) =>isActive ? "activa nav_item" : "inactiva nav_item"}> Home </NavLink>
        <NavLink to='/hoteles' className={({isActive}) =>isActive ? "activa nav_item" : "inactiva nav_item"}> Hoteles </NavLink>
        <NavLink to='/productos/landing-guitarras' className={({isActive}) =>isActive ? "activa nav_item" : "inactiva nav_item"}> Promociones </NavLink>
        <NavLink to='/productos/landing-bajos' className={({isActive}) =>isActive ? "activa nav_item" : "inactiva nav_item"}> Beneficios </NavLink>
        <NavLink to='/galeria' className={({isActive}) =>isActive ? "activa nav_item" : "inactiva nav_item"}  >
          Servicios
        </NavLink>
        <NavLink to='/contacto' className={({isActive}) =>isActive ? "activa nav_item" : "inactiva nav_item"}>Contacto</NavLink>


      </div>


      <div className="nav_menu">
        <a href="" className="nav_item"><i class="fa-solid fa-magnifying-glass"></i></a>
        <a href="" className="nav_item"><i class="fa-solid fa-user"></i></a>
        <Counter/>
      </div>

    </div>
  );
};

export default NavBar;
