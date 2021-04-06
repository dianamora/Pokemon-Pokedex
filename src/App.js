import React from 'react';
import './App.css';
import {Switch, Route, NavLink, Redirect} from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";
import { Header } from './components/common/';
import About from "./containers/About";

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <NavLink to={"/"}>Search</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Route path={"/about"} exact component={About} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;