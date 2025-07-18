import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import Shop from './components/shop';
import Home from './components/home';
import Collection from './components/collection'
import Contact from './components/contact'
import CategoriesGrid from './components/FeaturedProducts'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Nav />
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/shop" element={<Shop />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
     <CategoriesGrid/>
    </BrowserRouter>
      

  );
}

export default App;
