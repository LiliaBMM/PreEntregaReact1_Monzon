import { useState, useEffect } from "react"
import {getProductById} from "../asyncMock"


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    useEffect(() => {
        getProductById('1')
            .then(response => {
                setProducto(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

  return (
    <div>ItemDetail {producto}</div>
  )
}

export default ItemDetailContainer