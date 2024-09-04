//siempre que se hace metodo map en React se debe pasar una key. El elemento padre va con key.
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {

    const {contexto} = useContext(CartContext)

    return (
        <>
        <h2>¡Tu carrito de compras!</h2>
        <div>{contexto}</div>
        </>
    )
}

export default Cart;



