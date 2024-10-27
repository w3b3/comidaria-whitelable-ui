// src/Menu.tsx
import React, { useState } from "react";
import { menuItems } from "./backend";
import { MenuItem } from "./MenuItem";
import {OrderSummary} from "./OrderSummary";
import {MenuItemInterface} from "./interfaces";

export const Menu: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [orderedItems, setOrderedItems] = useState<MenuItemInterface[]>([]);

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
            <OrderSummary  orderedItems={orderedItems}/>
            <select onChange={handleCategoryChange}>
                <option value="">All</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
            <div className="menu">
                {filteredMenuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={item}
                        onOrderItem={() => handleOrderItem(item)}
                    />
                ))}
            </div>
        </div>
    );
};
