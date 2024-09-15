//siempre que se hace metodo map en React se debe pasar una key. El elemento padre va con key.
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

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

            {
                cart.length > 0 ?
                <>
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
                    <Link to="/checkout">
                        <button>Terminar Compra</button>
                    </Link>
                </>
                    :
            <Link to="/">
            <h3>Tu carrito está vacio. Presiona para ver productos.</h3>
            </Link>
}


        </div >

    )

    //dentro de return no se puede poner if por eso usamos los ternarios pq son expresiones y los if son estructuras.
}

export default Cart;



