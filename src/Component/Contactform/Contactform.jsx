import React from 'react'
import '../../AllCss/Contact.css'



const Contactform = () => {



  
   
    




  return (
    <>
    
    
 <div className="form">

  <span>Contact us</span> 

      <form
      
       action='https://formspree.io/f/xvoywzde'
        method="POST" >

      <input 
      type="text" 
      name="Name" 
      placeholder='Name' 
      required  
      autoComplete="off"/>

      <input
       type="email" 
       name='Email'
        placeholder='Email' 
        required/>
      <textarea type="textarea"
       name='Message' 
       rows="4" cols="50"
        placeholder='Message'
         required />
      <button type='submit'  className='herobtn'> <span> Send </span></button>  

</form>

</div>



















          
<div className="map">
<div className="mapouter">
    <div className="gmap_canvas">
        <iframe className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" 
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Rajasthan&amp;t=p&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe></div>
           
           
         </div>
         </div> 
    </>
  )
}

export default Contactform

