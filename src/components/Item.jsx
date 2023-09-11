import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Card style={{ width: '200px', height: '600px', backgroundColor:"gray" , margin: "2px", textAlign:"center"}}>
      <Card.Img variant="top" src={product.image} className="img-thumbnail" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{"$" + product.price}</Card.Text>
        <Link to={`/item/${product.id}`}><Button variant="dark">Ver más</Button></Link>
      </Card.Body>
    </Card>
  );
};
export default Item;
