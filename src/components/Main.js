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
                <Route path="/" element = {<ItemListContainer cliente = "Lilia"/>}/>
                <Route path="/maquillaje" element = {<p>Maquillaje</p>}/>
                <Route path="/skincare" element = {<p>Skincare</p>}/>
                <Route path="/carrito" element = {<p>Carrito</p>}/>
            </Routes>
            <button onClick={toogleDark}>Toogle dark/light</button>
        </main> 
    )
}

export default Main;
