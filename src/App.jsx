import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import './App.css'

function App() {
 

  return (
    <>
    
      <NavBar></NavBar>
      <ItemListContainer saludo = {"Bienvenido al e-commerce"} ></ItemListContainer>

    </>
  )
}

export default App
