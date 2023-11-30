
import './App.css';
import { NavBar } from './pages/navbar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Products } from './pages/products/Products';
import { AboutUs } from './pages/about-us/AboutUs';
import { NotFound } from './pages/not-found/NotFound';
import { Footer } from './pages/footer/Footer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="not-found" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

/*
 Routes: Define varias rutas dentro de la aplicación
 Route: Asocia un componente a una ruta específica

*/