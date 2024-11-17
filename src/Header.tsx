import React, { useEffect } from "react";
import { useRestaurants } from "./useRestaurants";
// import { RestaurantContext } from "./RestaurantContext";
import LogoRestaurant from "./images/logo_restaurant.jpg";
import { useNavigate, useParams } from "react-router-dom";

interface HeaderComponentProps {
  singleRestaurant?: boolean;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  singleRestaurant = false,
}) => {
  const navigate = useNavigate();
  const { restaurant_name: restaurant } = useParams();
  const { data: restaurants, error, isLoading } = useRestaurants();
  // const { selectedRestaurant, setSelectedRestaurant } =
  // useContext(RestaurantContext)!;

  useEffect(() => {
    if (restaurant) {
      navigate(`/restaurants/${restaurant}`);
    }
  }, [restaurant, navigate]);

  if (error) return <h2>❌ Error loading restaurants {error.message} ❌</h2>;
  if (isLoading) return <h2>💡 Loading...</h2>;

  return (
    <header className="App-header">
      {!singleRestaurant && (
        <img
          className={"restaurant-logo"}
          src={LogoRestaurant}
          alt="restaurant logo"
        />
      )}

      {restaurant ? (
        <h1>
          {restaurant && decodeURIComponent(restaurant).replace(/_/g, " ")}
        </h1>
      ) : (
        <div className="restaurant-cards">
          {restaurants?.map((restaurant: string) => (
            <div
              key={restaurant}
              className="restaurant-card clickable"
              onClick={() => {
                // setSelectedRestaurant(restaurant);
                navigate(`/restaurants/${restaurant}`);
              }}
            >
              {restaurant && decodeURIComponent(restaurant).replace(/_/g, " ")}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export { HeaderComponent };
