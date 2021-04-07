import React from 'react';
import './App.css';
import {Switch, Route, NavLink, Redirect} from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";
import { Header } from './components/common/';
import About from "./containers/About";
import Contact from "./containers/Contact";

function App() {
  return (
    <div className="App">
      <Header /> {/* stateless component */}
      <nav>
        <NavLink to={"/"}>Search</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
      
      <Switch> {/* stateless component */}
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Route path={"/about"} exact component={About} /> {/* stateless container */}
        <Route path={"/contact"} exact component={Contact} /> {/* stateless component */}
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}
{/* Navbar is stateless container */}
export default App;