import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CgClose, CgMenu } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import "./Navbar.css"
import { Cartstate } from '../Global/Context';



const Navbar = () => {

  const {state:{cart}}=Cartstate()

  const [ismenu,Setmenu]=useState(false)


  return (
    <>
    <div className="header">

      <span className={ismenu===false?' menubar':"menubar closebar"} onClick={()=>{Setmenu(!ismenu)}}><CgMenu/></span>
      <span className={ismenu===false?'crossbar closebar':" crossbar"} onClick={()=>{Setmenu(!ismenu)}}><CgClose/></span>
        <span className='logo'><NavLink to="/">MoboWorld</NavLink> </span>
        <ul className={ismenu===false?'Navmenu ':'Navmenu Navmenuactive'}>

<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/About">About</NavLink></li>
<li><NavLink to="/Product">Products</NavLink></li>
<li><NavLink to="/Contact">Contact</NavLink></li>
<li><NavLink to="/Blog">Blog</NavLink></li>


        </ul>


  
      <div className="cart">
        
        
     <NavLink to="/Cart"> <AiOutlineShoppingCart/> <span>{cart.length}</span></NavLink>  
        
        </div>

    </div>
    
    
    
    </>

  )
}

export default Navbar