import React, { useEffect, useState } from 'react'
import { Cartstate } from '../Component/Global/Context'
import Cartsinglepage from './Cartsinglepage '
import { NavLink } from 'react-router-dom'

import "../App.css"

const Cart = () => {
  const { state: { cart },dispatch } = Cartstate()

  const [total,settotal]=useState()
 
useEffect(() => {
settotal(cart.reduce((acc,curr)=>acc+Number(curr.Rate)*curr.qty,0))
  
}, [cart])


  return (
    <>

    {cart.length!==0?<>


<div className="cartholder">
<span>Shopping Cart({cart.length})</span>
<table className='table'>
  <thead>
    <tr>
      <th>Product</th>
      <th>Title</th>
      <th>Quantity</th>
      <th>Price</th>
      <th >Remove To Cart</th>
    </tr>
  </thead>
  {cart.map((val) => {
    return (
      <Cartsinglepage key={val.id} prod={val} />
    )
  })}

</table>


</div>


<div className="totalcart">

<table className='tabletotal'>
  <tbody>
    <tr>
      <th>Total Amount:</th>
      <td>{total}</td>
    </tr>
  </tbody>
</table>



</div>
<div className="contshop">
<button className='shopbtn1'><NavLink to="/Product">Continue Shopping</NavLink> </button>
<button  className='shopbtn'><NavLink to="/checkout">Checkout</NavLink> </button>
</div>
</>
    :(<>
    
    <div className='emptyheader'>
    <h1 className='cartempty'> Your Shopping Cart is Empty</h1>
    <button className='cartbtn'><NavLink to="/Product">Continue Shopping</NavLink> </button>

    </div>
    </>
    
    )}
     
      
    </>






    
  )
}

export default Cart

