import { useEffect, useState } from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Asegúrate de importar el archivo CSS
import { db } from '../../services/firebaseConfig.js';
import { collection, getDoc, getDocs } from 'firebase/firestore';

const NavBar = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {


        const obtenerCategorias = async() => {
            try {
                
                const querySnapShot = await getDocs(collection(db, "productos"))
                const productos = querySnapShot.docs.map(doc => doc.data());
    
                const categoriasExtraidas = productos.map(producto => producto.category)
                //elimino categorias repetidas ya que trae categoria por cada producto
                const categorias = [...new Set(categoriasExtraidas)] //new Set() coleccion que almacena valores unicos, no permite elementos duplicados.
    
                setCategorias(categorias)
            } catch (error) {
                console.log("error: ",error)
            }
        }

        obtenerCategorias()

    }, []);

    return (
        <nav className="navbar">
            <div className="top-menu">
                <Link to="/" className="logo">
                    <h2>E-commerce</h2>
                </Link>
                <div className="cart-widget">
                    <Link to={`/cart`}>
                    <CartWidget/>
                    </Link>
                </div>
                <ul className="main-links">
                    <li><Link to="/">Productos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/about">Acerca de</Link></li>
                </ul>
            </div>
            <div className="category-menu">
                <ul className="category-links">
                    {categorias.length > 0 && categorias.map(e => (
                        <li key={e}><Link to={`/categoria/${e}`}>{e}</Link></li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
