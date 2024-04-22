import { useContext } from "react";
import { LikeContext } from "../contexts/LikeContext";

const useLike = () => {
    const context = useContext(LikeContext);
    if (!context) {
        throw new Error("useLike deve ser usado com um LikeProvider");
    }
    return context;
};

export { useLike };
