import { FavoriteProducts } from "../FavoriteProducts";
import styles from "./styles.module.scss";

const SmallProductsSection = () => {
    return (
        <section className={styles.smallSectionContainer}>
            <img
                src="/public/assets/images/generalImages/imageSummer2Girls.svg"
                alt="duas mulheres se divertindo no carnaval"
            />

            <FavoriteProducts
                props={{
                    totalSlides: 6,
                    slidesPerGroup: 2,
                    slidesPerView: 2,
                    spaceBetween: 10,
                }}
            />
        </section>
    );
};

export { SmallProductsSection };
