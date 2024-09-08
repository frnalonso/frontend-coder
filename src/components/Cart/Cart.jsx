//siempre que se hace metodo map en React se debe pasar una key. El elemento padre va con key.
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {

    const { contexto, cart, vaciarCarrito } = useContext(CartContext)

    return (


        <div>{
            cart?.map(e => {
                return (
                    <CartItem key={e.id} producto={e} />
                )
            })
        }

        <button onClick={vaciarCarrito}>Vaciar carrito</button>


        </div>

    )
}

export default Cart;



