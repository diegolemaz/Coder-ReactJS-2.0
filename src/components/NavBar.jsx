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
          <Navbar.Brand><Link to="/" className="align-middle">M@RKET</Link></Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link><NavLink to="/category/Womens">Ropa Mujer</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/category/Mens">Ropa Hombre</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/category/HHDD">HHDD</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/category/Mochilas">Mochilas</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/category/Monitores">Monitores</NavLink></Nav.Link>
          <Nav.Link><Link to="/cart" className="align-middle"><CartWidget /></Link></Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </nav>
    </header>
  );
};

export default NavBar;