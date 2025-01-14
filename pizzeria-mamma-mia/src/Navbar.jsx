import React from 'react';

const Navbar = ({ onLoginClick, onRegisterClick, onHomeClick, onCartClick }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container d-flex justify-content-between align-items-center">
      <a className="navbar-brand" href="#" onClick={onHomeClick}>
        🍕 Pizzería Mamma Mia
      </a>
      <div>
        <button
          className="btn btn-warning mx-1"
          onClick={onLoginClick}
        >
          🔐 Login
        </button>
        <button
          className="btn btn-warning mx-1"
          onClick={onRegisterClick}
        >
          📝 Register
        </button>
        <button
          className="btn btn-warning mx-1"
          onClick={onCartClick}
        >
          🛒 Carrito
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
