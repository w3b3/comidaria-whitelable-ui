// src/Menu.tsx
import React, { useState } from "react";
// import { menuItems } from "./backend";
import { useMenuItems } from "./useMenuItems";
import { MenuItem } from "./MenuItem";
import { MenuItemInterface } from "./interfaces";
// import { RestaurantContext } from "./RestaurantContext";
import Placeholder from "./images/logo_app.jpg";
import { useParams } from "react-router-dom";

// interface MenuProps {
  // orderedItems: MenuItemInterface[];
  // setOrderedItems: React.Dispatch<React.SetStateAction<MenuItemInterface[]>>;
// }

const CategoryCard: React.FC<{
  category: string;
  onClick: (category: string) => void;
}> = ({ category, onClick }) => (
  <div className="category-card" onClick={() => onClick(category)}>
    {category}
  </div>
);

export const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  // const { selectedRestaurant } = useContext(RestaurantContext);
  const { restaurant_name: restaurant = "" } = useParams();

  // React Query data fetching
  const { data, error, isLoading } = useMenuItems(restaurant);
  // Type 'menuItems' as MenuItemInterface[]
  const menuItems = data as MenuItemInterface[];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading menu items</div>;
  if (data === undefined)
    return (
      <img className={"placeholder"} src={Placeholder} alt="placeholder" />
    );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // const handleOrderItem = (item: MenuItemInterface) => {
    // setOrderedItems([...orderedItems, item]);
  // };

  const categories = Array.from(
    new Set(menuItems.flatMap((item) => item.category))
  );

  const filteredMenuItems = selectedCategory
    ? menuItems.filter((item) => item.category.includes(selectedCategory))
    : menuItems;

  return (
    <div className="menu">
      <div className="category-cards">
        <CategoryCard category="All" onClick={() => handleCategoryChange("")} />
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            category={category}
            onClick={() => handleCategoryChange(category)}
          />
        ))}
      </div>
      <div className="menu--items-list">
        {filteredMenuItems.map((item, index) => (
          <MenuItem
            key={item.name}
            item={item}
            // onOrderItem={() => handleOrderItem(item)}
          />
        ))}
      </div>
    </div>
  );
};
