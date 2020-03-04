import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import Category from "./components/Category";
import Footer from "./components/Footer";

import "./scss/styles.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category/:category" component={Category} />
        <Route path="/recipe/:id" component={Recipe} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
