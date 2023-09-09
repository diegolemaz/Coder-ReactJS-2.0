import { useEffect, useState } from "react";
import data from "./products.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [prod, setProd] = useState([]);
    const { itemId } = useParams();
    const getProductsById = (itemId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const productosFiltrados = data.filter(
                    (item) => item.id === itemId
                );
                resolve(productosFiltrados)
            }, 2000);
        });
    };
    useEffect(() => {
        getProductsById(Number(itemId)).then((res) => {
            setProd(res);
        });
    }, [itemId]);

    return (
        <div>
            <ItemDetail product={prod} />
        </div>
    );
};

export default ItemDetailContainer;