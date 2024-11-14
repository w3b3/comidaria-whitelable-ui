import React, { useEffect } from "react";
import {MenuItemInterface} from "./interfaces";
import { useOrderedItems } from "./OrderedItemsContext";

interface MenuItemProps {
    item: MenuItemInterface;
    onOrderItem: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item, onOrderItem }) => {
    const { name, description, price, image } = item;
    const { orderedItems } = useOrderedItems();
    // useEffect(() => {
    //     console.log("orderedItems", orderedItems);
    // }, [orderedItems])
    return (
        <div className="menu-item">
            <section className={'menu-item--header'}>
                <button className={'menu-item--button'} onClick={onOrderItem}>
                    {orderedItems.some(orderItem => orderItem.name === item.name) ? '✅' : '➕'} {name}
                </button>
            </section>
            <img src={image} alt={name} className="menu-item-image" />
            <section className="menu-item-details"> {/* Added a container for description and price */}
              <p>{description}</p>
              <p>${price.toFixed(2)}</p> {/* Price moved here */}
            </section>
        </div>
    );
};
