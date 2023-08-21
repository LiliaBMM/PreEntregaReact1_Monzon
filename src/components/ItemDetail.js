import ItemCount from "./ItemCount";

const ItemDetail = ({id, nombre, img, categoria, precio, stock, descripcion}) => {
    return(
        <article>
            <h2>Nombre: {nombre}</h2>
            <img src={img} alt={nombre} />
            <hr />
            <p>Categoria: {categoria}</p>
            <p>Precio: ${precio}</p>
            <p>Stock disponible: {stock}</p>
            <p>Información: {descripcion}</p>
            <section> 
                <ItemCount inicial={0} stock={5} onAdd={(cantidad) => {
                    return(
                    <h2>Cantidad agregada: {cantidad}</h2>
        )
                }}/>    
            </section>
        </article>
    )
}

export default ItemDetail