import { useEffect, useState } from "react";
import data from "./products.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [prod, setProd] = useState([]);
    const { itemId } = useParams();
    const [loading, setLoading] = useState(true);
    const getProductsById = (itemId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const productosFiltrados = data.find(
                    (item) => item.id === itemId
                );
                resolve(productosFiltrados)
            }, 2000);
        });
    };
    useEffect(() => {
        getProductsById(Number(itemId))
            .then((res) => {
                setProd(res);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);
    if (loading) return <Loading />;
    return (
        <div>
            <ItemDetail product={prod} />
        </div>
    );
};

export default ItemDetailContainer;