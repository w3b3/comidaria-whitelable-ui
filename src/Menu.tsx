// src/Menu.tsx
import React, { useState } from "react";
// import { menuItems } from "./backend";
import { useMenuItems } from "./useMenuItems";
import { MenuItem } from "./MenuItem";
// import { MenuItemInterface } from "./interfaces";
// import { RestaurantContext } from "./RestaurantContext";
import { useParams, useNavigate } from "react-router-dom";
import { useRestaurants } from "./useRestaurants";
// import { PlaceholderComponent } from "./PlaceholderComponent";

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
  const navigate = useNavigate();
  const {
    data: restaurants,
    error: restaurantsError,
    // isLoading: restaurantsLoading,
  } = useRestaurants();

  // React Query data fetching
  const {
    data: menuItems,
    error: menuItemsError,
    // isLoading: menuItemsLoading,
  } = useMenuItems(restaurant);

  // Type 'menuItems' as MenuItemInterface[]
  // const menuItems = data as MenuItemInterface[];

  // if (data === undefined) {
  //   return (
  //     <p>Nada</p>
  //   );
  // }
  // if (isLoading) return <div>Loading...</div>;
  if (restaurantsError) return <div>❌ Error loading restaurantsError {restaurantsError.message} ❌</div>;
  if (menuItemsError) return <div>❌ Error loading menuItemsError {menuItemsError.message} ❌</div>;

  // if (restaurantsError) return <h2>❌ Error loading restaurants {restaurantsError.message} ❌</h2>;
  // if (restaurantsLoading) return <h2>💡 Loading...</h2>;
  // if (data === undefined)
  //   return (
  //     <PlaceholderComponent />
  //   );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // const handleOrderItem = (item: MenuItemInterface) => {
  // setOrderedItems([...orderedItems, item]);
  // };

  const categories =
    !!menuItems && menuItems.length > 0
      ? Array.from(new Set(menuItems.flatMap((item) => item.category)))
      : [];

  const filteredMenuItems = selectedCategory
    ? menuItems?.filter((item) => item.category.includes(selectedCategory))
    : menuItems;

  return (
    <div className="menu">
      {restaurant ? (
        <>
          <div className="category-cards">
            <CategoryCard
              category="All"
              onClick={() => handleCategoryChange("")}
            />
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                category={category}
                onClick={() => handleCategoryChange(category)}
              />
            ))}
          </div>
          <div className="menu--items-list">
            {filteredMenuItems?.map((item, index) => (
              <MenuItem
                key={item.name}
                item={item}
                // onOrderItem={() => handleOrderItem(item)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="restaurant-cards">
          {restaurants?.map((restaurant: string) => (
            <div
              key={restaurant}
              className="restaurant-card clickable"
              onClick={() => {
                // setSelectedRestaurant(restaurant);
                navigate(`/restaurants/${restaurant}`);
              }}
            >
              {restaurant && decodeURIComponent(restaurant).replace(/_/g, " ")}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
