import React from 'react'
import Card from '../Card/Card'
import "./mobile.css"
import { Cartstate } from '../Global/Context'

const Mobile = () => {
  const {state:{item,singlepage}}=Cartstate()
  return (
    <>
       <h1 className='Latest'>Latest Products</h1>
    <div className="maincard">

   
    {item.map((prod)=>{
        return ( <Card key={prod.id} prod={prod}/>)
       
      })}

    </div>
  
    
    
    </>
  )
}

export default Mobile