import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import Shop from './components/shop';
import Home from './components/home';
import ChillCorner from './components/ChillCorner'
import Contact from './components/contact'
import Footer from './components/footer'
import CategoriesGrid from './components/FeaturedProducts'
import CardRevirw from './components/reviwes'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Nav />
     
      <Routes>
        <Route path='/' element={
          <>
            <Home />
            <CategoriesGrid />
            <CardRevirw />
          </>
        } />
        <Route path="/shop" element={<Shop />} />
        <Route path="/ChillCorner" element={<ChillCorner />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     <Footer/>
    </BrowserRouter>
      

  );
}

export default App;
