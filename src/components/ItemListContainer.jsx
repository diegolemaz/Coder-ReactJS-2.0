import { useEffect, useState } from "react";
import data from "./products.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true);

    const getProducts = (categoryId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (categoryId !== undefined) {
                    const productosFiltrados = data.filter(
                        (item) => item.category === categoryId
                    );
                    resolve(productosFiltrados)
                } else {
                    resolve(data);
                }
            }, 2000);
        });
    };
    useEffect(() => {
        getProducts(categoryId)
        .then((res) => {
            setProducts(res);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [loading, categoryId]);

    if (loading) return <Loading />;

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
