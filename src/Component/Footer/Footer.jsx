import  './Footer.css'
import {TfiHeadphoneAlt} from "react-icons/tfi"
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    
    <footer className="footer">

<div className="leftfooter">
<span>About The Store</span>
<span>Our mission statement is to provide the absolute best customer 
    experience available in the Electronic industry 
    without exception.</span>

<div className='contactfoot'>
<span><TfiHeadphoneAlt className='headphones'/></span>
<div className="call24">
<span>Got Question? Call us 24/7!</span>
<span>+91123458678</span>
</div>
</div>

</div>
<div className="midfooter">
<span>Link</span>


 <div className='links'>

    <li><NavLink>Home</NavLink> </li>
    <li><NavLink>About</NavLink> </li>
    <li><NavLink>Product</NavLink> </li>
    <li><NavLink>Cart</NavLink> </li>
   
    </div> 



</div>
<div className="rightfooter">
<span>Subscribe To Our Newsletter</span>


 <div className="newsletter">
  <form action="https://formspree.io/f/xvoywzde" method='POST'>
<input type="email" placeholder='Email' name='Email' required />
<button>subscribe</button>
</form>



</div>

<p>
I would like to receive news and special offers.</p> 
<div className="addr">
<span>Add:55,New Delihi,India</span>
<span>Mail:demowebsite@gmail.com</span>

</div> 


</div>


    </footer>
    <div className="copyright">

<span>© Copyright 2022-</span> <span>Rakesh Patel</span>

</div>
    
    
    
    </>
  )
}

export default Footer