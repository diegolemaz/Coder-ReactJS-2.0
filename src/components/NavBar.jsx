import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <header>
      <nav>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home" className="align-middle">M@RKET</Navbar.Brand>
            <Nav className="me-auto mx-auto">
              <Nav.Link href="#products">Productos</Nav.Link>
              <Nav.Link href="#aboutUs">Acerca de Nosotros</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
              <Nav.Link href="#cart"><CartWidget /></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </nav>
    </header>
  );
};

export default NavBar;