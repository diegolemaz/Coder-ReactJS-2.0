import carrIm from "../assets/carritoNav.png";

let cantidadCarrito = 0;
const CartWidget =() =>  {
    return (
        <>
        <img src={carrIm} alt="Carrito" height={40}/>
        <span>{cantidadCarrito}</span>
        </>
    )
}

export default CartWidget;