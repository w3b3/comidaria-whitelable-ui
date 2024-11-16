import React, { useState } from "react";
import "./App.css";
import { Menu } from "./Menu";
import { OrderSummary } from "./OrderSummary";
import { MenuItemInterface } from "./interfaces";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OrderedItemsProvider } from "./OrderedItemsContext";
import { HeaderComponent } from "./Header";
import { FooterComponent } from "./Footer";
import { RestaurantProvider } from "./RestaurantContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  const [orderedItems, setOrderedItems] = useState<MenuItemInterface[]>([]);
  const { restaurantParam } = useParams<{ restaurantParam: string }>();

  const path = window.location.pathname;
  const restaurantPath = path.substring(1);

  return (
    <Router>
      <RestaurantProvider initialRestaurant={restaurantParam || restaurantPath}>
        <OrderedItemsProvider>
          <QueryClientProvider client={queryClient}>
            <div className="App">
              <HeaderComponent />
              <Routes>
                <Route
                  path="/:restaurant_name"
                  element={
                    <Menu
                      orderedItems={orderedItems}
                      setOrderedItems={setOrderedItems}
                    />
                  }
                />
                <Route
                  path="/"
                  element={
                    <Menu
                      orderedItems={orderedItems}
                      setOrderedItems={setOrderedItems}
                    />
                  }
                />
              </Routes>
              {orderedItems.length > 0 && (
                <OrderSummary orderedItems={orderedItems} />
              )}
            <FooterComponent />
            </div>
          </QueryClientProvider>
        </OrderedItemsProvider>
      </RestaurantProvider>
    </Router>
  );
}

export default App;
