import React, { useContext, useState } from "react";
import  "../Checkout/Checkout.css"
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [orden, setOrden] = useState("")
    const [isSumbmiting, setIsSubmiting] =  useState(false)

    const {cart, setCart} = useContext(CartContext)

    const  handleSubmit = async (e) => {

        e.preventDefault()
        setIsSubmiting(true)

        const usuario = {
            nombre,
            email,
            direccion,
        }

        const orden = {
            cart, usuario
        }

        const orderRef = collection(db, "ordenes")
        const orderID = await addDoc(orderRef, orden)

        setOrden(orderID.id)

        setDireccion("")
        setEmail("")
        setNombre("")
        setCart([])
        
        
    }
    
            if (orden) {
                return ( 
                <h3>Gracias por tu compra! El id de tu compra es {orden}</h3>
                )
            }

    return(
        <div>
            <h3>Ingresa los datos para terminar tu compra</h3>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                
            <label htmlFor="nombre">  Nombre  </label>
                <input type="text" name='nombre'  onChange={(e) => setNombre(e.target.value)} />
                <label htmlFor="email">  Email  </label>
                <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="direccion"> Dirección </label>
                <input type="text" name='direccion' onChange={(e) => setDireccion(e.target.value)} />
                <button type='submit' disabled={isSumbmiting}  > Enviar </button>
            </form>
        </div>
        
    )
}

export default Checkout;