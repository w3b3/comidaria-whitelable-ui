import React from 'react';
import './App.css';
import {Menu} from "./Menu";
import LogoRestaurant from "./images/logo_restaurant.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img className={"restaurant-logo"} src={LogoRestaurant} alt="restaurant logo"/>
          <h1>Comidaria - Menu</h1>
      </header>
      <Menu />
    </div>
  );
}

export default App;
