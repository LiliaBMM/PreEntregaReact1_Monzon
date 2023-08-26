import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <nav className="flex gap-4">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to={`/category/maquillaje`}>Maquillaje</NavLink>
      <NavLink to={`/category/skincare`}>Skincare</NavLink>
      <NavLink to="/carrito"><CartWidget/></NavLink>
    </nav>
    <br />
    </>
  );
}

export default NavBar;