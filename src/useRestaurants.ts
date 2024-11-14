import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchRestaurants = async () => {
  const { data } = await axios.get(
    `https://api.emitajuba.com.br/data/restaurants`
  );
  const decoded = data.map((element: string) => {
    return decodeURIComponent(element);
  });
  return decoded as string[];
};

export const useRestaurants = () => {
  return useQuery<string[]>({ queryKey: ["restaurants"], queryFn: fetchRestaurants });
};
