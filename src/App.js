import {NavBar} from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo ="¡Bienvenid@s a Kawaii Store!" />}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer />}/>
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
