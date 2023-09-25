import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';


const ItemDetail = ({ product }) => {

  const { cartList, addItem } = useContext(CartContext);
  const [cantAdd, setCantAdd] = useState(0);


  const handleOnAdd = (product, cantidad) => {
    addItem(product, cantidad);
    setCantAdd(cantidad);
  };

  return (
    <Card style={{ width: "36rem", backgroundColor: "gray", margin: "2px", textAlign: "center" }}>
      <Card.Img className="img-thumbnail" variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <h2>{"$" + product.price}</h2>
        <p>{"Cantidad disponible: " + product.stock}</p>
        <p>{"Categoría: " + product.category}</p>
        {cantAdd > 0 ? (
          <Link to="/cart"><button>Terminar compra</button></Link>
        ) : (
          <ItemCount stock={product.stock} onAdd={(cantidad) => handleOnAdd(product, cantidad)} />
        )
        }
      </Card.Body>
    </Card>
  );
};

export default ItemDetail; 