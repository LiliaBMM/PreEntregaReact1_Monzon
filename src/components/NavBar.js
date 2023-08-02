import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="barra">
        <Container>
          <Navbar.Brand href="#inicio">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#maquillaje">Maquillaje</Nav.Link>
            <Nav.Link href="#skincare">Skincare</Nav.Link>
            <Nav.Link href="#carrito" > <CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;