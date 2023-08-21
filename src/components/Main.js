import { useState } from "react";
import ItemListContainer from "./ItemListContainer";
import {Routes, Route} from "react-router-dom"

function Main (){

    const [dark, setDark] = useState (false)


    const toogleDark = () => {
        setDark(!dark)
    }

    return(
        <main className= {dark ? "p-2 grow bg-slate-800 text-white" : "p-2 grow bg-white"}> 
            <Routes>
                <Route path="/" element = {<p>Inicio</p>}/>
                <Route path="/maquillaje" element = {<p>Maquillaje</p>}/>
                <Route path="/skincare" element = {<p>Skincare</p>}/>
                <Route path="/carrito" element = {<p>Carrito</p>}/>
            <ItemListContainer 
            cliente = "Lilia"/>
            <button onClick={toogleDark}>Toogle dark/light</button>
            </Routes>
           
        </main> 
    )
}

export default Main;
