import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

const Item = ({ product }) => {
  return (
    <Col>
      <Card
        style={{
          width: "270px",
          height: "400px",
          backgroundColor: "gray",
          margin: "15px",
          textAlign: "center",
          
        }}
      >
        <Card.Img variant="top" src={product.image} alt={product.title} className="img-thumbnail" style={{height: "170px", padding:"5px"}} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title  as="h6" className="fw-bolder">{product.title}</Card.Title>
          <Card.Text as="h4" className="fst-italic">{"$" + product.price}</Card.Text>
          <Card.Text>{"Calificación: "+ product.rating+ "/5"}</Card.Text>
          <Link to={`/item/${product.id}`}>
            <Button variant="dark" >Ver más</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Item;
