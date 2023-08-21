// import { useState, useEffect } from "react";
// import Muestra from "./Muestra";

// function Container(){

//     const [data, setData] = useState([])

//     useEffect (() => {
//         getProductos()
//     }, [])

//     const getProductos = () => {
//         console.log("Arranca el pedido de la API");
//         setTimeout(() => {
//             console.log("Termina el pedido de la API");
//             let data = [{id: 1, nombre:"lilia"}, {id:2, nombre:"gensil"}]
//             setData(data)
//         }, 300)
//     }

//     return(
//         <Muestra data={data}/>
//     )
// }

// export default Container