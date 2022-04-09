import React, { useEffect, useState } from "react";
import Grocery from "./component/Grocery";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const App = () => {
  const [grocery, setGrocery] = useState([]);
  const [search, setSearch] = useState("");
  const [getSearch, setGetSearch] = useState("drinks");
  console.log({grocery});
  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/food/products/search?query=${getSearch}&apiKey=951acd1cd8b1488894db16ff987f7be0`
      );
      const data = await response.json();
      console.log({data});
      setGrocery(data.products);
    };
    getItems();
  }, [getSearch]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getResult = (e) => {
    e.preventDefault();
    setGetSearch(search);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">

        <form onSubmit={getResult} className="searchForm">
          <input
            className="searchBar"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Search for available products"
          />

          <button className="searchButton" type="submit">
            Search{" "}
          </button>
        </form>

        <p  className ='itemsAvailable'>
          <i>There are {grocery.length} of this items available in the store...
        </i></p>

        <div className="card">
          {grocery.length > 0 ? (
            grocery.map((products) => (
              <Grocery
                title={products.title}
                image={products.image}
                key={products.id}
              />
            ))
          ) : (
            <div>
              <h1
                style={{
                  color: "white",
                  webkitTextStroke: '2px #4E5521',
                  fontWeight: 'bolder',
                  textAlign: "center",
                  marginTop: "50px",
                }}
              >
                Items not available in the store
              </h1>
              <p
                style={{
                  backgroundColor: "#363d0b",
                  color: "#ffff",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                We are sorry for the incovenience, Check back later...
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
