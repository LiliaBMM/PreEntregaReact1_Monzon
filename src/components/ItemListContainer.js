import { useState, useEffect } from "react";
import ItemLists from "./ItemLists";
import {getProducto} from "../asyncMock";

function ItemListContainer(greeting) {

  const [produto, setProducto] = useState([])

  useEffect(() => {
    getProducto()
     .then(response => {
        setProducto(response)
     })
     .catch(error => {
      console.error(error);
     })
  },[])

  return (
    <>
      <p>Bienvenido {greeting.cliente} a nuestra tienda</p>
      <ItemLists produto = {produto}/>
    </>
  )
}

export default ItemListContainer