
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Restaurant {
//   id: string;
  name: string;
}

const fetchRestaurants = async (): Promise<Restaurant[]> => {
  const { data } = await axios.get("/restaurants");
  return data;
};

export const useRestaurants = () => {
  return useQuery<Restaurant[], Error>({ queryKey: ["restaurants"], queryFn: fetchRestaurants });
};