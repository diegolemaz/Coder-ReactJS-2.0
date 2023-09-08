import Item from "./Item";
import CardGroup from 'react-bootstrap/CardGroup';

const ItemList = ({ products }) => {
  return (
    <CardGroup>
      {
        products.map((product) => {
          return (
            <Item product={product} key={product.id} />
          )
        })
      }
    </CardGroup>
  );
};

export default ItemList;
