import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import FooterX from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="Bienvenid@s a nuestro sitio!" />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenid@s a nuestro sitio!" />} />
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
        <FooterX />
      </BrowserRouter>
    </div>
  );
}

export default App;
