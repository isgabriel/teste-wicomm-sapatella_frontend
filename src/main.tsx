import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CartProvider } from "./contexts/CartContext.tsx";
import { LikeProvider } from "./contexts/LikeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CartProvider>
            <LikeProvider>
                <App />
            </LikeProvider>
        </CartProvider>
    </React.StrictMode>
);
