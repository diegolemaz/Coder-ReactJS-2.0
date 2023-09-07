import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {
        products.length > 0 && products.map((product) => {
          return (
            <Item product={product} key={product.id} />
          )
        })
      }
    </div>
  );
};

export default ItemList;
