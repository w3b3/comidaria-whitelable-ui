import React from "react";
import {MenuItemInterface} from "./interfaces";

interface MenuItemProps {
    item: MenuItemInterface;
    onOrderItem: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({item, onOrderItem}) => {
    const {name, description, price, image} = item;
    return (
        <div className="menu-item">
            <section className={'menu-item--header'}>
                <button onClick={onOrderItem}>➕ Get me this!</button>
                <h3>{name}</h3>
                <p>${price.toFixed(2)}</p></section>
            <img src={image} alt={name} className="menu-item-image"/>
            <p>{description}</p>
        </div>
    );
};
