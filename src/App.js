import './App.css';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/* import ComponenteDeClase from './components/ClassComponent/ComponenteDeClase';
import ComponenteFuncion from './FunctionalComponent/ComponenteFuncion';
import Formulario from './formulario/formulario'; */
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="como andan?"/>
      <Footer/>
    </div>
  );
}

export default App;
