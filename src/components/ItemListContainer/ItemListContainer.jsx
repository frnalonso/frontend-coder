import './ItemListContainer.css'
import React, { useState, useEffect } from 'react';
import Item from '../Item/Item.jsx';
const ItemListContainer = ({ saludo }) => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)



    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProductos(json))


    return (

        <div>
            {
                productos.map((elemento) => {
                    return (
                        <Item key={elemento.id} producto={elemento}></Item>
                    )
                })
            }
        </div>
    )

};

export default ItemListContainer;