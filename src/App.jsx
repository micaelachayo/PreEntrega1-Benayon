import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings= "Gracias por visitarnos!" />
    </>
  );
}

export default App;
