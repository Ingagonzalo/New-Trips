import React from 'react'
import LogoWebClean from '../../assets/images/LogoTravelClean.png'

const Footer = () => {
  return (
    <section class="footer_bottom">
    <div class="footer_bottom_redes">
        <ul>
            <li><a href="#" target="_blank"> <i class="fa-brands fa-instagram"></i> </a></li>
            <li> <a href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i> </a></li>
            <li><a href="#" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
            <li class="mail"><a href="#" target="_blank"><i class="fa-solid fa-envelope"></i></a></li>
        </ul>
    </div>
    <div class="footer_bottom_logo">
            <img to='/home' className='logoFooter' src={LogoWebClean} alt="" />
    </div>
    <div class="footer_bottom_copyright">
      <small>©2022 - MusicShop, Todos los Derechos Reservados</small>
    </div>
    <div class="footer_bottom_info">

      <a href="./pages/about.html">About Us</a>
    </div>
   </section>
  )
}

export default Footer