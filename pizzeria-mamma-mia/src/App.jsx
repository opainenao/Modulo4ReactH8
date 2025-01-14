import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';
import Cart from './Cart';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [cart, setCart] = useState([]);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  // Función para añadir pizza al carrito
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

  const renderContent = () => {
    switch (currentView) {
      case 'login':
        return <Login onBackToHome={() => setCurrentView('home')} />;
      case 'register':
        return <Register onBackToHome={() => setCurrentView('home')} />;
      case 'cart':
        return <Cart cart={cart} updateCart={updateCart} onBackToHome={() => setCurrentView('home')} />;
      case 'home':
      default:
        return <Home addToCart={addToCart} />;
    }
  };

  return (
    <div className="d-flex flex-column justify-content-between min-vh-100">
      <Navbar
        onLoginClick={() => setCurrentView('login')}
        onRegisterClick={() => setCurrentView('register')}
        onHomeClick={() => setCurrentView('home')}
        onCartClick={() => setCurrentView('cart')}
      />
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
