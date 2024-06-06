import './App.css';
import Nav from './components/nav';
import Login from './login';
import Cart from "./cart"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Helpus from './help-us';
import Categories from "./categories"
import Shop from './shop';
import Start from './Start'
import menbanner from "./assests/menoffers.png"
import womenbanner from "./assests/womenoffers.png"
import Context from './context';
import Product from './Product';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
    <Routes> 
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/start' element={<Start/>}></Route>
      <Route path='/home' element={<Start/>}></Route>
      <Route path='/help-us' element={<Helpus/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/categories' element={<Categories/>}></Route>
      <Route path='/menshirts' element={<Context category='menshirts' banner={menbanner}  />}></Route>
      <Route path='/mentshirts' element={<Context category='mentshirts' banner={menbanner}/>}></Route>
      <Route path='/menpants' element={<Context category='menpants' banner={menbanner}/>}></Route>
      <Route path='/womensarees' element={<Context category='womensarees' banner={womenbanner}/>}></Route>
      <Route path='/womentops' element={<Context category='womentops'banner={womenbanner} />}></Route>
      <Route path='/womenbottoms' element={<Context category='womenbottoms'banner={womenbanner} />}></Route>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
