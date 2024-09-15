import React, { useContext } from "react";
import Boton from "../Boton/Boton";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({producto, verSiguiente, verAnterior}) => {

    const {contexto, agregarAlCarrito} = useContext(CartContext)
    console.log("verprod")
    console.log(producto)
    console.log("verprod")
    
    
    const {id, title, image, price, category, description} = producto

    const handleComprar = (count) => {
        agregarAlCarrito({...producto, cantidad: count}) //producto desustructurado y lo que tenga la cantidad.
    }
    
        return (
            
            <div className="prod-card">
                <h2 onClick={() =>setCart(producto)}>{contexto}</h2>
                <h2>{title}</h2>
                <img src={image} height={100} width={100} alt={`foto del producto ${title}`}></img>
                <p>${price}</p>
                <p>{description}</p>
                <p>{category}</p>

                <ItemCount id={id} handleComprar={handleComprar} />
            
            
    
               
            </div>
            
        );
}

export default ItemDetail;