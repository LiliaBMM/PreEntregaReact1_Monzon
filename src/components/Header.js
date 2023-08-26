import { Link } from "react-router-dom";

function Header() {
    return (
        <header id="header" className="flex-row mx-4">
            <Link to = "/"><img src="/logo1.jpg" alt="Vallita cosméticos" /></Link>
            <h1>Vallita Cosméticos</h1>
        </header>
    )
}

export default Header;