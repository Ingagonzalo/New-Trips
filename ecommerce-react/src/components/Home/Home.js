import React from 'react'
import BannerPromocional from '../BannerPromocional/BannerPromocional'
import IdeasViajes from '../IdeasViajes/IdeasViajes'
import IntroduccionPromocional from '../IntroduccionPromocional/IntroduccionPromocional'

const Home = () => {
  return (
    <>
     <BannerPromocional/>
    <IntroduccionPromocional />
    <IdeasViajes/>
    </>
   
  )
}

export default Home