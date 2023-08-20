import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import FooterX from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenid@s a nuestro sitio!" />
      <FooterX />
    </div>
  );
}

export default App;
