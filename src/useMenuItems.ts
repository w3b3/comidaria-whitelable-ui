import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMenuItems = async (restaurant_name: string) => {
  const { data } = await axios.get(
    `https://api.emitajuba.com.br/data/restaurants/${restaurant_name}`
  );
  // can I type this response as MenuItemInterface? How to handle the possibility of errors?
  return data;
};

export const useMenuItems = (restaurant_name: string) => {
  return useQuery({
    queryKey: ["menuItems", restaurant_name],
    queryFn: () => fetchMenuItems(restaurant_name),
  });
};
