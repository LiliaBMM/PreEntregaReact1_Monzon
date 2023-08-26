import { useState } from "react";

function ItemCount ({inicial, stock, onAdd}){
    
    //valores
    const [contador, setContador] = useState(inicial);

    //acciones
    const sumar = () => {
        if (contador < stock)
            setContador(contador + 1) 
    }

    const restar =() => {
        if(contador > 1)
            setContador(contador - 1) 
    }
    const resetear = () => {
        setContador(0)
       }
   
    //vista
    return(
        <>
            <button className="border p-1 rounded px-3" onClick={sumar}>+</button>
            <button className="border p-1 rounded px-3" onClick={restar}>-</button>
            <p className="text-color-lighcoral">Cantidad: {contador}</p>
            <div>
                <button className="border p-1 rounded" onClick={() => onAdd(contador)} disabled={!stock}>Confirmar compra</button>
                
            </div>
            <div>
                <button className="border p-1 rounded" onClick={resetear}>Eliminar compra</button>
            </div>
        </>
    )   


}
export default ItemCount;    