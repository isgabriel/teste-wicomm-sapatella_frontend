import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import { Title } from "../Title";

import styles from "./styles.module.scss";
import { useCart } from "../../hooks/useCart";
import { useLike } from "../../hooks/useLike";

interface ProductCardProps {
    image: string;
    imageAlt: string;
    discount?: number;
    sizes: number[];
    title: string;
    newPrice: string;
    priceColor?: string;
    oldPrice: string;
    installments: string;
}

const ProductCard = ({ item }: { item: ProductCardProps }) => {
    const {
        image,
        imageAlt,
        discount,
        sizes,
        title,
        newPrice,
        priceColor,
        oldPrice,
        installments,
    } = item;
    const { addToCart, removeFromCart } = useCart();
    const [inCart, setInCart] = useState(false);
    const { incrementLike, decrementLike } = useLike();

    const [like, setLike] = useState(false);
    const [sizeSelected, setSizeSelected] = useState<number | undefined>(
        undefined
    );

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <article className={styles.itemCard}>
            <div className={styles.imageDiv}>
                <img src={image} alt={imageAlt} />

                {discount && (
                    <div className={styles.discount}>{discount}% OFF</div>
                )}

                <div className={styles.iconDiv}>
                    <img
                        src={
                            like
                                ? "assets/icons/favoriteHearts/heartPink.svg"
                                : "assets/icons/favoriteHearts/heartWhite.svg"
                        }
                        alt="Heart icon"
                        onClick={() => {
                            setLike(!like);
                            if (like) {
                                decrementLike();
                            } else {
                                incrementLike();
                            }
                        }}
                    />
                </div>

                <div id={styles.infos}>
                    <div id={styles.swiperButtonCustom}>
                        <h4>Selecione um tamanho</h4>
                        <Swiper
                            className={styles.SwipperSizes}
                            navigation={{
                                enabled: true,
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }}
                            modules={[Navigation]}
                            slidesPerView={5}
                            nested={true}
                            spaceBetween={1}
                            allowTouchMove={false}
                            onSwiper={(swiper) => {
                                setTimeout(() => {
                                    if (swiper?.params?.navigation) {
                                        const navigationOptions = swiper.params
                                            .navigation as NavigationOptions;

                                        navigationOptions.prevEl =
                                            navigationPrevRef.current;

                                        navigationOptions.nextEl =
                                            navigationNextRef.current;

                                        swiper.navigation.destroy();
                                        swiper.navigation.init();
                                        swiper.navigation.update();
                                    }
                                });
                            }}
                        >
                            {sizes.map((size, index) => (
                                <SwiperSlide
                                    className={styles.love}
                                    key={index}
                                    onClick={() => setSizeSelected(size)}
                                >
                                    <span
                                        className={
                                            size !== undefined &&
                                            size === sizeSelected
                                                ? styles.selectedSize
                                                : styles.notSelectedSizes
                                        }
                                    >
                                        {size}
                                    </span>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div
                            ref={navigationPrevRef}
                            className={styles.swiperButtonPrevCustom}
                        >
                            <img
                                src="/assets/icons/arrows/arrowLeft.svg"
                                alt="Next button"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div
                            ref={navigationNextRef}
                            className={styles.swiperButtonNextCustom}
                        >
                            <img
                                src="/assets/icons/arrows/arrowLeft.svg"
                                alt="Previous button"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                    <button
                        className={styles.infoButton}
                        onClick={() => {
                            if (inCart) {
                                removeFromCart();
                            } else {
                                addToCart();
                            }
                            setInCart(!inCart);
                        }}
                    >
                        {inCart ? "Remover da sacola" : "Adicionar à sacola"}
                    </button>
                </div>
            </div>

            <div className={styles.textCard}>
                <Title text={title} classProp="superSmallTitle" />
                <p
                    style={{ color: priceColor || "$black-color" }}
                    className={styles.newPrice}
                >
                    R$ {newPrice}
                    <span>R$ {oldPrice}</span>
                </p>
                <p className={styles.installmentsText}>{installments}</p>
            </div>
        </article>
    );
};
export { ProductCard };
