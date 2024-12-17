import React from 'react';

const formatPrice = (price) => price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="#">Pizzería Mamma Mia</a>
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-primary text-white">🍕 Home</button>
        {token ? (
          <>
            <button className="btn btn-outline-success">🔓 Prole</button>
            <button className="btn btn-outline-danger">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-warning text-white">🔐 Login</button>
            <button className="btn btn-outline-warning text-white">🔐 Register</button>
          </>
        )}
        <button className="btn btn-outline-info mx-1" style={{ marginLeft: 'auto' }}>
          🛒 Total: {formatPrice(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
