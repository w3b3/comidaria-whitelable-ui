import React, { useState } from "react";
import "./App.css";
import { Menu } from "./Menu";
import { OrderSummary } from "./OrderSummary";
import { MenuItemInterface } from "./interfaces";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OrderedItemsProvider } from "./OrderedItemsContext";
import { HeaderComponent } from "./Header";
import { RestaurantProvider } from "./RestaurantContext";

const queryClient = new QueryClient();

function App() {
  const [orderedItems, setOrderedItems] = useState<MenuItemInterface[]>([]);

  return (
    <QueryClientProvider client={queryClient}>
      <OrderedItemsProvider>
        <RestaurantProvider>
          <div className="App">
            <HeaderComponent />
            <Menu
              orderedItems={orderedItems}
              setOrderedItems={setOrderedItems}
            />
            {orderedItems.length > 0 && <OrderSummary orderedItems={orderedItems} />}
          </div>
        </RestaurantProvider>
      </OrderedItemsProvider>
    </QueryClientProvider>
  );
}

export default App;
