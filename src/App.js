import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [topAnime, setTopAnime] = useState([]);
  console.log(searchValue);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    },
  };

  const fetchApi = async () => {
    if (searchValue.length === 0) {
      const response = await fetch(
        `https://jikan1.p.rapidapi.com/top/anime/1/upcoming`,
        options
      );
      const data = await response.json();
      setTopAnime(data.top);
      console.log(data.top);
    } else {
      const response = await fetch(
        `https://jikan1.p.rapidapi.com/search/anime?q=${searchValue}`,
        options
      );
      const data = await response.json();
      setTopAnime(data.results);
      console.log(data.results);
    }
  };
  useEffect(() => {
    fetchApi();
  }, [searchValue]);
  console.log(topAnime);

  return (
    <div className="App">
      <NavBar />
      <Hero setSearchValue={setSearchValue} topAnime={topAnime} />
    </div>
  );
}

export default App;
