import { useEffect, useState } from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Asegúrate de importar el archivo CSS

const NavBar = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategorias(json))
            .catch(error => console.error('Error fetching categorias:', error));
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
