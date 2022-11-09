import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Footer from './Component/Footer/Footer';
import CheckoutPage from './pages/CheckoutPage';
function App() {
  return (
    <div className='App'>

   
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/About'  element={<About/>}/>
    <Route path='/Product'  element={<Product/>}/>
    <Route path='/Contact'  element={<Contact/>}/>
    <Route path='/Blog/'  element={<Blog/>}/>
    <Route path='/cart'  element={<Cart/>}/>
    <Route path='/checkout'  element={<CheckoutPage/>}/>


</Routes>
<Footer/>
</BrowserRouter>
    </div>
  );
}

export default App;
