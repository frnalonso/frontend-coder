import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()
    const navigate = useNavigate()

 
    useEffect(() => {

        const mostrarProducto = async () => {
            setCargando(true)
            try{

                const productoRef = doc(db, "productos", id)
                const res = await getDoc(productoRef)
                const data = res.data()
                const productoFormateado = {id: res.id, ...data}
                setProducto(productoFormateado);

            } catch (error){
                console.log(error)
            } finally {
                setCargando(false)
                console.log("true")
            }
        }

        mostrarProducto()
        

    },[id])

    if (cargando) {
        return (
            <h2>Cargando...</h2>
        )
    }

    return(
      
        <ItemDetail producto = {producto} />
    )
}

export default ItemDetailContainer;
