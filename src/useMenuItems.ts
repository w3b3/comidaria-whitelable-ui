import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MenuItemInterface } from "./interfaces";

const fetchMenuItems = async (restaurant_name: string): Promise<MenuItemInterface[]> => {
  try {
    const { data } = await axios.get(
      `https://api.emitajuba.com.br/data/restaurants/${restaurant_name}`
    );
    return data;
  } catch (error) {
    throw new Error("Error fetching menu items");
  }
};

export const useMenuItems = (restaurant_name: string) => {
  return useQuery({
    queryKey: ["menuItems", restaurant_name],
    queryFn: () => fetchMenuItems(restaurant_name),
    enabled: !!restaurant_name && typeof restaurant_name === "string",
  });
};
