import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Item = ({ product }) => {
  return (
    <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{"$" + product.price}</Card.Text>
        <p>{"Cantidad disponible: " + product.stock}</p>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
};
export default Item;
