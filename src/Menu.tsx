// src/Menu.tsx
import React, { useState, useContext } from "react";
// import { menuItems } from "./backend";
import { useMenuItems } from "./useMenuItems";
import { MenuItem } from "./MenuItem";
import { MenuItemInterface } from "./interfaces";
import { RestaurantContext } from "./RestaurantContext";
import Placeholder from "./images/logo_app.jpg";

interface MenuProps {
  orderedItems: MenuItemInterface[];
  setOrderedItems: React.Dispatch<React.SetStateAction<MenuItemInterface[]>>;
}

export const Menu: React.FC<MenuProps> = ({
  orderedItems,
  setOrderedItems,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { selectedRestaurant } = useContext(RestaurantContext);

  // React Query data fetching
  const { data, error, isLoading } = useMenuItems(selectedRestaurant);
  // Type 'menuItems' as MenuItemInterface[]
  const menuItems = data as MenuItemInterface[];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading menu items</div>;
  if (data === undefined)
    return (
      <img className={"placeholder"} src={Placeholder} alt="placeholder" />
    );

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleOrderItem = (item: MenuItemInterface) => {
    setOrderedItems([...orderedItems, item]);
  };

  const categories = Array.from(
    new Set(menuItems.flatMap((item) => item.category))
  );

  const filteredMenuItems = selectedCategory
    ? menuItems.filter((item) => item.category.includes(selectedCategory))
    : menuItems;

  return (
    <div className="menu">
      <label htmlFor="category-select">Choose a category:</label>
      <select id="category-select" onChange={handleCategoryChange}>
        <option value="">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="menu--items-list">
        {filteredMenuItems.map((item, index) => (
          <MenuItem
            key={item.name}
            item={item}
            onOrderItem={() => handleOrderItem(item)}
          />
        ))}
      </div>
    </div>
  );
};
