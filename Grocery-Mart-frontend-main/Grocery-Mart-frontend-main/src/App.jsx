import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./pages/Navbar";
import Home from './pages/Home';
import Footer from './pages/Footer';
import About from "./pages/About";
import Cart from "./pages/Cart";
import Register from './pages/Register';
import Login from "./pages/Login";
import Item from "./pages/Item";

function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/item' element={<Item/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App;
