import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Checkout() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    return (
        <Form>
            <Form.Group className="m-3 col-md-3">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control placeholder="Ingrese su nombre" type="text" value={name} onChange={(event => setName(event.target.value))} />
            </Form.Group>
            <Form.Group className="m-3 col-md-3">
                <Form.Label>Tel:</Form.Label>
                <Form.Control placeholder="Ingrese su teléfono" type="number" value={phone} onChange={(event => setPhone(event.target.value))} />
            </Form.Group>
            <Form.Group className="m-3 col-md-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control placeholder="Ingrese su mail" type="text" value={email} onChange={(event => setEmail(event.target.value))} />
            </Form.Group>
            <Button className="m-3 col-md-2" variant="primary" type="submit">Finalizar compra</Button>
        </Form>
    )
}