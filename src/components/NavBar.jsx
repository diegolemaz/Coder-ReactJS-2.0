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
            <Link to="/" className="align-middle">M@RKET</Link>
          </Container>
          <Container className="me-auto mx-auto">
            <NavLink to="/category/Womens">Ropa Mujer</NavLink>
            <NavLink to="/category/Mens">Ropa Hombre</NavLink>
            <NavLink to="/category/HHDD">HHDD</NavLink>
            <NavLink to="/category/Mochilas">Mochilas</NavLink>
            <NavLink to="/category/Monitores">Monitores</NavLink>
            <Link to="/cart" className="align-middle"><CartWidget /></Link>
          </Container>
        </Navbar>
      </nav>
    </header>
  );
};

export default NavBar;