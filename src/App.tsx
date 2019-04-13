import React from "react";
import PokemonGrid from "./pages/PokemonGrid";
import PokemonView from "./pages/PokemonView";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Route exact path="/" component={PokemonGrid} />
        <Route path="/pokemon/:name" component={PokemonView} />
      </div>
    </Router>
  );
};

export default App;
