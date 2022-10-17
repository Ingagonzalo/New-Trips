import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { CartContext } from "../../Context/useContext";

const Counter = () => {
  const { productCartList, getTotalProducts } = useContext(CartContext);


  return (
    <>

      <NavLink to={'/cart'} className="nav_item prueba"><i className="fa-solid fa-cart-shopping"></i>
        {
          productCartList.length > 0 ?
            <p>{getTotalProducts()}</p>
            :
            ''
        }

      </NavLink>
    </>

  )
}

export default Counter