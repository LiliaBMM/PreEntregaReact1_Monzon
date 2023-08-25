import { useState, useEffect } from "react";
import ItemLists from "./ItemLists";
import {getProducto} from "../asyncMock";

function ItemListContainer(greeting) {

  const [produto, setProducto] = useState([])
  console.log(produto);

  useEffect(() => {
    if(produto!==undefined){
      console.log('ingrese aqui');
      getProducto()
     .then(response => {
        setProducto(response)
     })
     .catch(error => {
      console.error(error);
     })
    }
  },[produto])

  return (
    <>
      <p>Bienvenido {greeting.cliente} a nuestra tienda</p>
      <ItemLists producto = {produto}/>
    </>
  )
}

export default ItemListContainer