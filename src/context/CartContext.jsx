import { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext() 

//debo crear el componente que provee los estados globales

export const CartContextProvider = ( {children} ) => {
//en children deben entrar todos los componentes, deben acceder al contexto.

const [cart, setCart] = useState([])


const contexto = "HOLA CONTEXTO"

return (
    <CartContext.Provider value={{contexto, cart, setCart}}> 
        { children }
    </CartContext.Provider>
)
}
