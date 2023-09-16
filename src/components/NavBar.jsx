import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand as ={Link} to="/" className="align-middle">M@RKET</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as ={NavLink} to="/category/Womens">Ropa Mujer</Nav.Link>
          <Nav.Link as ={NavLink} to="/category/Mens">Ropa Hombre</Nav.Link>
          <Nav.Link as ={NavLink} to="/category/HHDD">HHDD</Nav.Link>
          <Nav.Link as ={NavLink} to="/category/Mochilas">Mochilas</Nav.Link>
          <Nav.Link as ={NavLink} to="/category/Monitores">Monitores</Nav.Link>
          <Nav.Link as = {Link} to="/cart" className="align-middle"><CartWidget /></Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </nav>
    </header>
  );
};

export default NavBar;