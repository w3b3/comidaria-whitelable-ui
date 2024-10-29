import React, { createContext, useState, useContext, ReactNode } from 'react';
import { MenuItemInterface } from './interfaces';

interface OrderedItemsContextType {
    orderedItems: MenuItemInterface[];
    setOrderedItems: React.Dispatch<React.SetStateAction<MenuItemInterface[]>>;
}

interface OrderedItemsProviderProps {
    children: ReactNode;
  }

const OrderedItemsContext = createContext<OrderedItemsContextType | undefined>(undefined);

export const OrderedItemsProvider: React.FC<OrderedItemsProviderProps> = ({ children }) => {
    const [orderedItems, setOrderedItems] = useState<MenuItemInterface[]>([]);

    return (
        <OrderedItemsContext.Provider value={{ orderedItems, setOrderedItems }}>
            {children}
        </OrderedItemsContext.Provider>
    );
};

export const useOrderedItems = () => {
    const context = useContext(OrderedItemsContext);
    if (!context) {
        throw new Error('useOrderedItems must be used within an OrderedItemsProvider');
    }
    return context;
};