import logo from './logo.svg';
import './App.css';

import ListaTareas from './components/ListaTareas';
import FormularioTareas from '/.components/FormularioTareas';


function App() {
  return (
    <div className="App">
      <ListaTareas />
      <FormularioTareas />
    </div>
  );
}

export default App;
