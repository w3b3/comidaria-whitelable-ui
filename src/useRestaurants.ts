import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchRestaurants = async () => {
  const { data } = await axios.get(
    `https://api.emitajuba.com.br/data/McDonalds`
  );
  return data;
};

export const useRestaurants = () => {
  return useQuery({ queryKey: ["restaurants"], queryFn: fetchRestaurants });
};
