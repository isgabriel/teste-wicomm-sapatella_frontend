import { ImagesSummerCard, SummerCard } from "../../data/SummerCard/summerCard";
import { Button } from "../Button";
import { Title } from "../Title";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./styles.module.scss";

const MultiItemCarousel = () => {
    return (
        <section className={styles.multiCarouselContainer}>
            <div className={styles.divContent}>
                {SummerCard.map((item, index) => (
                    <div key={index} className={styles.infosDiv}>
                        <Title text={item.title} classProp="mediumTitle" />
                        <p>{item.desc}</p>
                        <Button text={item.buttonText} classProps="btnSummer" />
                    </div>
                ))}

                <Swiper
                    className={styles.swiperDiv}
                    navigation={false}
                    autoplay={{
                        delay: 3000,
                    }}
                    loop
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    effect="fade"
                >
                    {ImagesSummerCard.map((image, index) => (
                        <SwiperSlide key={index}>
                            <figure className={styles.figure}>
                                <img
                                    src={image.image}
                                    alt={image.imageAlt}
                                    width={574}
                                    height={502}
                                />
                            </figure>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export { MultiItemCarousel };
