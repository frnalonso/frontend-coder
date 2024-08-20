import React from "react";

const Item = (props) => {

const {producto} = props

const {id, title, image, price, category, description} = producto

    return (
        <>
        <div>
            <h2>{title}</h2>
            <img src={image} height={100} width={100} alt={`foto del producto ${title}`}></img>
            <p>${price}</p>
            <p>{description}</p>
            <p>{category}</p>
            
        </div>
        </>
    );
}

export default Item;