import React, { useEffect } from "react";
// import { useRestaurants } from "./useRestaurants";
// import { RestaurantContext } from "./RestaurantContext";
import LogoRestaurant from "./images/logo_restaurant.jpg";
import { useNavigate, useParams } from "react-router-dom";
// import { PlaceholderComponent } from "./PlaceholderComponent";

interface HeaderComponentProps {
  // singleRestaurant?: boolean;
}

const HeaderComponent: React.FC<HeaderComponentProps> = (
  // {
  // singleRestaurant = false,}
) => {
  const navigate = useNavigate();
  const { restaurant_name: restaurant } = useParams();
  // const { selectedRestaurant, setSelectedRestaurant } =
  // useContext(RestaurantContext)!;

  useEffect(() => {
    if (restaurant) {
      navigate(`/restaurants/${restaurant}`);
    }
  }, [restaurant, navigate]);

  return (
    <header className="App-header">
      {/* {!restaurant && ( */}
        {/* <img
          className={"restaurant-logo"}
          src={LogoRestaurant}
          alt="restaurant logo"
        /> */}
      {/* )} */}

      {restaurant ? (
        <h1>
          {restaurant && decodeURIComponent(restaurant).replace(/_/g, " ")}
        </h1>
      ) : (
        <>
        <img
          className={"restaurant-logo"}
          src={LogoRestaurant}
          alt="restaurant logo"
        />
        </>
      )}
    </header>
  );
};

export { HeaderComponent };
