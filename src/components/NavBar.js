import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <nav className="flex gap-4">
      <Link to="/">Inicio</Link>
      <Link to="/maquillaje">Maquillaje</Link>
      <Link to="/skincare">Skincare</Link>
      <Link to="/carrito"><CartWidget/></Link>
    </nav>
    <br />
    </>
  );
}

export default NavBar;