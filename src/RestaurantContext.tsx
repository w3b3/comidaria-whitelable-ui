import React, { createContext, useState, ReactNode, useEffect } from "react";

interface RestaurantContextInterface {
  selectedRestaurant: string;
  setSelectedRestaurant: (restaurant: string) => void;
}

export const RestaurantContext = createContext<RestaurantContextInterface>({
  selectedRestaurant: "",
  setSelectedRestaurant: () => {},
});

export const RestaurantProvider = ({ children, initialRestaurant = '' }: { children: ReactNode, initialRestaurant?: string }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<string>(initialRestaurant);

  return (
    <RestaurantContext.Provider value={{ selectedRestaurant, setSelectedRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};