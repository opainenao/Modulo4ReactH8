import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, total } = useCart();

  /*return (
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
};*/

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p className="alert alert-warning">Tu carrito está vacío.</p>
      ) : (
        cart.map((pizza) => (
          <div key={pizza.id} className="d-flex justify-content-between align-items-center border p-3 mb-3">
            <img src={pizza.img} alt={pizza.name} style={{ width: '50px' }} />
            <div>
              <h5>{pizza.name}</h5>
              <p>Precio: ${pizza.price.toFixed(2)}</p>
              <p>Cantidad: {pizza.quantity}</p>
            </div>
            <div>
              <button className="btn btn-outline-primary mx-1" onClick={() => increaseQuantity(pizza.id)}>+</button>
              <button className="btn btn-outline-danger mx-1" onClick={() => decreaseQuantity(pizza.id)}>-</button>
              <button className="btn btn-danger mx-2" onClick={() => removeFromCart(pizza.id)}>🗑 Eliminar</button>
            </div>
          </div>
        ))
      )}

      <h4 className="mt-3">Total: <strong>${total.toFixed(2)}</strong></h4>
      {cart.length > 0 && <button className="btn btn-success">Pagar</button>}
    </div>
  );
};

export default Cart;
