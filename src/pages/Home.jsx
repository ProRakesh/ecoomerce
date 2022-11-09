import React from 'react'
import Hero from '../Component/HeroSection/Hero'
import Mobile from '../Component/Mobiledisplay/Mobile'
import Circle from "../Component/Images/hero.png"
import Contactform from '../Component/Contactform/Contactform'


const Home = () => {
  const data = {
    name: "WORLD'S BEST SMARTPHONE",
    img: Circle
  };
  return (
    <><Hero myData={data}/>
    <Mobile/>
    </>
  )
}

export default Home