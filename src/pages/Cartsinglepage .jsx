import React from 'react'
import "../App.css"
import product from '../Component/items'
import { AiFillDelete } from 'react-icons/ai';
import { Cartstate } from '../Component/Global/Context';
const Cartsinglepage  = ({prod}) => {
  const { state: { cart },dispatch } = Cartstate()





  return (
    <>


    


      <tbody>
        <tr>
           <td><img src={prod.img} alt="" /></td>
           <td>{prod.product_name}</td>
           <td> <div className="inc_dec">

        <button className='btn' onClick={()=>{
          dispatch({type:"MINUS",payload:{
            id:prod.id,
          qty:prod.qty}})
        }}>-</button>
        <span>{prod.qty}</span>
        <button className='btn' onClick={()=>{
          dispatch({type:"PLUSE",payload:{
            id:prod.id,
          qty:prod.qty}})
        }}>+</button>
      </div>

      </td>
           <td>₹{prod.Rate*prod.qty}</td>
           <td><span className='remove' onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:prod})}}><AiFillDelete/> <span>Remove</span> </span>
          

</td>

        </tr>

        
</tbody>


     
      </>
  )
}

export default Cartsinglepage 