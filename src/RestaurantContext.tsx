import React, { createContext, ReactNode, useState } from "react";
import { useParams } from "react-router-dom";

interface RestaurantContextInterface {
  selectedRestaurant: string;
  setSelectedRestaurant: (restaurant: string) => void;
}

export const RestaurantContext = createContext<RestaurantContextInterface>({
  selectedRestaurant: "",
  setSelectedRestaurant: () => {},
});

export const RestaurantProvider = ({ children }: { children: ReactNode, initialRestaurant?: string }) => {
  const { restaurant_name: restaurant = "" } = useParams();
  const [selectedRestaurant, setSelectedRestaurant] = useState<string>(restaurant);

  return (
    <RestaurantContext.Provider value={{
      selectedRestaurant,
      setSelectedRestaurant,
     }}>
      {children}
    </RestaurantContext.Provider>
  );
};