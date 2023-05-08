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
import { CartProvider } from './components/context/CartContext';
import { CartScreen } from './components/CartScreen/CartScreen';
import {Checkout} from './components/Checkout/Checkout'
import {Somos} from './components/Somos/Somos'


function App() {
  
  return (
    <CartProvider>
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo ="¡Bienvenid@s a Kawaii Store!" />}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer />}/>
          <Route path='/somos' element={<Somos />}/>
          <Route path ='/checkout' element={<Checkout />} />
          <Route path='/cart/' element={<CartScreen />} />
          <Route path ='/checkout' element={<Checkout />} />
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </Router>
    </div>
    </CartProvider>
  );
}

export default App;
