
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {

  return (
    <Card style={{ width: "36rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <h2>{"$" + product.price}</h2>
        <p>{"Cantidad disponible: " + product.stock}</p>
        <p>{"Categoría: " + product.category}</p>
        <ItemCount stock={product.stock} onAdd={(cantidad) => console.log('Cantidad agregada ', cantidad)} />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;