import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import FooterX from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { useState } from "react";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


function App() {

  const [carrito, setCarrito] = useState([]);
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer greeting="Bienvenid@s a M@RKET!" />} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenid@s a nuestro sitio!" />} />
            <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
          </Routes>
          <FooterX />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
