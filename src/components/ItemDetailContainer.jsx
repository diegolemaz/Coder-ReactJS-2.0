import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [prod, setProd] = useState([]);
    const { itemId } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemRef = doc(db, "productos", itemId);
        getDoc(itemRef)
            .then(snapshot => {
                setProd({ id: snapshot.id, ...snapshot.data() });
                setLoading(false);
            })
            .catch(error => { console.error(error) })
    }, [itemId]);

    if (loading) return (<Loading />);
    return (
        <div>
            <ItemDetail product={prod} />
        </div>
    );
}

export default ItemDetailContainer;