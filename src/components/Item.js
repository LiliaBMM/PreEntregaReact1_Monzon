
const Item = ({id, nombre, img, precio, stock}) => {
    return(
        <article className="card shadow-md-4 p-4 rounden-md duration-300 transition hover:scale-110">
            <h2>Nombre: {nombre}</h2>
            <img src={img} alt={nombre} />
            <hr />
            <p>Precio: ${precio}</p>
            <p>Stock disponible: {stock}</p>
            <section> 
                <button>Ver Detalle</button>
            </section>
        </article>    
    )
}
export default Item