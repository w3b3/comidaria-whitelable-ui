// src/Menu.tsx
import React, { useState } from "react";
// import { menuItems } from "./backend";
import { useMenuItems } from './useMenuItems';
import { MenuItem } from "./MenuItem";
import {MenuItemInterface} from "./interfaces";

interface MenuProps {
    orderedItems: MenuItemInterface[];
    setOrderedItems: React.Dispatch<React.SetStateAction<MenuItemInterface[]>>;
}

export const Menu: React.FC<MenuProps> = ({orderedItems, setOrderedItems}) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    // React Query data fetching
    const { data, error, isLoading } = useMenuItems();
    // Type 'menuItems' as MenuItemInterface[]
    const menuItems = data as MenuItemInterface[];

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading menu items</div>;

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    const handleOrderItem = (item: MenuItemInterface) => {
        setOrderedItems([...orderedItems, item]);
    };

    const categories = Array.from(new Set(menuItems.flatMap(item => item.category)));

    const filteredMenuItems = selectedCategory
        ? menuItems.filter(item => item.category.includes(selectedCategory))
        : menuItems;

    return (
        <div>
            <label htmlFor="category-select">Choose a category:</label>
            <select id="category-select" onChange={handleCategoryChange}>
                <option value="">All</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
            <div className="menu">
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
