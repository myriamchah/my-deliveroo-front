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

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3200/");
      setData(response.data);
      setIsLoading(false);
    };
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
            <Menu
              categories={data.categories}
              {...{ cart, setCart, setShowCart }}
            />
            <Cart {...{ cart, showCart }} />
          </main>
        </>
      )}
    </>
  );
};

export default App;
