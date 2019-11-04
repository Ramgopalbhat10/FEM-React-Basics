import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import SearchPets from "./components/SearchPets";

const App = () => {
  return (
    <div className="app">
      <Header />
      <SearchPets />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
