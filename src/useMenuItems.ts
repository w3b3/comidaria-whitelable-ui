import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchMenuItems = async () => {
  const { data } = await axios.get('https://api.emitajuba.com.br/data');
  // can I type this response as MenuItemInterface? How to handle the possibility of errors?
  return data;
};

export const useMenuItems = () => {
  return useQuery({ queryKey: ['menuItems'], queryFn: fetchMenuItems });
};