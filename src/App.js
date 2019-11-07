import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Header from "./components/Header";
import SearchPets from "./components/SearchPets";
import Details from "./components/PetDetails";

const App = () => {
  return (
    <div className="app">
      <Link to="/">
        <Header />
      </Link>
      <Router>
        <SearchPets path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
