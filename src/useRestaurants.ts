import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchRestaurants = async () => {
  const { data } = await axios.get(
    `https://api.emitajuba.com.br/data/restaurants`
  );
  
  return data as string[];
};

export const useRestaurants = () => {
  return useQuery<string[]>({ queryKey: ["restaurants"], queryFn: fetchRestaurants });
};
