const Reducer=(state,action)=>{

switch(action.type){

case "ADD_TO_CART":
    return{...state,cart:[...state.cart,{...action.payload}]}
case "SINGLE_PAGE":
    return {...state,  Model:state.cart.map((c)=>c.id===action.payload.id?(state.Model=" activemodel Model "):state.model="Model")   }
case "CLOSEMODEL":
    return {...state,...state.Model="  Model "   }
    
case "REMOVE_FROM_CART":
    return{...state,cart:state.cart.filter(c=>c.id!==action.payload.id)}

    case "MINUS":
    return{...state,cart:state.cart.filter(x=>x.id===action.payload.id?x.qty=action.payload.qty-1:x.qty)}

    case "PLUSE":
    return{...state,cart:state.cart.filter(x=>x.id===action.payload.id?(x.qty<5?x.qty=action.payload.qty+1:x.qty):x.qty)}
    case "EMPTY":
    return{...state,cart:[]}

        default:
            return state;
    

}
}
export default Reducer