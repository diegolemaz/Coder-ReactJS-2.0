import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
Link

const Item = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{"$" + product.price}</Card.Text>
        <p>{"Cantidad disponible: " + product.stock}</p>
        <Link to={`/item/${product.id}`} variant="primary">Ver más</Link>
      </Card.Body>
    </Card>
  );
};
export default Item;
