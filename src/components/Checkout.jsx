import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CartContext } from "../context/cartContext";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import Loading from "./Loading";
import { Link } from "react-router-dom";

export default function Checkout() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const { cartList, totalPrice, clear } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [ordenId, setOrdenId] = useState();

    function createOrder() {

        if ((name !== "") && (phone !== "") && (email !== "")) {

            setLoading(true);

            const itemsCart = cartList.map((producto) => ({
                id: producto.id,
                title: producto.title,
                quantity: producto.quantity,
                price: producto.price,
            }));
            const db = getFirestore();
            const order = {
                buyer: { name, email, phone },
                items: itemsCart,
                date: serverTimestamp(),
                total: totalPrice().toFixed(2),
            };

            const ordenesRef = collection(db, "ordenes");
            addDoc(ordenesRef, order).then((res) => {
                setOrdenId(res.id);
                setLoading(false);
                clear();
            });
        }
    }
    if (loading) {
        return (
            <>
                <h1> Se está creando su orden...</h1>
                <Loading />
            </>
        );
    }

    if (ordenId) {
        return (
            <div>
                <h1> Su compra se ha procesado con éxito!</h1>
                <br />
                <h3>{"El id de la orden es: " + ordenId}</h3>
                <br />
                <Link to="/"><Button className="m-3 col-md-2" variant="dark">Vuelve a comprar</Button></Link>
            </div>
        );

    }

    return (
        <div>
            <h1>Finaliza tu compra</h1>
            <Form id="form" onSubmit={(e) => e.preventDefault()}>
                <Form.Group className="m-3 col-md-3" id="name">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control placeholder="Ingrese su nombre" type="text" value={name} onChange={(event) => setName(event.target.value)} required />

                </Form.Group>
                <Form.Group className="m-3 col-md-3" id="phone">
                    <Form.Label>Tel:</Form.Label>
                    <Form.Control placeholder="Ingrese su teléfono" type="number" value={phone} onChange={(event) => setPhone(event.target.value)} required />

                </Form.Group>
                <Form.Group className="m-3 col-md-3" id="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control placeholder="Ingrese su mail" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />

                </Form.Group>
                <Button onClick={createOrder} className="m-3 col-md-2" variant="primary" type="submit">Finalizar compra</Button>
            </Form>


        </div>
    );
}
