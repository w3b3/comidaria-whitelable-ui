import React, { useState } from "react";
import "./App.css";
import { Menu } from "./Menu";
import LogoRestaurant from "./images/logo_restaurant.jpg";
import { OrderSummary } from "./OrderSummary";
import { MenuItemInterface } from "./interfaces";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OrderedItemsProvider } from './OrderedItemsContext';
import { HeaderComponent } from "./Header";


const queryClient = new QueryClient();

function App() {
  const [orderedItems, setOrderedItems] = useState<MenuItemInterface[]>([]);

  return (
    <QueryClientProvider client={queryClient}>
      <OrderedItemsProvider>
        <div className="App">
          <header className="App-header">
            <img
              className={"restaurant-logo"}
              src={LogoRestaurant}
              alt="restaurant logo"
            />
            <section>
              <HeaderComponent/>
              <OrderSummary orderedItems={orderedItems} />
            </section>
          </header>

          <Menu orderedItems={orderedItems} setOrderedItems={setOrderedItems} />
        </div>
      </OrderedItemsProvider>
    </QueryClientProvider>
  );
}

export default App;
