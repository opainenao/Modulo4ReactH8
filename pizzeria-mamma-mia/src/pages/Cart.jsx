import React from 'react';

const Cart = ({ cart, updateCart }) => {

  const handleIncrease = (index) => {
    const updatedCart = cart.map((item, idx) => 
      idx === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const handleDecrease = (index) => {
    const updatedCart = cart.map((item, idx) => 
      idx === index ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    );
    updateCart(updatedCart);
  };

  const total = cart.reduce((sum, pizza) => {
    return sum + (pizza.price * pizza.quantity);
  }, 0);

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {cart.map((pizza, index) => (
        <div key={index} className="d-flex justify-content-between align-items-center mb-3">
          <img src={pizza.img} alt={pizza.name} style={{ width: '50px' }} />
          <div>
            <h5>{pizza.name}</h5>
            <p>Precio: {pizza.price}</p>
            <p>Cantidad: {pizza.quantity}</p>
          </div>
          <div>
            <button className="btn btn-outline-primary" onClick={() => handleIncrease(index)}>+</button>
            <button className="btn btn-outline-danger mx-2" onClick={() => handleDecrease(index)}>-</button>
          </div>
        </div>
      ))}
      <h4>Total: {total}</h4>
      <button className="btn btn-success">Pagar</button>
    </div>
  );
};

export default Cart;
