import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import Carousel from 'react-bootstrap/Carousel';

const ItemDetail = ({ product }) => {
  const { cartList, addItem } = useContext(CartContext);
  const [cantAdd, setCantAdd] = useState(0);

  const handleOnAdd = (product, cantidad) => {
    addItem(product, cantidad);
    setCantAdd(cantidad);
  };

  return (
    <div className="m-5"  >
      <Carousel data-bs-theme="dark" fade style={{ width: "28rem" }}>
        <Carousel.Item>
          <img className="d-block w-100" src={product.carouselImg0} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={product.carouselImg1} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={product.carouselImg2} />
        </Carousel.Item>
      </Carousel>
      <Card style={{ width: "28rem", backgroundColor: "gray", margin: "2px", textAlign: "center" }}>
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
    </div>
  );
};

export default ItemDetail; 