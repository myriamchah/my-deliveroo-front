import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addMeal = (meal) => {
    if (cart.find((m) => m.id === meal.id)) {
      meal.quantity += 1;
      setCart([...cart]);
    } else {
      meal.quantity = 1;
      setCart([...cart, meal]);
      setShowCart(true);
    }
  };

  const removeMeal = (meal) => {
    meal.quantity -= 1;
    setCart([...cart]);

    let sum = 0;
    cart.forEach((meal) => {
      sum += meal.quantity;
    });
    console.log(sum);

    if (sum === 0) {
      setShowCart(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://site--backend-deliveroo--rv77lmsyy8s9.code.run/"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <span>En cours de chargement... </span>
      ) : (
        <>
          <Header restaurant={data.restaurant} />
          <main className="container">
            <Menu categories={data.categories} {...{ addMeal, setShowCart }} />
            <Cart {...{ cart, setCart, addMeal, removeMeal, showCart }} />
          </main>
        </>
      )}
    </>
  );
};

export default App;
