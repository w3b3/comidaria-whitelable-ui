import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { Menu } from "./Menu";
import { OrderSummary } from "./OrderSummary";
import { MenuItemInterface } from "./interfaces";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OrderedItemsProvider } from "./OrderedItemsContext";
import { HeaderComponent } from "./Header";
import { RestaurantProvider, RestaurantContext } from "./RestaurantContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  const [orderedItems, setOrderedItems] = useState<MenuItemInterface[]>([]);
  const { setSelectedRestaurant } = useContext(RestaurantContext);

  useEffect(() => {
    const path = window.location.pathname;
    if (path !== "/") {
      const restaurantName = path.split("/")[1];
      setSelectedRestaurant(restaurantName);
      // TODO: remove this console.log
      console.log("restaurantName", restaurantName);
    }
  }, [setSelectedRestaurant]);

  return (
    <QueryClientProvider client={queryClient}>
      <OrderedItemsProvider>
        <RestaurantProvider>
          <Router>
            <div className="App">
              <HeaderComponent />
              <Routes>
                <Route path="/:restaurant_name" element={
                  <Menu
                    orderedItems={orderedItems}
                    setOrderedItems={setOrderedItems}
                  />
                } />
                <Route path="/" element={
                  <Menu
                    orderedItems={orderedItems}
                    setOrderedItems={setOrderedItems}
                  />
                } />
              </Routes>
              {orderedItems.length > 0 && (
                <OrderSummary orderedItems={orderedItems} />
              )}
            </div>
          </Router>
        </RestaurantProvider>
      </OrderedItemsProvider>
    </QueryClientProvider>
  );
}

export default App;
