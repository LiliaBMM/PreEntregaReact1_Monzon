import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Barra() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" barra>
        <Container>
          <Navbar.Brand href="#inicio">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#maquillaje">Maquillaje</Nav.Link>
            <Nav.Link href="#skincare">Skincare</Nav.Link>
            <Nav.Link href="#carrito" >
            <img
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />Carrito</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Barra;