import { useState } from "react";
import Boton from "../Boton/Boton";

const ItemCount = ({id, handleComprar}) => {

    const [count, setCount] = useState(1)

    const sumarProducto = () => {

        if (count < 10) {
            setCount(count + 1)
        }
    }

    const restarProducto = () => {

        if (count > 1) {
            setCount(count - 1)
        } 

    }

    return(
        <>
        <div className="container">
            <Boton fn={sumarProducto} texto={"Añadir"} />
            <span>{count}</span>
            <Boton fn={restarProducto} texto={"Quitar"} />
            <button onClick={() => handleComprar(count)}>Comprar</button>
        </div>

        </>
    )
}

export default ItemCount;

