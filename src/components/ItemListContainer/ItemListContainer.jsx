import './ItemListContainer.css'
const ItemListContainer = ({saludo}) => {

    return (
        <>
        <div className = "container">
            <div>{saludo}</div>
        </div>
        </>
    )

};

export default ItemListContainer;