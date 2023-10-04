import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  // AGREGAR AL CARRITO
  const addItem = (item, quantity) => {
    const itemAdd = { ...item, quantity };
    const newCart = [...cartList];
    const isInCart = newCart.find((prod) => prod.id === itemAdd.id);
    if (isInCart) {
      isInCart.quantity += quantity;
    } else {
      newCart.push(itemAdd);
    }
    setCartList(newCart);
  };

  // BORRAR TODO EL CARRITO
  const clear = () => {
    setCartList([]);
  };

  // BORRAR ITEM DEL CARRITO
  const removeItem = (product) => {
    const cartFilt = cartList.filter((item) => item.id !== product);
    setCartList(cartFilt);
  };

  // CANTIDAD CARRITO
  const quantityCart = () => {
    return cartList.reduce((acc, item) => acc + item.quantity, 0);
  };

  // TOTAL DEL CARRITO
  const totalPrice = () => {
    return cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addItem, clear, removeItem, quantityCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
