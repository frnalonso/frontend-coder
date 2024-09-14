import React from "react";
import { Link } from "react-router-dom";


const Item = (props) => {

const {producto} = props

const {id, title, image, price, category, description} = producto

    return (
        
        <div>
            <h2>{title}</h2>
            <h3>ID: {id}</h3>
            <img src={image} height={100} width={100} alt={`foto del producto ${title}`}></img>
            <p>${price}</p>
            <p>{description}</p>
            <p>{category}</p>
            
            <Link to={`/detalle/${id}`} >Ver detalles</Link>

           
        </div>
        
    );
}

export default Item;






