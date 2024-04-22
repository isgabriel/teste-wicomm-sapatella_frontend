import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Title } from "../Title";
import { ProductCard } from "../ProductCard";
import { FavoritesData } from "../../data/Favorites/favorites";

import styles from "./styles.module.scss";

interface WeekFavoritesProps {
    title?: string;
    totalSlides: number;
    slidesPerGroup: number;
    slidesPerView: number | "auto";
    spaceBetween?: number;
}

const FavoriteProducts = ({ props }: { props: WeekFavoritesProps }) => {
    const { title, totalSlides, slidesPerGroup, slidesPerView, spaceBetween } =
        props;

    return (
        <section className={styles.favoriteProductsContainer}>
            <Title text={title} classProp="bigTitle" />

            <div className={styles.productsDiv}>
                <Swiper
                    className="mySwiper"
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    slidesPerGroup={slidesPerGroup}
                    slidesPerView={slidesPerView}
                    loop
                    nested={true}
                    spaceBetween={spaceBetween}
                >
                    {Array.from(
                        { length: totalSlides },
                        (_, index) => FavoritesData[index % 4]
                    ).map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProductCard item={item} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};
export { FavoriteProducts };
