import './ItemListContainer.css';
import React, { useState, useEffect } from 'react';
import { productosasync } from '../../asyncMock.js'
import Item from '../Item/Item.jsx';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebaseConfig.js';
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = ({ saludo }) => {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const { categoryName } = useParams();

    async function subirProductosAFirebase(productos) {
        const productosCollection = collection(db, "productos");

        for (const producto of productos) {
            try {
                const docRef = await addDoc(productosCollection, producto)
                console.log("Producto agregado con ID: ", docRef.id)
            } catch (error) {
                console.error("Error al agregar producto: ", error)
                
            }
        }
    }


    
    useEffect(() => {
        subirProductosAFirebase(productosasync) //se utilizará una sola vez por eso lo metemos dentro de useEffect

    }, [])

    useEffect(() => {

        setCargando(true); // Se establece en true antes de iniciar el fetch.


        //DESDE FIREBASE

            if (categoryName) {
                const prodsPorCat = query(collection(db, "productos"), where("category", "==", categoryName))
                getDocs(prodsPorCat).then(snapshot => {//getDocs se le pasa una query
                    const prods = snapshot.docs.map(doc => {
                        const data = doc.data()
                        return { id: doc.id, ...data} //hacerle los 3 puntos es como borrar las llave. cada propiedad te queda sueltita
                    })
                    console.log("prod: ", prods)
                    setProductos(prods)
                }).finally(setCargando(false))
            } else {
                const prodsRef = collection(db, "productos")
                getDocs(prodsRef).then(snapshot => {
                    console.log("snap: ",snapshot)
                    const prods = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data} //hacerle los 3 puntos es como borrar las llave. cada propiedad te queda sueltita
                })
                console.log("prod: ", prods)
                setProductos(prods)
                }).finally(setCargando(false))
            }





    }, [categoryName]); // `useEffect` se ejecuta cuando `categoryName` cambia.

    if (cargando) {
        return (
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
