import React, { useEffect, useState } from "react";

const Pizza = ({ pizzaId }) => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${pizzaId}`)
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) =>
        console.error("Error al cargar los detalles de la pizza:", error)
      );
  }, [pizzaId]);

  if (!pizza) {
    return <p className="text-center">Cargando...</p>;
  }

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
