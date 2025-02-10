import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { total } = useCart(); // Consumimos el total del carrito

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">🍕 Pizzería Mamma Mia</Link>
        <div>
          <Link className="btn btn-warning mx-1" to="/login">🔐 Login</Link>
          <Link className="btn btn-warning mx-1" to="/register">📝 Register</Link>
          <Link className="btn btn-warning mx-1" to="/cart">
            🛒 Carrito <span className="badge bg-danger">${total.toFixed(2)}</span>
          </Link>
          <Link className="btn btn-warning mx-1" to="/profile">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
