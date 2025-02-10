//import React, { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";


const Pizza = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  return (
    <div className="container mt-4">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} className="img-fluid" />
      <p className="mt-3">{pizza.desc}</p>
      <h4>Ingredientes:</h4>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>
        <strong>Precio: {pizza.price} CLP</strong>
      </p>
      <button className="btn btn-primary">Añadir al Carrito</button>
    </div>
  );
};

export default Pizza;
