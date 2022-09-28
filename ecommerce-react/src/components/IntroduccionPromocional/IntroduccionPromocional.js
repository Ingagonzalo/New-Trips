import React from 'react'
import  './IntroduccionPromocional.css'
import LogoClean from '../../assets/images/LogoTravelClean.png'


const IntroduccionPromocional = () => {
  return (
    <div className='promo'>
       <div className='container40'>
          <img className='logoPromo' src={LogoClean}></img>
          <h2 className='tituloPromo'>Viaja con nosotros</h2>
          <h3 className='subTituloPromo'>Descrubre una nueva forma de crear recuerdos</h3>
          <p className='introPromo'>Argentina es un país inmenso, todo un continente que se extiende de norte a sur a lo largo de toda Sudamérica.
  
          Así que desde la selva tropical en el norte con las Cataratas de Iguazú, su calor y sus mosquitos…. a la Tierra de Fuego o los glaciares en el sur. Vivirás todo tipo de climas y de contrastes que te puedas imaginar, estando siempre dentro del mismo país.</p>
          <p>
  Prepárate porque, como buen país con orígenes españoles e italianos, todo gira en torno a la comida. Empezarás por un asado, pero seguirás probando unas buenas pastas. ¿Que tienes un día muy movido con mucha caminata y poco tiempo para sentarte en un restaurante? Pues aprovecha para probar las mejores pizzas al paso en centro de Buenos Aires o un choripán. O comerte el mejor sándwich de milanesa mirando al glaciar perito moreno. Y podría seguir porque cada lugar tiene sus comidas típicas, las empanadas salteñas, el cordero patagónico en el sur, el centollo en Ushuaia, los tamales y humitas en el noroeste argentino. ¡Y los dulces! Los dulces podrían ser un motivo a parte para visitar argentina.</p>
  <p>¿Te gusta el trekking? Tenemos una ciudad que fue declarada la capital del trekking, apúntala en tu recorrido: El Chaltén. Puedes bucear, navegar entre glaciares, o caminar sobre ellos, si quieres encontrar un barco para ir a la Antártida, Ushuaia es tu ciudad.
  
  Podrás ver animales salvajes sueltos, esquiar, escalar, sentir la fuerza de una cascada bañándote.
  </p>
       </div>
    </div>
  )
}

export default IntroduccionPromocional