import Item from "./Item";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const ItemList = ({ products }) => {
  return (
    <Container>
      <Row xs={2} md={3} lg={4}>
        {products.map((product) => {
          return <Item product={product} key={product.id} />;
        })}
      </Row>
    </Container>
  );
};

export default ItemList;
