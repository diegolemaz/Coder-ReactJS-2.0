import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

function Cart() {
  const { cartList, removeItem, clear, totalPrice } = useContext(CartContext);

  return (
    <div className="container">
      <h1>Carrito</h1>
      {cartList.map((item) => (
        <Card key={item.id}>
          <Card.Header as="h5">{item.title}</Card.Header>
          <Card.Body>
            <Card.Title>Precio unitario: ${item.price}</Card.Title>
            <Image src={item.image} alt={item.title} style={{ width: "70px" }} />
            <Card.Text>
              <br />
              Cantidad seleccionada: {item.quantity}
              <br />
              Total item: ${item.price * item.quantity}
            </Card.Text>
            <Button onClick={() => removeItem(item.id)}>Eliminar item</Button>
          </Card.Body>
        </Card>
      ))}
      {cartList.length > 0 ? (
        <>
          <h2>Precio total: ${totalPrice().toFixed(2)}</h2>
          <Button className="m-3 col-md-2" variant="danger" onClick={clear}>
            Vaciar carrito
          </Button>
          <Link to="/checkout">
            <Button className="m-3 col-md-2" variant="success">
              Finalizar compra
            </Button>
          </Link>
        </>
      ) : (
        <>
          <h3>El carrito está vacío, elige productos!</h3>
          <Link to="/">
            <Button className="m-3 col-md-2" variant="dark">
              Elige productos
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
