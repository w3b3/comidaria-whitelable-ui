import { useState } from "react";
import "./App.css";
import { Menu } from "./Menu";
// import { OrderSummary } from "./OrderSummary";
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
  const { no_footer } = useParams<{
    no_footer: string;
  }>();

  const path = window.location.pathname;
  const restaurantPath = path.substring(1);

  return (
    <Router>
      <RestaurantProvider initialRestaurant={restaurantPath}>
        <OrderedItemsProvider>
          <QueryClientProvider client={queryClient}>
            <div className="App">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <HeaderComponent />

                      <Menu
                        orderedItems={orderedItems}
                        setOrderedItems={setOrderedItems}
                      />
                    </>
                  }
                />
                <Route path="restaurants">
                  <Route
                    path=":restaurant_name"
                    element={
                      <>
                        <HeaderComponent singleRestaurant={true} />
                        {/* {orderedItems.length > 0 && (
                          <OrderSummary orderedItems={orderedItems} />
                        )} */}
                        <Menu
                          orderedItems={orderedItems}
                          setOrderedItems={setOrderedItems}
                        />
                      </>
                    }
                  />
                </Route>
              </Routes>
              {!no_footer && <FooterComponent />}
            </div>
          </QueryClientProvider>
        </OrderedItemsProvider>
      </RestaurantProvider>
    </Router>
  );
}

export default App;
