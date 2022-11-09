import React from 'react'
import { NavLink } from 'react-router-dom'
import { Cartstate } from '../Component/Global/Context';
import "../index.css"
const CheckoutPage = ({prod}) => {
    const {
        state:{cart},
        dispatch}=Cartstate();
  return (
    <>

    <div className="checkout">
    <span>Thanks for Shopping</span> 
    <span>we Diliver your product as soon as  possible</span>
    <button className='cartbtn' onClick={()=>{dispatch({type:"EMPTY",payload:prod})}}><NavLink to="/">Continue Shopping</NavLink> </button>

    </div>
    </>
  )
}

export default CheckoutPage