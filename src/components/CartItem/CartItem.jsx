import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({producto}) => {

    const {eliminarProducto} = useContext(CartContext)

    return(
       <div className="prod-card">
        <h2>{producto.title}</h2>
        <img src={producto.image} height={100} width={100} alt={`foto del producto ${producto.title}`}></img>
        <p>{producto.price}</p>
        <p>{producto.cantidad}</p>
        <p>Total: {producto.price * producto.cantidad}</p>
        <button onClick={() => eliminarProducto(producto.id)}>Eliminar producto</button>
       </div>
    )
}

export default CartItem;