import { useContext } from "react";
import carrIm from "../assets/carritoNav.png";
import { CartContext } from '../context/cartContext';
useContext


const CartWidget =() =>  {
 const { quantityCart } = useContext(CartContext);
 
 return (
        <>
        <img src={carrIm} alt="Carrito" height={40}/>
        <span>{quantityCart()>0 ? quantityCart() : null}</span>
        </>
    )
}

export default CartWidget;

