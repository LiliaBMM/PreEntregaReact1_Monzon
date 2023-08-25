
const Item = ({props}) => {
    console.log('props',props);
    return(
        <article className="card shadow-md-4 p-4 rounden-md">
            <h2>Nombre: {props.nombre}</h2>
            <img src={props.img} alt={props.nombre} />
            <hr />
            <p>Precio: ${props.precio}</p>
            <p>Stock disponible: {props.stock}</p>
            <section> 
                <button>Ver Detalle</button>
            </section>
        </article>    
    )
}
export default Item