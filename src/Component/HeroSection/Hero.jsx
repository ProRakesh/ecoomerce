import React from 'react'
import "./Hero.css"
const Hero = ({ myData }) => {
  const { name,img } = myData;
  return (
    <>
    <div className="hero">

        <div className="lefthero">

<span> {name} </span>
<button >Shop Now</button>


        </div>
        <div className="righthero">

        <img src={img} alt="" />



        </div>
    </div>
    
    
    
    
    </>
  )
}

export default Hero