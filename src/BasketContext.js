/*import React, { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

export function BasketProvider({ children }) {
    const [basketItems, setBasketItems] = useState([]);

    return (
        <BasketContext.Provider value={{ basketItems, setBasketItems }}>
            {children}
        </BasketContext.Provider>
    );
}

export function useBasket() {
    return useContext(BasketContext);
}
*/