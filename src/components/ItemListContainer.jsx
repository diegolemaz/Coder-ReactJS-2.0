import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const collectionRef = categoryId
      ? query(collection(db, "productos"), where("category", "==", categoryId))
      : collection(db, "productos");
    getDocs(collectionRef)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  if (loading) return <Loading />;
  return (
    <div>
      <h1>{categoryId ? categoryId : greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
