import React, { useContext, useEffect } from "react";
import { useRestaurants } from "./useRestaurants";
import { RestaurantContext } from "./RestaurantContext";
import LogoRestaurant from "./images/logo_restaurant.jpg";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const { data: restaurants, error, isLoading } = useRestaurants();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantContext)!;

  useEffect(() => {
    if (selectedRestaurant) {
      navigate(`/${selectedRestaurant}`);
    }
  }, [selectedRestaurant, navigate]);

  if (error) return <h2>❌ Error loading restaurants {error.message} ❌</h2>;
  if (isLoading) return <h2>💡 Loading...</h2>;

  return (
    <header className="App-header">
      <img
        className={"restaurant-logo"}
        src={LogoRestaurant}
        alt="restaurant logo"
      />
      <h1>Comidaria</h1>

      {!selectedRestaurant ? (
        <select
          value={selectedRestaurant}
          onChange={(e) => {
            setSelectedRestaurant(e.target.value);
            navigate(`/${e.target.value}`);
          }}
        >
          {restaurants?.flatMap((restaurant: string, i: number) => [
            i === 0 ? (
              <option key="none" value="">
                Select a restaurant
              </option>
            ) : null,
            <option key={restaurant} value={restaurant}>
              {decodeURIComponent(restaurant).replace(/_/g, " ")}
            </option>,
          ])}
        </select>
      ) : (
        <h2>
          {decodeURIComponent(selectedRestaurant).replace(/_/g, " ") + " ✅"}
        </h2>
      )}
    </header>
  );
};

export { HeaderComponent };
