import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/navbar/Navbar';
import Signup from './components/Signup/Signup';
import Login from './components/Login/login';
import Products from './pages/Products/products';
import { CartProvider } from './container/cartContext';
import CartItems from './container/cartItems';

function App() {
  return (
    <div>
    <CartProvider>
      
        <Router>
            <Navbar/>
            <Routes>
                  <Route path='/' element={<Header/>}/>
                  <Route path='signup' element={<Signup/>}/>
                  <Route path='login' element={<Login/>}/>
                  <Route path='products' element={<Products/>}/>
                  <Route path='cart' element={<CartItems/>}/>
            </Routes>
        </Router>
        </CartProvider>
    </div>
  );
}

export default App;
