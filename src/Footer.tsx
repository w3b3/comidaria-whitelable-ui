import { useNavigate } from "react-router-dom";
import { RestaurantContext } from "./RestaurantContext";
import { useContext } from "react";

const FooterComponent = () => {
  const navigate = useNavigate();
  const { setSelectedRestaurant } = useContext(RestaurantContext);
  // const { restaurant } = useContext(OrderedItemsContext);

  const navigateHome = () => {
    navigate("/restaurants");
    setSelectedRestaurant("");
  };
  return (
    <footer className="fixed-footer">
      {/* <button onClick={() => navigate(-1)}>Back</button> */}
      <button onClick={navigateHome}>Todos os restaurantes</button>
    </footer>
  );
};

export { FooterComponent };
