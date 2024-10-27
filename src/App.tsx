import React, {useState} from 'react';
import './App.css';
import {Menu} from "./Menu";
import LogoRestaurant from "./images/logo_restaurant.jpg";
import {OrderSummary} from "./OrderSummary";
import {MenuItemInterface} from "./interfaces";

function App() {
    const [orderedItems, setOrderedItems] = useState<MenuItemInterface[]>([]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Comidaria</h1>
                <img className={"restaurant-logo"} src={LogoRestaurant} alt="restaurant logo"/>
                <OrderSummary orderedItems={orderedItems}/>
            </header>

            <Menu orderedItems={orderedItems} setOrderedItems={setOrderedItems}/>
        </div>
    );
}

export default App;
