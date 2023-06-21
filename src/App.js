
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/navbar/Navbar';
import Signup from './components/Signup/Signup';
import Login from './components/Login/login';
import Products from './pages/Products/products';

function App() {
  return (
    <div>
        <Router>
            <Navbar/>
            {/* <Header/> */}
            <Routes>
                  <Route path='/' element={<Header/>}/>
                  <Route path='signup' element={<Signup/>}/>
                  <Route path='login' element={<Login/>}/>
                  <Route path='products' element={<Products/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
