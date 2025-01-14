import React from 'react';

const CardPizza = ({ name, price, ingredients, img, addToCart }) => (
  <div className="card" style={{ width: '18rem', margin: '1rem' }}>
    <img src={img} className="card-img-top" alt={name} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">
        <strong>Ingredientes:</strong> {ingredients.join(', ')}
      </p>
      <p className="card-text">
        <strong>Precio:</strong> ${price.toLocaleString('es-CL')}
      </p>
      <div className="d-flex justify-content-start">
        <button className="btn btn-light btn-sm me-3">Ver más</button>
        <button className="btn btn-dark btn-sm" onClick={() => addToCart({ name, price, img })}>
          Añadir 🛒
        </button>
      </div>
    </div>
  </div>
);

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


export default CardPizza;
