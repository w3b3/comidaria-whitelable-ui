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

      {!selectedRestaurant ? (
        <>
          <label htmlFor="restaurant-select" className="sr-only">
            Selecione: 
          </label>
          <select
            id="restaurant-select"
            value={selectedRestaurant}
            onChange={(e) => {
              setSelectedRestaurant(e.target.value);
              navigate(`/${e.target.value}`);
            }}
            aria-label="Selecione um restaurante"
          >
            {restaurants?.flatMap((restaurant: string, i: number) => [
              i === 0 ? (
                <option key="none" value="">
                  Restaurantes disponiveis
                </option>
              ) : null,
              <option key={restaurant} value={restaurant}>
                {decodeURIComponent(restaurant).replace(/_/g, " ")}
              </option>,
            ])}
          </select>
        </>
      ) : (
        <h1>
          {decodeURIComponent(selectedRestaurant).replace(/_/g, " ") + " ✅"}
        </h1>
      )}
    </header>
  );
};

export { HeaderComponent };
