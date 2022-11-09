import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Cartstate } from "../Global/Context"
import { CgClose } from 'react-icons/cg';

import "../../AllCss/Single.css"
import "./Card.css"

const Card = ({prod}) => {
const [model,setModel]=useState("Model")
  const {
    state:{cart,Model},
    dispatch}=Cartstate();

  return (
    <>
    <div className="card">
        <img src={prod.img} width={300} alt="" />
        <span>{prod.product_name}</span>
        <div className="carddetail">
       
        <span>{prod.Catgory}</span>
        <span>{prod.Rate}</span>

        </div>
    



<button className="cartbtn"onClick={()=>{setModel(" Model activemodel")}} > Buy Now</button>
</div> 
{/* 
<button className="cartbtn"onClick={()=>{dispatch({type:"SINGLECART",payload: singleProduct 
})}} ><NavLink to={"/Singlepage/" + prod.product_name}>Buy Now</NavLink> </button>
   
   
   
   */}

   

<div className={model}>
  <span className='Modelclose' onClick={()=>{setModel(" Model ")}} ><CgClose/></span>
<div className="modelimg">
<img src={prod.img} alt="" />
</div>

<div className="modeldetail">
    <span>{prod.product_name}</span>

    <b>About this item:</b>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Eveniet eligendi officiis maiores quia aliquid.</li>
        <li>Sed minima, modi quos quia cumque vitae ratione</li>
        <li>necessitatibus deserunt odit unde error nulla 
         ipsum eligendi!</li>
        <li>necessitatibus deserunt odit unde error nulla 
         ipsum eligendi!</li>
        
     
         
         <span className='storage'><b>Size Name:</b><label> 2gb ram + 8gb storage</label> </span>

         
   
    <span><b>Brand:</b> {prod.Catgory}</span>
    <span><b> M.R.P: </b><s>₹{prod.OldRate}</s> </span>
    <span><b>Deal of the Today:</b> {prod.Rate}</span>


        
    {cart.some(p=>p.id===prod.id)?(<button className="cartbtn" onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:prod})}}>Remove To Cart</button>)
    :(<button className="cartbtn cartbtn1" onClick={()=>{dispatch({type:"ADD_TO_CART",payload:prod})}} >Add To Cart</button>)}


</div>

</div>

  




   
 
    
    </>
  )
}

export default Card