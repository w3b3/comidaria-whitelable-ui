import React, { useState } from "react";
import "./App.css";
import { Menu } from "./Menu";
import LogoRestaurant from "./images/logo_restaurant.jpg";
import { OrderSummary } from "./OrderSummary";
import { MenuItemInterface } from "./interfaces";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OrderedItemsProvider } from './OrderedItemsContext';
import { useRestaurants } from "./useRestaurants";


const queryClient = new QueryClient();

function App() {
  const [orderedItems, setOrderedItems] = useState<MenuItemInterface[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
  const { data: restaurants, isLoading } = useRestaurants();

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
              <h1>Comidaria</h1>
              {isLoading ? (
                <p>Loading restaurants...</p>
              ) : (
                <><label htmlFor="restaurant-select">Choose a restaurant:</label><select
                    id="restaurant-select"
                    value={selectedRestaurant || ""}
                    onChange={(e) => setSelectedRestaurant(e.target.value)}
                  >
                    <option value="" disabled>Select a restaurant</option>
                    {restaurants?.map((restaurant: { name: string }) => (
                      <option key={restaurant.name} value={restaurant.name}>
                        {restaurant.name}
                      </option>
                    ))}
                  </select></>
              )}
              {selectedRestaurant && <OrderSummary orderedItems={orderedItems} />}
            </section>
          </header>

          <Menu orderedItems={orderedItems} setOrderedItems={setOrderedItems} />
        </div>
      </OrderedItemsProvider>
    </QueryClientProvider>
  );
}

export default App;
