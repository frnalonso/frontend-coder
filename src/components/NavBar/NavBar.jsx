import CartWidget from '../CartWidget/CartWidget.jsx';

const NavBar = () => {
    return (
        <>

            {/*Acá se debe renderizar el componente CartWidget*/}
            <h2>E-commerce</h2>
            <ul>
                <li>
                    <a href="">Inicio</a>
                    <a href="">Contacto</a>
                    <a href="">Productos</a>
                    <a href="">Contacto</a>
                </li>
            </ul>
            <div  className="cart-widget">

            <CartWidget ></CartWidget>
            </div>


        </>
    )
};

export default NavBar;