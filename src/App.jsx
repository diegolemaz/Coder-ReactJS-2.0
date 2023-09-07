import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import NavBar from "./components/NavBar";
import FooterX from "./components/Footer";
import ItemCount from "./components/ItemCount";
import ItemList from "./components/ItemList";
import ItemListContainer from "./components/ItemListContainer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenid@s a nuestro sitio!"/>
   
      <ItemCount stock={15} onAdd={(cantidad) => console.log('Cantidad agregada ',cantidad)}/>
      <ItemCount stock={0} onAdd={(cantidad) => console.log('Cantidad agregada ',cantidad)}/>
      
      <FooterX />
    </div>
  );
}

export default App;
