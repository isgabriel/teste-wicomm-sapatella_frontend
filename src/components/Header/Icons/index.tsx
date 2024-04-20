import styles from "./styles.module.scss";

const Icons = () => {
    return (
        <div className={styles.iconsContainer}>
            <button>
                <img src="assets/icons/header/userIcon.svg" alt="" />
            </button>
            <button>
                <img src="assets/icons/header/heartIcon.svg" alt="" />
            </button>
            <button>
                <img src="assets/icons/header/shoppingCartIcon.svg" alt="" />
            </button>
        </div>
    );
};

export { Icons };
