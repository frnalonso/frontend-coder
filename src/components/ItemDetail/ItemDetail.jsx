import React from "react";
import Boton from "../Boton/Boton";

const ItemDetail = ({producto, verSiguiente, verAnterior}) => {
    
    
    const {id, title, image, price, category, description} = producto
    
        return (
            
            <div>
                <h2>{title}</h2>
                <img src={image} height={100} width={100} alt={`foto del producto ${title}`}></img>
                <p>${price}</p>
                <p>{description}</p>
                <p>{category}</p>
                
                
                <Boton texto="Ver Anterior" fn={verAnterior} />
                <Boton texto="Ver Siguiente" fn={verSiguiente} />
            
    
               
            </div>
            
        );
}

export default ItemDetail;