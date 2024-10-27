import React from "react";
import { MenuItemInterface } from "./interfaces";

interface OrderSummaryProps {
    orderedItems:MenuItemInterface[];
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ orderedItems }) => {
    const totalPrice = orderedItems.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h2>Order Summary</h2>
            <section>
                {orderedItems.map((item, index) => (
                    <span key={index}>{item.name} {orderedItems.length - 1 === index ? '➡' : '➕'} </span>
                //     ${item.price.toFixed(2)}
                ))}
            <span>Total: ${totalPrice.toFixed(2)}</span>
            </section>
        </div>
    );
};
