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
        <div className="restaurant-cards">
          {restaurants?.map((restaurant: string) => (
            <div
              key={restaurant}
              className="restaurant-card clickable"
              onClick={() => {
                setSelectedRestaurant(restaurant);
                navigate(`/${restaurant}`);
              }}
            >
              {decodeURIComponent(restaurant).replace(/_/g, " ")}
            </div>
          ))}
        </div>
      ) : (
        <h1>
          {decodeURIComponent(selectedRestaurant).replace(/_/g, " ")}
        </h1>
      )}
    </header>
  );
};

export { HeaderComponent };
