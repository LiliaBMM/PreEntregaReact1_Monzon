import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({props}) => {
     const {nombre, img, stock, precio,  id} = props
      return(
        <article className="card shadow-md-4 p-4 rounden-md">
            <h2>Nombre: {nombre}</h2>
            <img src={img} alt={nombre} />
            <hr />
            <p>Precio: ${precio}</p>
            <section> 
                <ItemCount inicial={0} stock={stock} onAdd={(cantidad) => (
                   <p>Cantidad agregada: {cantidad}</p>
            )}/>    
            </section>
            <section> 
                <Link to = {`/item/${id}`}>Ver Detalle</Link>
            </section>
        </article>    
    )
}
export default Item