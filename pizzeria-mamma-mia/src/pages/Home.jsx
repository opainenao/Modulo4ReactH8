import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Home = ({ addToCart, setSelectedPizzaId }) => {
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
};

export default Home;
