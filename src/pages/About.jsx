import React from 'react'
import { NavLink } from 'react-router-dom'
import "../AllCss/About.css"

const About = () => {


  return (
    <>
    
    <div className="about">
    <div className="leftcontact">
      <span>Enjoy the internet with the latest phone</span>
</div>
<button className='herobtn'><NavLink to="/Product"> Shop Now</NavLink> </button>


  </div>
    </>
  )
}

export default About