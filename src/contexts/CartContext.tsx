import { ReactNode, createContext, useState } from "react";

interface cartContextType {
    itemCount: number;
    addToCart: () => void;
    removeFromCart: () => void;
}

interface childrenProps {
    children: ReactNode;
}

const CartContext = createContext<cartContextType>({
    itemCount: 0,
    addToCart: () => {},
    removeFromCart: () => {},
});

const CartProvider = ({ children }: childrenProps) => {
    const [itemCount, setItemCount] = useState(0);

    const addToCart = () => {
        setItemCount((prevCount) => prevCount + 1);
    };

    const removeFromCart = () => {
        setItemCount((prevCount) => Math.max(prevCount - 1, 0));
    };

    return (
        <CartContext.Provider value={{ itemCount, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
