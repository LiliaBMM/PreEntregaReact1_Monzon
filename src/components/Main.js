import { useState } from "react";
import ItemListContainer from "./ItemListContainer";

function Main (){

    const [dark, setDark] = useState (false)


    const toogleDark = () => {
        setDark(!dark)
    }

    return(
        <main className= {dark ? "p-2 grow bg-slate-800 text-white" : "p-2 grow bg-white"}> 
            <ItemListContainer 
            cliente = "Lilia"/>
            <button onClick={toogleDark}>Toogle dark/light</button>
        </main> 
    )
}

export default Main;
