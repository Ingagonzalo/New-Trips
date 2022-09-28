import React from 'react'
import ImagenBanner from '../../assets/images/paisajeBanner.jpg'



const BannerPromocional = () => {
  return (
    
    <div className='VideoTienda'>
      <div className='containerImgPromo'>
        <div >  
          <img to='/home' className='paisajeBanner' src={ImagenBanner} alt="" />
        </div>
        <div className='sesgoabajo'></div>
      </div>
      <div className='center'>

      <h2>Permitete conectar con la cultura de los pueblos originarios que honran a la Pachamama, la diosa de la tierra.</h2>
      <p>Salta y sus majestuosos paisajes</p>
     </div>  
    </div>
    
  )
}

export default BannerPromocional