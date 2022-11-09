import { createContext, useContext, useReducer } from "react"
import Reducer from "./Reducer";
import Product from "../items"
import product from "../items";
const GlobalContext=createContext();

const Context = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, {
    item:Product,
    cart:[],
    Model:"Model"
  })
  return (
    <GlobalContext.Provider value={{state,dispatch}}>{children}</GlobalContext.Provider>
  )
}

export default Context

export const Cartstate=()=>{
    return useContext(GlobalContext)
}