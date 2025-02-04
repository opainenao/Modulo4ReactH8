import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Login from './pages/Login';
import Profile from './pages/Profile'; 
import NotFound from './pages/NotFound'; 

function App() {
  const [cart, setCart] = useState([]);
  const [selectedPizzaId, setSelectedPizzaId] = useState(null);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find(item => item.name === pizza.name);
      if (existingPizza) {
        return prevCart.map(item =>
          item.name === pizza.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  return (
    <div className="d-flex flex-column justify-content-between min-vh-100">
      <Navbar />
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} setSelectedPizzaId={setSelectedPizzaId} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/pizza/:id" element={<Pizza pizzaId={selectedPizzaId} addToCart={addToCart} />} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
