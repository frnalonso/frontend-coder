import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    const { id } = useParams()
    const navigate = useNavigate()

    const verSiguiente = () => {
        let ruta = id*1 + 1
        navigate(`/detalle/${ruta}`)
    }
    const verAnterior = () => {
        let ruta = id*1 - 1
        navigate(`/detalle/${ruta}`)
    }

    useEffect(() => {

        const fetchProducto = async () => {
            try{

                 const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                 const data = await res.json()
                //const res = await getProducto(id)
                setProducto(data)

            } catch (error){
                console.log(error)
            } finally {
                //setCargando(false)
                console.log("true")
            }
        }

        fetchProducto()
        

    },[id])

    return(
      
        <ItemDetail producto = {producto} verSiguiente = {verSiguiente} verAnterior = {verAnterior}/>
    )
}

export default ItemDetailContainer;
