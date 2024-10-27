import React from "react";
import {MenuItemInterface} from "./interfaces";
import { useOrderedItems } from "./OrderedItemsContext";

interface MenuItemProps {
    item: MenuItemInterface;
    onOrderItem: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({item, onOrderItem}) => {
    const {name, description, price, image} = item;
    const { orderedItems } = useOrderedItems();

    return (
        <div className="menu-item">
            <section className={'menu-item--header'}>
                <button onClick={onOrderItem} style={{padding: 10, flex: 1, marginRight: 10, fontSize: 20, background: 'none', color: 'white', fontWeight: "bold"}}>
                    {/* check if this item is in orderedItems */}
                    {orderedItems.includes(item.name) ? '✅' : '➕'}
                    {name}
                </button>
                {/* <h3>{name}</h3> */}
                <p>${price.toFixed(2)}</p></section>
            <img src={image} alt={name} className="menu-item-image"/>
            <p>{description}</p>
        </div>
    );
};
