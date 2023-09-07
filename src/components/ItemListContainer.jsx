import { useEffect, useState } from "react";
import data from "./products.json";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(data);
          }, 2000);
           
        });
    };
    useEffect(() => {
        getProducts().then((res) => {
            setProducts(res);
        });
    }, []);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
