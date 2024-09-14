import './ItemListContainer.css';
import React, { useContext, useState, useEffect } from 'react';
//import { productosasync } from '../../asyncMock.js'
import { CartContext } from '../../context/CartContext.jsx';
import Item from '../Item/Item.jsx';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebaseConfig.js';
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = ({ saludo }) => {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    //const {contexto, mostrarMensaje, cart } = useContext(CartContext)

    const { categoryName } = useParams();


    useEffect(() => {

        setCargando(true); // Se establece en true antes de iniciar el fetch.


        //DESDE FIREBASE

        const productosRef = collection(db, "productos") 

        if(categoryName){
          const prodsPorCat = query(productosRef, where("category", "==", categoryName))
          getDocs(prodsPorCat).then(snapshot => {
            const prods = snapshot.docs.map(doc => {
              const data = doc.data()
              return {...data, id: doc.id }
            })
            setProductos(prods)
          }).finally(() => setCargando(false))
        }else{
          getDocs(productosRef).then(snapshot => {
            console.log("snap",snapshot)
            const prods = snapshot.docs.map(doc => {
              const data = doc.data()
              return {...data, id: doc.id }
            })
            setProductos(prods)
          }).finally(() => setCargando(false))
        }


    }, [categoryName]); // `useEffect` se ejecuta cuando `categoryName` cambia.

    console.log("PRODUCTOS: ", productos)

    if (cargando) {
        return (
            <h2>Estamos cargando los productos...</h2>
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
