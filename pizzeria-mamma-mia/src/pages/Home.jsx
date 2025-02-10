import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
//import React, { useEffect, useState } from 'react';
//import Header from '../components/Header';
//import CardPizza from '../components/CardPizza';

const Home = () => {
  const { addToCart } = useCart();
  const [pizzas, setPizzas] = useState([]);

  
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('Error al consimir la API');
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPizzas();
  }, []);


  return (
    <div className="container mt-4">
      <h2>Menú de Pizzas</h2>
      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-md-4">
            <div className="card p-3">
              <h5>{pizza.name}</h5>
              <p>Precio: ${pizza.price.toFixed(2)}</p>
              <button className="btn btn-success" onClick={() => addToCart(pizza)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

 /* return (
    <div>
      <Header />
      <div className="d-flex justify-content-around flex-wrap">
        {pizzas.length > 0 ? (
          pizzas.map((pizza) => (
            <CardPizza 
              key={pizza.id} 
              {...pizza} 
              addToCart={addToCart} 
              onPizzaClick={() => setSelectedPizzaId(pizza.id)}
            />
          ))
        ) : (
          <p className="text-center">Cargando pizzas...</p>
        )}
      </div>
    </div>
  );
*/

export default Home;
