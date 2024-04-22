import { useCart } from "../../../hooks/useCart";
import { useLike } from "../../../hooks/useLike";
import styles from "./styles.module.scss";

const Icons = () => {
    const { itemCount } = useCart();
    const { likeCount } = useLike();

    return (
        <div className={styles.iconsContainer}>
            <button>
                <img src="assets/icons/header/userIcon.svg" alt="" />
            </button>
            <button>
                <a href="#" className={styles.cartIcon}>
                    <img src="assets/icons/header/heartIcon.svg" alt="" />
                    {likeCount > 0 && (
                        <span className={styles.cartItemCount}>
                            {likeCount}
                        </span>
                    )}
                </a>
            </button>
            <button>
                <a href="#" className={styles.cartIcon}>
                    <img
                        src="assets/icons/header/shoppingCartIcon.svg"
                        alt=""
                    />
                    {itemCount > 0 && (
                        <span className={styles.cartItemCount}>
                            {itemCount}
                        </span>
                    )}
                </a>
            </button>
        </div>
    );
};

export { Icons };
