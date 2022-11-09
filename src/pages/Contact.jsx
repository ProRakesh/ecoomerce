import React from 'react'
import '../AllCss/Contact.css'
import Contactimg from "../Component/Images/contactimg.png"
import Contactform from '../Component/Contactform/Contactform'

const Contact = () => {
  
  return (
    
    <>


    <div className="contact">
    <div className="leftcontact">
      <span>The right phone for <br /> everyone</span>
      <button className='herobtn'>Shop Now</button>
</div>

<div className="rightcontact">
<img src={Contactimg} alt="" />

</div>
  </div>
  <div>

       
 
  <Contactform/>

  </div>
  
  </>
  )
}

export default Contact