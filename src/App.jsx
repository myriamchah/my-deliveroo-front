import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import Menu from "./components/Menu";

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
          <Menu categories={data.categories} />
        </>
      )}
    </>
  );
};

export default App;
