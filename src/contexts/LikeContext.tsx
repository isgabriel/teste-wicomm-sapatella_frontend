import { ReactNode, createContext, useState } from "react";

type LikeContextType = {
    likeCount: number;
    incrementLike: () => void;
    decrementLike: () => void;
};
interface childrenProps {
    children: ReactNode;
}
const LikeContext = createContext<LikeContextType | undefined>(undefined);

const LikeProvider = ({ children }: childrenProps) => {
    const [likeCount, setLikeCount] = useState(0);

    const incrementLike = () => {
        setLikeCount((prevCount) => prevCount + 1);
    };

    const decrementLike = () => {
        if (likeCount > 0) {
            setLikeCount((prevCount) => prevCount - 1);
        }
    };

    return (
        <LikeContext.Provider
            value={{ likeCount, incrementLike, decrementLike }}
        >
            {children}
        </LikeContext.Provider>
    );
};

export { LikeContext, LikeProvider };
