import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import Cart from './components/Cart/Cart.jsx';
import { CartContextProvider } from './context/CartContext.jsx';

function App() {
  return (

    <CartContextProvider>


    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoryName" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/contacto" element={<Contact />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </Router>
    </CartContextProvider>
  );
}

export default App;
