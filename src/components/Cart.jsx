import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Item from './Item';


function Cart() {
    const { cartList, removeItem, clear, totalPrice } = useContext(CartContext);

    return (

        <div className="container">
            {
                cartList.map((item) => (
                    <div key={item.id}>
                        <br />
                        <h3>{item.title}</h3>
                        <p>Precio unit: ${item.price}</p>
                        <p>Precio total: ${item.price * item.quantity}</p>

                        <p>Cant: {item.quantity}</p>

                        <br />
                    </div>
                ))
                
            }
            {
                cartList.length > 0 ?
                    <>
                       <h2>Precio total: ${(totalPrice()).toFixed(2)}</h2>
                        <Button className="m-3 col-md-2" variant="danger" onClick={clear}>Vaciar carrito</Button>
                        <Link to="/checkout"><Button className="m-3 col-md-2" variant="success">Finalizar compra</Button></Link>
                    </> :
                    <>
                        <h2>El carrito está vacío, elige productos!</h2>
                        <Link to="/"><Button className="m-3 col-md-2" variant="dark">Elige productos</Button></Link>
                    </>
            }
        </div>

    )
};

export default Cart;