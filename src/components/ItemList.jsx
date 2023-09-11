import Item from "./Item";
import Stack from 'react-bootstrap/Stack';

const ItemList = ({ products }) => {
  return (
    <Stack direction="horizontal" style={{justifyContent: "space-evenly"}} >
      {
        products.map((product) => {
          return (
            <Item product={product} key={product.id} />
          )
        })
      }
    </Stack>
  );
};

export default ItemList;
