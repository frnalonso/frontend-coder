import { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext() 

//debo crear el componente que provee los estados globales

export const CartContextProvider = ( {children} ) => {
//en children deben entrar todos los componentes, deben acceder al contexto.

const [cart, setCart] = useState([])


const contexto = "HOLA CONTEXTO"

const agregarAlCarrito = (producto) => {
    setCart([...cart, producto]) //lo que tenemos antes del carrito y añadimos un producto al carrito
}

const vaciarCarrito = () => {
    setCart([]) //hacemos map sobre cart. Nos aseguramos que siempre sea un array.
}

const eliminarProducto = (id) => {
    const newCart = cart.filter(e => e.id !== id)
    setCart(newCart)

}

const mostrarCantidad = () =>{
    return cart.reduce((acc, curr) => acc + curr.cantidad, 0)
}

console.log("CARRITO: ", cart)



return (
    <CartContext.Provider value={{contexto, cart, setCart, agregarAlCarrito, vaciarCarrito, eliminarProducto, mostrarCantidad}}> 
        { children }
    </CartContext.Provider>
)
}
