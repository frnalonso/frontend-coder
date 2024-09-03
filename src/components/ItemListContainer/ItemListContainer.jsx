import './ItemListContainer.css';
import React, { useState, useEffect } from 'react';
import Item from '../Item/Item.jsx';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ saludo }) => {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const { categoryName } = useParams();

    useEffect(() => {
        
        setCargando(true); // Se establece en true antes de iniciar el fetch.

        
            if (categoryName) {

                fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
                .then(res=>res.json())
                .then(json=>setProductos(json))
                .finally(setCargando(false))
                
            } else {

                fetch(`https://fakestoreapi.com/products`)
                .then(res=>res.json())
                .then(json=>setProductos(json))
                .finally(setCargando(false))

            }


    }, [categoryName]); // `useEffect` se ejecuta cuando `categoryName` cambia.

    if (cargando) {
        return(
            <h2>Cargando....</h2>
        )
    }

    return (
        <div>
            {
                productos.map((elemento) => (
                    <Item key={elemento.id} producto={elemento}></Item>
                ))
}
        </div>
    );
};

export default ItemListContainer;
