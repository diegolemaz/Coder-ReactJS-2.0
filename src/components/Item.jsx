import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({product}) => {
// Item = (id, title, price, description, category, image, rating, stock)
return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <h2>{"$" + product.price}</h2>
        <p>{"Cantidad disponible: "+ product.stock}</p>
        <p>{"Categoría: " + product.category}</p>
        <Button variant="primary">Ver más</Button>

    </Card.Body>
    </Card>
  );

}
export default Item;