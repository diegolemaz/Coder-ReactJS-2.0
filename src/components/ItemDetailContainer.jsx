import { useEffect, useState } from "react";
import data from "./products.json";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const getProductsById = (productId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data.find(prod => prod.id === productId));
            }, 2000);
        });
    };
    useEffect(() => {
        getProductsById("5").then((res) => {
            setProducts(res);
        });
    }, []);

    return (
        <div>
            <ItemDetail product={products} />
        </div>
    );
};

export default ItemDetailContainer;