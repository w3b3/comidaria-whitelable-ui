
import React, { createContext, useState, ReactNode } from "react";

interface RestaurantContextInterface {
  selectedRestaurant: string;
  setSelectedRestaurant: (restaurant: string) => void;
}

export const RestaurantContext = createContext<RestaurantContextInterface>({
  selectedRestaurant: "",
  setSelectedRestaurant: () => {},
});

export const RestaurantProvider = ({ children }: { children: ReactNode }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<string>("");

  return (
    <RestaurantContext.Provider value={{ selectedRestaurant, setSelectedRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};