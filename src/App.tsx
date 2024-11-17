// import { useState } from "react";
import "./App.css";
import { Menu } from "./Menu";
// import { OrderSummary } from "./OrderSummary";
// import { MenuItemInterface } from "./interfaces";
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
import { PlaceholderComponent } from "./PlaceholderComponent";

const queryClient = new QueryClient();

function App() {
  // const [orderedItems, setOrderedItems] = useState<MenuItemInterface[]>([]);
  const { no_footer } = useParams<{
    no_footer: string;
  }>();

  // const path = window.location.pathname;
  // const restaurantPath = path.substring(1);

  return (
    <Router>
      <RestaurantProvider>
        <OrderedItemsProvider>
          <QueryClientProvider client={queryClient}>
            <div className="App">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <HeaderComponent />
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Omnis aspernatur quo, distinctio tenetur minima
                        necessitatibus at illum nostrum esse nemo voluptatibus
                        dolores, placeat et pariatur eaque assumenda facilis
                        dolor neque.
                      </p>
                      <FooterComponent />
                    </>
                  }
                />
                <Route path="restaurants">
                  <Route
                    path=""
                    element={
                      <>
                        <HeaderComponent />
                        <Menu
                        // orderedItems={orderedItems}
                        // setOrderedItems={setOrderedItems}
                        />
                        <PlaceholderComponent />
                      </>
                    }
                  />

                  <Route
                    path=":restaurant_name"
                    element={
                      <>
                        <HeaderComponent />
                        {/* {orderedItems.length > 0 && (
                          <OrderSummary orderedItems={orderedItems} />
                        )} */}
                        <Menu
                        // orderedItems={orderedItems}
                        // setOrderedItems={setOrderedItems}
                        />
                        <FooterComponent />
                      </>
                    }
                  />
                </Route>
              </Routes>
            </div>
          </QueryClientProvider>
        </OrderedItemsProvider>
      </RestaurantProvider>
    </Router>
  );
}

export default App;
