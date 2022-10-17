import React from 'react'
import BannerPromocional from '../BannerPromocional/BannerPromocional'
import IntroduccionPromocional from '../IntroduccionPromocional/IntroduccionPromocional'
import ItemListContainer from '../Items/ItemListContainer/ItemListContainer'


const Home = () => {
  return (
    <>
     <BannerPromocional/>
    <IntroduccionPromocional />
    <ItemListContainer/>
    
    </>
   
  )
}

export default Home